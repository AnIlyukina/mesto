const editButton = document.querySelector('.profile__edit-button')
const overlay = document.querySelector('.page__overlay')
const editForm = document.querySelector('.edit-form')
const editFormCloseButton = document.querySelector('.edit-form__close')
const profileName = document.querySelector('.profile__info-name')
const profileVocation = document.querySelector('.profile__info-vocation')
const editFormName = document.querySelector('.edit-form__form-input_name') 
const editFormVocation = document.querySelector('.edit-form__form-input_vocation') 

function onEditClick() {
  const profileNameValue = profileName.innerHTML
  const profileVocationValue = profileVocation.innerHTML
  editFormVocation.value = profileVocationValue
  editFormName.value = profileNameValue
  editForm.classList.add('visible')
  overlay.classList.add('visible')
}

function onCloseClick(){
  editForm.classList.remove('visible')
  overlay.classList.remove('visible')
}
function onSubmit(event) {
  event.preventDefault()
  editForm.classList.remove('visible')
  overlay.classList.remove('visible')
  const profileNameValue = editFormName.value
  const profileVocationValue = editFormVocation.value
  profileName.innerHTML = profileNameValue
  profileVocation.innerHTML = profileVocationValue
}

editForm.addEventListener('submit', onSubmit)
editButton.addEventListener('click', onEditClick)
editFormCloseButton.addEventListener('click', onCloseClick)

