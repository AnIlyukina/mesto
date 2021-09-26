const editButton = document.querySelector('.profile__edit-button') // переменная кнопки редактирования
const popupEdit = document.querySelector('.popup_type_edit') // переменная popupEdit
const popupForm = document.querySelector('.popup__form') //переменная формы popupEdit
const popupCloseButtons = document.querySelectorAll('.popup__close') // переменная кнопки закрытия popup
const profileName = document.querySelector('.profile__info-name') // переменная имени на странице
const profileVocation = document.querySelector('.profile__info-vocation') //переменная вида деятельности на странице
const popupFormName = document.querySelector ('.popup__input_type_name') // переменная имени в popupEdit форме
const popupFormVocation = document.querySelector ('.popup__input_type_vocation')// переменная вида деятельности в popupEdit форме
const elementsGrid = document.querySelector('.elements__grid')// переменная 
const popupAdd = document.querySelector('.popup_type_add')
const addButton = document.querySelector('.profile__add-button')

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const onEditClick = () => {               // объявление функции на нажатие на кнопку редактирования 
  popupEdit.classList.add('popup_opened') // добавление класса элементу popupEdit
  popupFormVocation.value = profileVocation.textContent  // при открытие popupEdit запись значения со страницы в форму (вид деятельности)
  popupFormName.value = profileName.textContent // при открытие popupEdit запись значения со страницы в форму (имя)
}

const onCloseClick = () => {                 // объявление функции на нажатие кнопки popupEdit
  // popup.classList.remove('popup_opened') // удаление класса у элемента popup
  if (popupEdit.classList.contains('popup_opened')) {
    popupEdit.classList.remove('popup_opened')
  }
  else if (popupAdd.classList.contains('popup_opened')) {
    popupAdd.classList.remove('popup_opened')
  }
}

const onSubmit = (event) => {
  event.preventDefault() // отменяна стандартной отправки формы.
  profileName.textContent = popupFormName.value  // при нажатии на кнопку сохранить перезаписывает содержимое из popupEdit (имя)
  profileVocation.textContent = popupFormVocation.value// при нажатии на кнопку сохранить перезаписывает содержимое из popupEdit (вид деятельности)
  onCloseClick(); // добавление класса popupEdit для его закрытия
}

const onLoad = () => {
  initialCards.forEach((item) => {
    elementsGrid.innerHTML += `<li class="elements__element">
                                <img class="elements__image" src="${item.link}" alt="${item.name}">
                                <div class="elements__group">
                                  <h3 class="elements__name">${item.name}</h3>
                                  <button type="button" class="elements__like"></button>
                                </div>
                              </li>`
  })
}

const onAddClick = () => {
  popupAdd.classList.add('popup_opened')
}

addButton.addEventListener('click', onAddClick)
editButton.addEventListener('click', onEditClick) // вызов функции на нажатие кнопки редактирования
popupCloseButtons.forEach((item) => {
  item.addEventListener('click', onCloseClick)
})
// popupCloseButton.addEventListener('click', onCloseClick) // вызов функции на нажатие кнопки закрытия popupEdit
popupForm.addEventListener ('submit', onSubmit)

window.addEventListener('load', onLoad)