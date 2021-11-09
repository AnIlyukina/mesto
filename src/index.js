import './pages/index.css'
import { Card, initialCards } from './components/Card.js';
import { validationConfig, FormValidator } from './components/FormValidator.js'
import { Section } from './components/Section.js';
import { UserInfo } from './components/UserInfo.js'
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { popupEdit, popupAdd, popupImage, editButton, addButton, elementGrid, userInfoObj } from './utils/constants.js';


// экземпляр класса для проверки валидации popapEdit
const formProfile = new FormValidator(validationConfig, '.popup__form_type_edit')
formProfile.enableValidation();


// экземпляр класса для проверки валидации popapAdd
const formAdd = new FormValidator(validationConfig, '.popup__form_type_add')
formAdd.enableValidation();


const openEditPopap =  new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (event) => {
    onEditSubmit(event)
  }
}) 

const openAddPopup =  new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (event, inputs) => {addCard(event, inputs)}
}) 


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
const addCard = (evt, inputs) => {
  evt.preventDefault() 
  const addCardElement = {
      name: inputs.title,
      link: inputs.link,
  }
  const newElement = createCard(addCardElement)
  cardsList.addItem(newElement)

  openAddPopup.close()
  evt.currentTarget.reset()
}

editButton.addEventListener('click', onEditClick)

addButton.addEventListener ('click', onAddClick)
