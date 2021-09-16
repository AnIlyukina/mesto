const editButton = document.querySelector('.profile__edit-button') // переменная кнопки редактирования
const popap = document.querySelector('.popap') // переменная popap
const popapForm = document.querySelector('.popap__form') //переменная формы popap
const popapCloseButton = document.querySelector('.popap__close') // переменная кнопки закрытия popap
const profileName = document.querySelector('.profile__info-name') // переменная имени на странице
const profileVocation = document.querySelector('.profile__info-vocation') //переменная вида деятельности на странице
const popapFormName = document.querySelector ('.popap__form-name') // переменная имени в popap форме
const popapFormVocation = document.querySelector ('.popap__form-vocation')// переменная вида деятельности в popap форме

function onEditClick(){               // объявление функции на нажатие на кнопку редактирования 
  popap.classList.add('popap_opened') // добавление класса элементу popap
  popapFormVocation.value = profileVocation.textContent  // при открытие popap запись значения со страницы в форму (вид деятельности)
  popapFormName.value = profileName.textContent // при открытие popap запись значения со страницы в форму (имя)
}

function onCloseClick(){                 // объявление функции на нажатие кнопки popap
  popap.classList.remove('popap_opened') // удаление класса у элемента popap
}

function onSubmit(event){
  event.preventDefault() // отменяyf стандартной отправки формы.
  profileName.textContent = popapFormName.value  // при нажатии на кнопку сохранить перезаписывающая содержимое из popap (имя)
  profileVocation.textContent = popapFormVocation.value// при нажатии на кнопку сохранить перезаписывающая содержимое из popap (вид деятельности)
  onCloseClick(); // добавление класса popap для его закрытия
}

editButton.addEventListener('click', onEditClick) // вызов функции на нажатие кнопки редактирования
popapCloseButton.addEventListener('click', onCloseClick) // вызов функции на нажатие кнопки закртия popap
popapForm.addEventListener ('submit', onSubmit)