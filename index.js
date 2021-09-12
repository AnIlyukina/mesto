const editButton = document.querySelector('.profile__edit-button')
const overlay = document.querySelector('.page__overlay')
const editForm = document.querySelector('.edit-form')
const editFormCloseButton = document.querySelector('.edit-form__close')

function onEditClick() {
  editForm.classList.add('visible')
  overlay.classList.add('visible')
}
function onCloseClick(){
  editForm.classList.remove('visible')
  overlay.classList.remove('visible')
}
editButton.addEventListener('click', onEditClick)
editFormCloseButton.addEventListener('click', onCloseClick)

