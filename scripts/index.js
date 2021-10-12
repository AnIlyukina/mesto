import {initialCards} from './initialCards.js'

// Переменные окна popapEdit
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditForm = popupEdit.querySelector('.popup__form_type_edit') 
const popupEditCloseButton = popupEdit.querySelector('.popup__close') 
const popupFormName = popupEdit.querySelector ('.popup__input_type_name') 
const popupFormVocation = popupEdit.querySelector ('.popup__input_type_vocation')

// Переменные окна popapAdd
const popupAdd = document.querySelector('.popup_type_add')
const popupAddCloseButton = popupAdd.querySelector('.popup__close') 
const placeName = popupAdd.querySelector('.popup__input_type_title')
const placeImageLink = popupAdd.querySelector('.popup__input_type_link')
const popupAddForm = popupAdd.querySelector('.popup__form_type_add') 
const popupAddButtonSave = popupAdd.querySelector('.popup__form-save')

//Переменные окна popapImage
const popupImage = document.querySelector('.popup_type_image')
const popupImageCloseButton = popupImage.querySelector('.popup__close') 
const popupImageCard = popupImage.querySelector('.popup__image')
const popupImageTitle =   popupImage.querySelector('.popup__image-title')

//Переменныe секции Profile
const editButton = document.querySelector('.profile__edit-button') 
const profileName = document.querySelector('.profile__info-name') 
const profileVocation = document.querySelector('.profile__info-vocation') 
const addButton = document.querySelector('.profile__add-button')

//Переменныe секции Grid
const elementsGrid = document.querySelector('.elements__grid')

const cardTemplateElement = document.querySelector('.elements__template')



//Общая функция для открытия popup окон
const openPopup = (modal)=> {
  modal.classList.add('popup_opened')
  window.addEventListener('keydown', onEscPressed)
  modal.addEventListener('mousedown', onOverlayClick)
}

//Общая функции для закрытия popup oкон при нажатии на overlay
const onOverlayClick = (e) => {
  const openedPopup = document.querySelector('.popup_opened');
  if(e.target.classList.contains('popup_opened')) {
    closePopup(openedPopup); 
  }
}

//Общая функции для закрытия popup oкон при нажатии на ESC
const onEscPressed = (e) => {
  const openedPopup = document.querySelector('.popup_opened');
  if(e.key === 'Escape') {
    closePopup(openedPopup); 
  }
}

//Общая функция для закрытия popup окон
const closePopup = (modal) => {
  modal.classList.remove('popup_opened')
  window.removeEventListener('keydown', onEscPressed)
  modal.removeEventListener('mousedown', onOverlayClick)
}

//Функция на открытие окна popupEdit
const onEditClick = () => {
  popupFormName.value = profileName.textContent
  popupFormVocation.value = profileVocation.textContent
  openPopup(popupEdit)
}

//Функция на сохранения данных popupEdit
const onEditSubmit = (event) => {
  event.preventDefault()
  profileName.textContent = popupFormName.value
  profileVocation.textContent = popupFormVocation.value
  closePopup(popupEdit)
}

// Функция на открытие окна popupAdd
const onAddClick = () => {
  openPopup(popupAdd)
}

 //Функция на лайк карточки
function onLikeClick (event) {
  event.target.classList.toggle('elements__like_active')
}

//Функция на удаление карточки 
function onDeleteCLick (event){
  const cardDelete = event.currentTarget.closest('.elements__element')
  cardDelete.remove();
}

//Функция на открытие окна popupImage
function openPopupImage (e){
  openPopup(popupImage)
  // Присвоение ссылки PopupImage 
  popupImageCard.src = e.currentTarget.src
  // Присвоение alt картинки PopupImage 
  popupImageCard.alt = e.currentTarget.alt
  // Присвоение названия картинки PopupImage 
  popupImageTitle.textContent = e.currentTarget.alt

} 

const createCard = (element) => {

  const cardElement = cardTemplateElement.content.cloneNode(true)
  const elementImage = cardElement.querySelector('.elements__image')

  cardElement.querySelector('.elements__name').textContent = element.name
  elementImage.src = element.link
  elementImage.alt = element.name
  
  // ЛАЙК
  cardElement.querySelector('.elements__like').addEventListener('click', onLikeClick)
  
  //УДАЛЕНИЕ
  cardElement.querySelector('.elements__delete').addEventListener('click', onDeleteCLick)
  
  // КАРТОЧКА
  cardElement.querySelector('.elements__image').addEventListener('click', openPopupImage)

  return(cardElement)
}

//Клонирование массива
const renderCards = (element) => {
const newCardElement = createCard(element)
elementsGrid.prepend(newCardElement)
}

// Добавление карточки в массив
const addCard = (evt) =>{
  evt.preventDefault() 
    const addCardElement = {
        name: placeName.value,
        link: placeImageLink.value
      }
    renderCards(addCardElement)
    closePopup(popupAdd) 
    evt.currentTarget.reset()
    popupAddButtonSave.setAttribute('disabled', 'disabled');
    popupAddButtonSave.classList.add('popup__button_disabled');
  }

initialCards.map(renderCards)

editButton.addEventListener('click', onEditClick)
popupEditForm.addEventListener ('submit', onEditSubmit)
popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit))

popupAddForm.addEventListener('submit', addCard)
addButton.addEventListener ('click', onAddClick)
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd))

popupImageCloseButton.addEventListener('click', () => closePopup(popupImage))
