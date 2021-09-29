const editButton = document.querySelector('.profile__edit-button') // переменная кнопки редактирования
const popupEdit = document.querySelector('.popup_type_edit') // переменная popupEdit
const popupEditForm = document.querySelector('.popup__form_type_edit') //переменная формы popupEdit


const popupEditCloseButton = popupEdit.querySelector('.popup__close') // п закрытия edit формы



const profileName = document.querySelector('.profile__info-name') // переменная имени на странице
const profileVocation = document.querySelector('.profile__info-vocation') //переменная вида деятельности на странице
const popupFormName = document.querySelector ('.popup__input_type_name') // переменная имени в popupEdit форме
const popupFormVocation = document.querySelector ('.popup__input_type_vocation')// переменная вида деятельности в popupEdit форме

const popupAdd = document.querySelector('.popup_type_add')
const popupAddCloseButton = popupAdd.querySelector('.popup__close') 

const addButton = document.querySelector('.profile__add-button')
const placeName = document.querySelector('.popup__input_type_title')
const placeImageLink = document.querySelector('.popup__input_type_link')
const popupAddForm = document.querySelector('.popup__form_type_add') 
const popupImage = document.querySelector('.popup_type_image')
const popupImageCloseButton = popupImage.querySelector('.popup__close') 


const elementsGrid = document.querySelector('.elements__grid')
const cardTemplateElement = document.querySelector('.elements__template')

const popupImageName = document.querySelector('.popup__image-title')
const popupImageLink = document.querySelector('.popup__image')

const elementName = document.querySelector('.elements__name')

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

const onOpenClick = (modal)=> {
  modal.classList.add('popup_opened')
}

const onCloseClick = (modal) => {
  modal.classList.remove('popup_opened')
}

const onEditClick = () => {
  popupFormName.value = profileName.textContent
  popupFormVocation.value = profileVocation.textContent
  onOpenClick(popupEdit)
}

const onEditSubmit = (event) => {
  event.preventDefault()
  profileName.textContent = popupFormName.value
  profileVocation.textContent = popupFormVocation.value
  onCloseClick(popupEdit)
}

const onAddClick = () => {
    onOpenClick(popupAdd)
  }

 //Функция срабатывающая на нажатие на лайк
function onLikeClick (event) {
  event.target.classList.toggle('elements__like_active')
}

//Функция срабатывающая на кнопку удаления карточки 
function onDeleteCLick (event){
  const cardDelete = event.currentTarget.closest('.elements__element')
  cardDelete.remove();
}

function openPopupImage (){
  onOpenClick(popupImage)
  // Присвоение ссылки PopupImage 
  popupImageLink.src = elementsGrid.querySelector('.elements__image').src
  // Присвоение названия картинки PopupImage 
  popupImageName.textContent = elementsGrid.querySelector('.elements__name').textContent

} 

//клонирование массива
const renderCards = (element) => {
const newCardElement = cardTemplateElement.content.cloneNode(true)

newCardElement.querySelector('.elements__name').textContent = element.name
newCardElement.querySelector('.elements__image').src = element.link

// ЛАЙК
newCardElement.querySelector('.elements__like').addEventListener('click', onLikeClick)

//УДАЛЕНИЕ
newCardElement.querySelector('.elements__delete').addEventListener('click', onDeleteCLick)

// добавила слушатель на картинку, чтобы при нажатии открывалась функция на открытие карточки
newCardElement.querySelector('.elements__image').addEventListener('click', openPopupImage)

elementsGrid.prepend(newCardElement)
}

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

popupAddForm.addEventListener('submit', AddCard)

editButton.addEventListener('click', onEditClick)
popupEditForm.addEventListener ('submit', onEditSubmit)
popupEditCloseButton.addEventListener('click', () => onCloseClick(popupEdit))

addButton.addEventListener ('click', onAddClick)

popupAddCloseButton.addEventListener('click', () => onCloseClick(popupAdd))

popupImageCloseButton.addEventListener('click', () => onCloseClick(popupImage))
