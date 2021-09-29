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

//Переменные окна popapImage
const popupImage = document.querySelector('.popup_type_image')
const popupImageCloseButton = popupImage.querySelector('.popup__close') 

//Переменныe секции Profile
const editButton = document.querySelector('.profile__edit-button') 
const profileName = document.querySelector('.profile__info-name') 
const profileVocation = document.querySelector('.profile__info-vocation') 
const addButton = document.querySelector('.profile__add-button')

//Переменныe секции Grid
const elementsGrid = document.querySelector('.elements__grid')

const cardTemplateElement = document.querySelector('.elements__template')

const initialCards = [
  {
    name: 'Стамбул',
    link: 'https://images.unsplash.com/photo-1628936969837-e3afd8427bd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80.jpg',
  },
  {
    name: 'Греция',
    link: 'https://images.unsplash.com/photo-1618500031461-a5fc01e96763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80.jpg',
  },
  {
    name: 'Мальдивы',
    link: 'https://images.unsplash.com/photo-1527179528411-4219e0714bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80.jpg',
  },
  {
    name: 'Италия',
    link: 'https://images.unsplash.com/photo-1582204545593-1356b96cab4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80.jpg',
  },
  {
    name: 'Сингапур',
    link: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=80.jpg',
  },
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1576413326475-ea6c788332fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2128&q=80.jpg',
  }
]; 

//Общая функция для открытия popup окон
const onOpenClick = (modal)=> {
  modal.classList.add('popup_opened')
}

//Общая функция для закрытия popup окон
const onCloseClick = (modal) => {
  modal.classList.remove('popup_opened')
}

//Функция на открытие окна popupEdit
const onEditClick = () => {
  popupFormName.value = profileName.textContent
  popupFormVocation.value = profileVocation.textContent
  onOpenClick(popupEdit)
}

//Функция на сохранения данных popupEdit
const onEditSubmit = (event) => {
  event.preventDefault()
  profileName.textContent = popupFormName.value
  profileVocation.textContent = popupFormVocation.value
  onCloseClick(popupEdit)
}

// Функция на открытие окна popupAdd
const onAddClick = () => {
    onOpenClick(popupAdd)
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
  onOpenClick(popupImage)
  // Присвоение ссылки PopupImage 
  popupImage.querySelector('.popup__image').src = e.currentTarget.src
  // Присвоение названия картинки PopupImage 
  popupImage.querySelector('.popup__image-title').textContent = e.currentTarget.parentElement.querySelector('.elements__name').textContent

} 

//Клонирование массива
const renderCards = (element) => {
const newCardElement = cardTemplateElement.content.cloneNode(true)

newCardElement.querySelector('.elements__name').textContent = element.name
newCardElement.querySelector('.elements__image').src = element.link

// ЛАЙК
newCardElement.querySelector('.elements__like').addEventListener('click', onLikeClick)

//УДАЛЕНИЕ
newCardElement.querySelector('.elements__delete').addEventListener('click', onDeleteCLick)

// КАРТОЧКА
newCardElement.querySelector('.elements__image').addEventListener('click', openPopupImage)

elementsGrid.prepend(newCardElement)
}

// Добавление карточки в массив
const AddCard = (evt) =>{
    evt.preventDefault()
    const addCardElement = {
        name: placeName.value,
        link: placeImageLink.value
  }
    renderCards(addCardElement)
    onCloseClick(popupAdd) 
  }

initialCards.map(renderCards)


editButton.addEventListener('click', onEditClick)
popupEditForm.addEventListener ('submit', onEditSubmit)
popupEditCloseButton.addEventListener('click', () => onCloseClick(popupEdit))

popupAddForm.addEventListener('submit', AddCard)
addButton.addEventListener ('click', onAddClick)
popupAddCloseButton.addEventListener('click', () => onCloseClick(popupAdd))

popupImageCloseButton.addEventListener('click', () => onCloseClick(popupImage))
