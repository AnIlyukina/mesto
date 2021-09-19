const editButton = document.querySelector('.profile__edit-button') // переменная кнопки редактирования
const popup = document.querySelector('.popup') // переменная popup
const popupForm = document.querySelector('.popup__form') //переменная формы popup
const popupCloseButton = document.querySelector('.popup__close') // переменная кнопки закрытия popup
const profileName = document.querySelector('.profile__info-name') // переменная имени на странице
const profileVocation = document.querySelector('.profile__info-vocation') //переменная вида деятельности на странице
const popupFormName = document.querySelector ('.popup__input_type_name') // переменная имени в popup форме
const popupFormVocation = document.querySelector ('.popup__input_type_vocation')// переменная вида деятельности в popup форме

function onEditClick(){               // объявление функции на нажатие на кнопку редактирования 
  popup.classList.add('popup_opened') // добавление класса элементу popup
  popupFormVocation.value = profileVocation.textContent  // при открытие popup запись значения со страницы в форму (вид деятельности)
  popupFormName.value = profileName.textContent // при открытие popup запись значения со страницы в форму (имя)
}

function onCloseClick(){                 // объявление функции на нажатие кнопки popup
  popup.classList.remove('popup_opened') // удаление класса у элемента popup
}

function onSubmit(event){
  event.preventDefault() // отменяна стандартной отправки формы.
  profileName.textContent = popupFormName.value  // при нажатии на кнопку сохранить перезаписывает содержимое из popup (имя)
  profileVocation.textContent = popupFormVocation.value// при нажатии на кнопку сохранить перезаписывает содержимое из popup (вид деятельности)
  onCloseClick(); // добавление класса popup для его закрытия
}

editButton.addEventListener('click', onEditClick) // вызов функции на нажатие кнопки редактирования
popupCloseButton.addEventListener('click', onCloseClick) // вызов функции на нажатие кнопки закрытия popup
popupForm.addEventListener ('submit', onSubmit)