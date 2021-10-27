import { Card, initialCards } from './Card.js';
import { validationConfig, FormValidator } from './FormValidator.js'
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import {UserInfo} from './UserInfo.js'
import { PopupWithImage } from './PopupWithImage.js';


// Переменные окна popapEdit
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditForm = popupEdit.querySelector('.popup__form_type_edit') 


// Переменные окна popapAdd
const popupAdd = document.querySelector('.popup_type_add')
const placeName = popupAdd.querySelector('.popup__input_type_title')
const placeImageLink = popupAdd.querySelector('.popup__input_type_link')
const popupAddForm = popupAdd.querySelector('.popup__form_type_add') 


//Переменные окна popapImage
const popupImage = document.querySelector('.popup_type_image')


//Переменныe секции Profile
const editButton = document.querySelector('.profile__edit-button') 
const profileName = document.querySelector('.profile__info-name') 
const profileVocation = document.querySelector('.profile__info-vocation') 
const addButton = document.querySelector('.profile__add-button')


// Переменные section element
const elementGrid = document.querySelector('.elements__grid');

//экземпляр класса для проверки валидации popapEdit
const formProfile = new FormValidator(validationConfig, '.popup__form_type_edit')
formProfile.enableValidation();

//экземпляр класса для проверки валидации popapAdd
const formAdd = new FormValidator(validationConfig, '.popup__form_type_add')
formAdd.enableValidation();

//Экземпляр класса popupEdit, отвечающие за его открытие и закрытие
const openEditPopap = new Popup(popupEdit)

//Экземпляр класса popupAdd, отвечающие за его открытие и закрытие
const openAddPopup = new Popup (popupAdd)

//Объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе
const userInfoObj = {
  name: profileName,
  vocation: profileVocation,
}

// Экземпляр, отвечающий за управление отображения информации о пользователе страницы
const userInform = new UserInfo({
  data: userInfoObj,
})

//Функция на открытие окна popupEdit
const onEditClick = () => {
  userInform.getUserInfo();
  openEditPopap.open();
}

//Функция на сохранения данных popupEdit
const onEditSubmit = (event) => {
  event.preventDefault()
  userInform.setUserInfo()
  openEditPopap.close()
}

// Функция на открытие окна popupAdd
const onAddClick = () => {
  openAddPopup.open()
}

//Функция для создания новой карточки
const createCard = (item) =>{
  const card = new Card({
    data: item,
    handleCardClick: (event) =>{
      const openPopupImage = new PopupWithImage(item, popupImage)
      openPopupImage.open(event)
    }
  },
    '.elements__template');
  const cardElement = card.generateCard();
  return cardElement 
}

// Добавление карточек из готового массива
const cardsList = new Section({
  items: initialCards,
  renderer:(item) => {
    const element = createCard(item) 
    cardsList.addItem(element)
  }
},
elementGrid
);

cardsList.renderItems()

// Добавление новой карточки в массив
const addCard = (evt) =>{
  evt.preventDefault() 
    const addCardElement = {
        name: placeName.value,
        link: placeImageLink.value
      }

  const newElement = createCard(addCardElement)
  elementGrid.prepend(newElement);

  openAddPopup.close() 
  evt.currentTarget.reset()
}

editButton.addEventListener('click', onEditClick)
popupEditForm.addEventListener ('submit', onEditSubmit)


popupAddForm.addEventListener('submit', addCard)
addButton.addEventListener ('click', onAddClick)

