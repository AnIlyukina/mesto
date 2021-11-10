// import './pages/index.css';
import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidator.js'
import { Section } from './components/Section.js';
import { UserInfo } from './components/UserInfo.js'
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { initialCards, validationConfig, popupFormEdit, popupFormAdd } from './utils/constants.js';

// Переменные окна popapEdit
export const popupEdit = document.querySelector('.popup_type_edit')

// Переменные окна popapAdd
export const popupAdd = document.querySelector('.popup_type_add')

//Переменные окна popapImage
export const popupImage = document.querySelector('.popup_type_image')

//Переменныe секции Profile
export const editButton = document.querySelector('.profile__edit-button') 
export const profileName = document.querySelector('.profile__info-name') 
export const profileVocation = document.querySelector('.profile__info-vocation') 
export const addButton = document.querySelector('.profile__add-button')

// Переменные section element
export const elementGrid = document.querySelector('.elements__grid');

//Объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе
export const userInfoObj = {
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
  userInform.getUserInfo();
  popupEditProfile.open();
}

//Функция на сохранения данных popupEdit
const onEditSubmit = () => {
  userInform.setUserInfo()
  popupEditProfile.close()
}

// Функция на открытие окна popupAdd
const  openPopupAddCard = () => {
  popupAddCard.open()
}

const openPopupImage = new PopupWithImage(popupImage)
openPopupImage.setEventListeners();

//Функция для создания новой карточки
const createCard = (item) =>{
  const card = new Card({
    data: item,
    handleCardClick: (item) =>{
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
