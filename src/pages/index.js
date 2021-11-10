// import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { initialCards, validationConfig, popupFormEdit, popupFormAdd } from '../utils/constants.js';

// Переменные окна popapEdit
const popupEdit = document.querySelector('.popup_type_edit')
const popupFormName = popupEdit.querySelector ('.popup__input_type_name') 
const popupFormVocation = popupEdit.querySelector ('.popup__input_type_vocation')


// Переменные окна popapAdd
const popupAdd = document.querySelector('.popup_type_add')

//Переменные окна popapImage
const popupImage = document.querySelector('.popup_type_image')

//Переменныe секции Profile
const editButton = document.querySelector('.profile__edit-button') 
const profileName = document.querySelector('.profile__info-name') 
const profileVocation = document.querySelector('.profile__info-vocation') 
const addButton = document.querySelector('.profile__add-button')

// Переменные section element
const elementGrid = document.querySelector('.elements__grid');

//Объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе
const userInfoObj = {
  name: profileName,
  vocation: profileVocation,
}


// экземпляр класса для проверки валидации popapEdit
const formProfile = new FormValidator(validationConfig, popupFormEdit)
formProfile.enableValidation();


// экземпляр класса для проверки валидации popapAdd
const formAdd = new FormValidator(validationConfig, popupFormAdd )
formAdd.enableValidation();


const popupEditProfile =  new PopupWithForm({
  popupElement: popupEdit,
  handleFormSubmit: () => {
    onEditSubmit()
  }
}) 
popupEditProfile.setEventListeners();


const popupAddCard =  new PopupWithForm({
  popupElement: popupAdd,
  handleFormSubmit: (inputs) => {
    addCard( inputs)
  }
}) 
popupAddCard.setEventListeners();


// Экземпляр, отвечающий за управление отображения информации о пользователе страницы
const userInform = new UserInfo({
  data: userInfoObj,
})


//Функция на открытие окна popupEdit
const openPopupProfile = () => {
  const getUserInfo = userInform.getUserInfo();
  popupFormName.value = getUserInfo.userName
  popupFormVocation.value = getUserInfo.userVocation;
  popupEditProfile.open();
}


//Функция на сохранения данных popupEdit
const onEditSubmit = () => {
  userInform.setUserInfo({
    userName: popupFormName.value, 
    userVocation: popupFormVocation.value
  }),
  popupEditProfile.close()
}


// Функция на открытие окна popupAdd
const  openPopupAddCard = () => {
  popupAddCard.open()
}

//экземпляр PopupWithImage вставляет в попап картинку с src изображения и подписью к картинке
const openPopupImage = new PopupWithImage(popupImage)
openPopupImage.setEventListeners();


//Функция для создания новой карточки
const createCard = (item) =>{
  const card = new Card({
    data: item,
    handleCardClick: () =>{
      openPopupImage.open({
        data: item
      })
    }
  },
  '.elements__template');
  const cardElement = card.generateCard();
  return cardElement 
}

// Добавление карточек из готового массива
const cardsList = new Section({
  renderer:(item) => {
    const element = createCard(item) 
    cardsList.addItemAppend(element)
  }
},
elementGrid
);

cardsList.renderItems(initialCards)


// Добавление новой карточки в массив
const addCard = ( inputs) => {

  const addCardElement = {
      name: inputs.title,
      link: inputs.link,
  }
  const newElement = createCard(addCardElement)
  cardsList.addItemPrepend(newElement)

  popupAddCard.close()
}

editButton.addEventListener('click', openPopupProfile)

addButton.addEventListener ('click',  openPopupAddCard)
