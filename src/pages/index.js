import { Api } from "../components/Api.js"
import { Card } from "../components/Card.js"
import { FormValidator } from "../components/FormValidator.js"
import { Section } from "../components/Section.js"
import { UserInfo } from "../components/UserInfo.js"
import { PopupWithImage } from "../components/PopupWithImage.js"
import { PopupWithForm } from "../components/PopupWithForm.js"
import {
  validationConfig,
  popupFormEdit,
  popupFormAdd,
} from "../utils/constants.js"



// Переменные окна popapEdit
const popupEdit = document.querySelector(".popup_type_edit")
const popupFormName = popupEdit.querySelector(".popup__input_type_name")
const popupFormVocation = popupEdit.querySelector(".popup__input_type_vocation")

// Переменные окна popapAdd
const popupAdd = document.querySelector(".popup_type_add")

//Переменные окна popapImage
const popupImage = document.querySelector(".popup_type_image")

//Переменныe секции Profile
const editButton = document.querySelector(".profile__edit-button_type_info")
const profileName = document.querySelector(".profile__info-name")
const profileVocation = document.querySelector(".profile__info-vocation")
const addButton = document.querySelector(".profile__add-button")
const avatar = document.querySelector('.profile__avatar')

// Переменные section element
const elementGrid = document.querySelector(".elements__grid")



// экземпляр класса для проверки валидации popapEdit
const formProfile = new FormValidator(validationConfig, popupFormEdit)
formProfile.enableValidation()

// экземпляр класса для проверки валидации popapAdd
const formAdd = new FormValidator(validationConfig, popupFormAdd)
formAdd.enableValidation()

const popupEditProfile = new PopupWithForm({
  popupElement: popupEdit,
  handleFormSubmit: () => {
    onEditSubmit()
  },
})

popupEditProfile._getInputValues()
popupEditProfile.setEventListeners()

const popupAddCard = new PopupWithForm({
  popupElement: popupAdd,
  handleFormSubmit: (inputs) => {
    addCard(inputs)
  },
})
popupAddCard.setEventListeners()


const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-30/',
  headers: {
    authorization: 'e95f6452-4a83-47bc-9602-e1836af50369',
    'Content-Type': 'application/json'
  }
}); 


// вставляем данные полученные с сервера на сайт
const infoData = api.getInfoDate().then(data => {

  profileName.textContent = data.name, 
  profileVocation.textContent = data.about 
  avatar.style.backgroundImage = `url(${data.avatar})`

})

let cardsList
let cards = []

// Добавление карточек из массива полученного с сервера
api.getInitialCards().then(data => {
  cards = data
  cardsList = new Section(
    {
      renderer: (item) => {
        const element = createCard(item)
        cardsList.addItemAppend(element)
      },
    },
    elementGrid
  )
  cardsList.renderItems(data)
})


// Экземпляр, отвечающий за управление отображения информации о пользователе страницы
const userInform = new UserInfo({
  name: profileName,
  vocation: profileVocation,
})

//Функция на открытие окна popupEdit
const openPopupProfile = () => {
  const getUserInfo = userInform.getUserInfo()
  popupFormName.value = getUserInfo.userName
  popupFormVocation.value = getUserInfo.userVocation
  popupEditProfile.open()
}

//Функция на сохранения данных popupEdit
const onEditSubmit = () => {
  api.saveInfoDate({
    name: popupFormName.value,
    about: popupFormVocation.value
  })
  .then(data => {
    userInform.setUserInfo({
      userName: data.name,
      userVocation: data.about,
    })
  })
  .catch(err => {
    console.log(err)
  })
  popupEditProfile.close()
}

// Функция на открытие окна popupAdd
const openPopupAddCard = () => {
  popupAddCard.open()
}

//экземпляр PopupWithImage вставляет в попап картинку с src изображения и подписью к картинке
const openPopupImage = new PopupWithImage(popupImage)
openPopupImage.setEventListeners()

//Функция для создания новой карточки
const createCard = (item) => {
  const card = new Card(
    {
      data: item,
      handleCardClick: () => {
        openPopupImage.open({
          element: item,
        })
      },
      handleDeleteIconClick: (cardId) => {
        deleteCard(cardId)
      },
      handleLikeClick: async (cardId) => {
        await likeCardOnServer(cardId)
      },
    },
    ".elements__template"
  )
  const cardElement = card.generateCard()
  return cardElement
}


//Лайк карточки
const likeCardOnServer = async (cardId) => {
  console.log(cards)
  let card = cards.find(c => c._id === cardId)
  if (!card.likes.find(l => l._id === '87bfa82b813ceb37b97c25dd')) {
    // api.likeCard(cardId)
    //   .then(() => {
    //     card._myLike = !card._myLike
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    try {
      await api.likeCard(cardId)
      
    }
    catch(e) {
      console.log(e)
    }
  }
  else {
    // api.deleteLikeCard(cardId)
    //   .then(() => {
    //     card._myLike = !card._myLike
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    await api.deleteLikeCard(cardId)
  }
}


//Удаление карточки
const deleteCard = (cardId) => {
  api.deleteCard(cardId)
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
}

// Добавление новой карточки в массив
const addCard = (inputs) => {
  const addCardElement = {
    name: inputs.title,
    link: inputs.link,
  }

  api.saveCard(addCardElement).then(() => {
    const newElement = createCard(addCardElement)
    cardsList.addItemPrepend(newElement)
  })
  .catch(err => {
    console.log(err)
  })

  popupAddCard.close()
}

editButton.addEventListener("click", openPopupProfile)

addButton.addEventListener("click", openPopupAddCard)
