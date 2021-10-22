import { Card } from './Card.js';
import { formProfile,formAdd } from './FormValidator.js'

// // Переменные окна popapEdit
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditForm = popupEdit.querySelector('.popup__form_type_edit') 
const popupEditCloseButton = popupEdit.querySelector('.popup__close') 
const popupFormName = popupEdit.querySelector ('.popup__input_type_name') 
const popupFormVocation = popupEdit.querySelector ('.popup__input_type_vocation')

// // // Переменные окна popapAdd
const popupAdd = document.querySelector('.popup_type_add')
const popupAddCloseButton = popupAdd.querySelector('.popup__close') 
const placeName = popupAdd.querySelector('.popup__input_type_title')
const placeImageLink = popupAdd.querySelector('.popup__input_type_link')
const popupAddForm = popupAdd.querySelector('.popup__form_type_add') 
const popupAddButtonSave = popupAdd.querySelector('.popup__form-save')

// //Переменные окна popapImage
const popupImage = document.querySelector('.popup_type_image')
const popupImageCloseButton = popupImage.querySelector('.popup__close') 

// //Переменныe секции Profile
const editButton = document.querySelector('.profile__edit-button') 
const profileName = document.querySelector('.profile__info-name') 
const profileVocation = document.querySelector('.profile__info-vocation') 
const addButton = document.querySelector('.profile__add-button')


//Общая функция для открытия popup окон
export const openPopup = (modal)=> {

  formProfile.enableValidation();
  formAdd.enableValidation();
  modal.classList.add('popup_opened')
  window.addEventListener('keydown', onEscPressed)
  modal.addEventListener('mousedown', onOverlayClick)
}

// //Общая функции для закрытия popup oкон при нажатии на overlay
const onOverlayClick = (e) => {
  const openedPopup = document.querySelector('.popup_opened');
  if(e.target.classList.contains('popup_opened')) {
    closePopup(openedPopup); 
  }
}

// //Общая функции для закрытия popup oкон при нажатии на ESC
const onEscPressed = (e) => {
  const openedPopup = document.querySelector('.popup_opened');
  if(e.key === 'Escape') {
    closePopup(openedPopup); 
  }
}

// //Общая функция для закрытия popup окон
const closePopup = (modal) => {

  modal.classList.remove('popup_opened')
  window.removeEventListener('keydown', onEscPressed)
  modal.removeEventListener('mousedown', onOverlayClick)
}

// //Функция на открытие окна popupEdit
const onEditClick = () => {
  popupFormName.value = profileName.textContent
  popupFormVocation.value = profileVocation.textContent
  openPopup(popupEdit)
}

// //Функция на сохранения данных popupEdit
const onEditSubmit = (event) => {
  event.preventDefault()
  profileName.textContent = popupFormName.value
  profileVocation.textContent = popupFormVocation.value
  closePopup(popupEdit)
}

// // Функция на открытие окна popupAdd
const onAddClick = () => {
  openPopup(popupAdd)
}

// Добавление карточки в массив
const addCard = (evt) =>{
  evt.preventDefault() 
    const addCardElement = {
        name: placeName.value,
        link: placeImageLink.value
      }
  
  const card = new Card(addCardElement, '.elements__template');
  const cardElement = card.generateCard();
  document.querySelector('.elements__grid').prepend(cardElement);

  closePopup(popupAdd) 
  evt.currentTarget.reset()
  popupAddButtonSave.setAttribute('disabled', 'disabled');
  popupAddButtonSave.classList.add('popup__button_disabled');

}

editButton.addEventListener('click', onEditClick)
popupEditForm.addEventListener ('submit', onEditSubmit)
popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit))

popupAddForm.addEventListener('submit', addCard)
addButton.addEventListener ('click', onAddClick)
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd))

popupImageCloseButton.addEventListener('click', () => closePopup(popupImage))


