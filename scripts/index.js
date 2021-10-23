import { Card, initialCards } from './Card.js';
import { validationConfig, FormValidator } from './FormValidator.js'

// Универсальный класс popup
const popups = document.querySelectorAll('.popup')

// Переменные окна popapEdit
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditForm = popupEdit.querySelector('.popup__form_type_edit') 
const popupFormName = popupEdit.querySelector ('.popup__input_type_name') 
const popupFormVocation = popupEdit.querySelector ('.popup__input_type_vocation')

// Переменные окна popapAdd
const popupAdd = document.querySelector('.popup_type_add')
const placeName = popupAdd.querySelector('.popup__input_type_title')
const placeImageLink = popupAdd.querySelector('.popup__input_type_link')
const popupAddForm = popupAdd.querySelector('.popup__form_type_add') 
const popupAddButtonSave = popupAdd.querySelector('.popup__form-save')

//Переменные окна popapImage
const popupImage = document.querySelector('.popup_type_image')


//Переменныe секции Profile
const editButton = document.querySelector('.profile__edit-button') 
const profileName = document.querySelector('.profile__info-name') 
const profileVocation = document.querySelector('.profile__info-vocation') 
const addButton = document.querySelector('.profile__add-button')

// Переменные section element
const elementGrid = document.querySelector('.elements__grid')

//экземпляр класса для проверки валидации popapEdit
const formProfile = new FormValidator(validationConfig, '.popup__form_type_edit')
formProfile.enableValidation();

//экземпляр класса для проверки валидации popapAdd
const formAdd = new FormValidator(validationConfig, '.popup__form_type_add')
formAdd.enableValidation();

//Общая функция для открытия popup окон
export const openPopup = (modal)=> {

  modal.classList.add('popup_opened')
  window.addEventListener('keydown', onEscPressed)
}

// //Общая функции для закрытия popup oкон при нажатии на ESC
const onEscPressed = (e) => {
  
  if(e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}

// //Общая функция для закрытия popup окон
const closePopup = (modal) => {

  modal.classList.remove('popup_opened')
  window.removeEventListener('keydown', onEscPressed)
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

//Функция для создания новой карточки
const createCard = (item) =>{
  const card = new Card(item, '.elements__template');
  const cardElement = card.generateCard();
  return cardElement 
}

// Добавление карточек из готового массива
initialCards.forEach((item) => {
  const element = createCard(item)
  elementGrid.append(element);
});

// Добавление новой карточки в массив
const addCard = (evt) =>{
  evt.preventDefault() 
    const addCardElement = {
        name: placeName.value,
        link: placeImageLink.value
      }

  const newElement = createCard(addCardElement)
  elementGrid.prepend(newElement);

  closePopup(popupAdd) 
  evt.currentTarget.reset()
}

editButton.addEventListener('click', onEditClick)
popupEditForm.addEventListener ('submit', onEditSubmit)


popupAddForm.addEventListener('submit', addCard)
addButton.addEventListener ('click', onAddClick)

//  обработчики событий для Оверлея и Крестиков

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    })
})
