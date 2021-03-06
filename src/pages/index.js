import './index.css'
import { Api } from "../components/Api.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import {
  validationConfig,
  popupFormEditSelector,
  popupFormAddSelector,
  popupFormAvatarSelector,
} from "../utils/constants.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";

// Переменные окна popapEdit
const popupEdit = document.querySelector(".popup_type_edit");
const popupFormName = popupEdit.querySelector(".popup__input_type_name");
const popupFormVocation = popupEdit.querySelector(
  ".popup__input_type_vocation"
);

// Переменные окна popapAdd
const popupAdd = document.querySelector(".popup_type_add");

//Переменные окна popapImage
const popupImageElement = document.querySelector(".popup_type_image");

//Переменные окна popapConfirm
const popupConfirm = document.querySelector(".popup_type_confirm");

//Переменные окна popupAvatar
const popupAvatar = document.querySelector(".popup_type_avatar");
const editButtonAvatar = document.querySelector(
  ".profile__edit-button_type_avatar"
);
const popupFormAvatar = document.querySelector(".popup__input_type_avatar");

//Переменныe секции Profile
const editButtonInfo = document.querySelector(
  ".profile__edit-button_type_info"
);
const profileName = document.querySelector(".profile__info-name");
const profileVocation = document.querySelector(".profile__info-vocation");
const addButton = document.querySelector(".profile__add-button");
const avatarElemenet = document.querySelector(".profile__avatar");

// Переменные section element
const elementGrid = document.querySelector(".elements__grid");

const popupWithSubmit = new PopupWithSubmit(popupConfirm);
popupWithSubmit.setEventListeners();

// экземпляр класса для проверки валидации popapEdit
const formProfile = new FormValidator(validationConfig, popupFormEditSelector);
formProfile.enableValidation();

// экземпляр класса для проверки валидации popapAvatar
const formAvatar = new FormValidator(validationConfig, popupFormAvatarSelector);
formAvatar.enableValidation();

// экземпляр класса для проверки валидации popapAdd
const formAdd = new FormValidator(validationConfig, popupFormAddSelector);
formAdd.enableValidation();

//экземпляр класса для отправки запросов
const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/cohort-30/",
  headers: {
    authorization: "e95f6452-4a83-47bc-9602-e1836af50369",
    "Content-Type": "application/json",
  },
});

let cardsList;
let cards = [];
let userId;

// загрузка данных на странице
Promise.all([api.getInfoDate(), api.getInitialCards()])
  .then((data) => {
    console.log(data)
    userId = data[0]._id;

    //Добавление данных полученные с сервера
    userInform.setUserInfo({
      userName: data[0].name,
      userVocation: data[0].about
    })

    userInform.setAvatar(data[0].avatar) 
    // avatar.style.backgroundImage = `url(${data[0].avatar})`;

    //Добавление карточек полученных с сервера
    cards = data[1];
    cardsList = new Section(
      {
        renderer: (item) => {
          const element = createCard(item);
          cardsList.addItemAppend(element);
        },
      },
      elementGrid
    );
    cardsList.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

// Экземпляр, отвечающий за управление отображения информации о пользователе страницы
const userInform = new UserInfo({
  name: profileName,
  vocation: profileVocation,
  avatar: avatarElemenet,
});

//Функция на открытие окна popupEdit
const openPopupProfile = () => {
  formProfile.clearValidation()
  const getUserInfo = userInform.getUserInfo();
  popupFormName.value = getUserInfo.userName;
  popupFormVocation.value = getUserInfo.userVocation;
  popupEditProfile.open();
};

//Создание экземпляра класса формы с информацией о пользователе
const popupEditProfile = new PopupWithForm({
  popupElement: popupEdit,
  handleFormSubmit: () => {
    onEditSubmit();
  },
});

popupEditProfile.setEventListeners();

//Функция на сохранения данных popupEdit
const onEditSubmit = () => {
  popupEditProfile.toggleLoadingSubmit(true);
  api
    .saveInfoDate({
      name: popupFormName.value,
      about: popupFormVocation.value,
    })
    .then((data) => {
      userInform.setUserInfo({
        userName: data.name,
        userVocation: data.about,
      });
    })
    .then(() => {
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.toggleLoadingSubmit(false);
    });
};

//Создание экземпляра класса формы для изменения аватара
const popupUpdateAvatar = new PopupWithForm({
  popupElement: popupAvatar,
  handleFormSubmit: () => {
    console.log("dhjdshv"), updateAvatar();
  },
});

popupUpdateAvatar.setEventListeners();

const openPopupAvatar = () => {
  formAvatar.clearValidation()
  popupUpdateAvatar.open();
};

const updateAvatar = () => {
  popupUpdateAvatar.toggleLoadingSubmit(true);
  api
    .changeAvatar(popupFormAvatar.value)
    .then((data) => {
      userInform.setAvatar(data.avatar)
    })
    .then(() => {
      popupUpdateAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupUpdateAvatar.toggleLoadingSubmit(false);
    });
};

// Функция на открытие окна popupAdd
const openPopupAddCard = () => {
  formAdd.clearValidation()
  popupAddCard.open();
};

const popupAddCard = new PopupWithForm({
  popupElement: popupAdd,
  handleFormSubmit: (inputs) => {
    addCard(inputs);
  },
});

popupAddCard.setEventListeners();

// Добавление новой карточки в массив
const addCard = (inputs) => {
  const addCardElement = {
    name: inputs.title,
    link: inputs.link,
  };

  api
    .saveCard(addCardElement)
    .then((data) => {
      const newElement = createCard(data);

      cardsList.addItemPrepend(newElement);
    })
    .then(() => {
      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    });
};


//Функция для создания новой карточки
const createCard = (data) => {
  const card = new Card(
    {
      data,
      userId,
      handleCardClick: () => {
        popupImage.open(data);
      },
      handleDeleteIconClick: (cardId) => {
        popupWithSubmit.open();
        popupWithSubmit.setSubmitAction(() => {
          popupWithSubmit.toggleLoadingSubmit(true)
          api
            .deleteCard(cardId)
            .then(() => {
              popupWithSubmit.close();
              card.cardDelete();
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              popupWithSubmit.toggleLoadingSubmit(false);
            });
        });
      },
      handleLikeSet: (cardId) => {
        api
          .likeCard(cardId)
          .then((res) => {
            card.like(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      handleLikeDelete: (cardId) => {
        api
          .deleteLikeCard(cardId)
          .then((res) => {
            card.like(res);
          })
          .catch((err) => {
            console.log(err);
          })
        },
      },
    ".elements__template"
  );
  const cardElement = card.generateCard();
  return cardElement;
};

//экземпляр PopupWithImage вставляет в попап картинку с src изображения и подписью к картинке
const popupImage = new PopupWithImage(popupImageElement);
popupImage.setEventListeners();

editButtonInfo.addEventListener("click", openPopupProfile);

addButton.addEventListener("click", openPopupAddCard);

editButtonAvatar.addEventListener("click", openPopupAvatar);