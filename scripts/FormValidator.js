const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
}; 


class FormValidator {
  constructor(validationConfig, formSelector){
    this._formSelector = formSelector
    this._inputSelector = validationConfig.inputSelector
    this._inputErrorClass = validationConfig.inputErrorClass
    this._inactiveButtonClass = validationConfig.inactiveButtonClass
    this._submitButtonSelector = validationConfig.submitButtonSelector
  }
  
  _showError(inputElement, errorElement){
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass)
  }

  _hideError(inputElement, errorElement){
    errorElement.textContent = ' ';
    inputElement.classList.remove(this._inputErrorClass)
  }

  _toggleButtonState = (button, isActive) => {
  if(isActive){
    button.classList.remove(this._inactiveButtonClass)
    button.disabled = false;
  } else{
    button.classList.add(this._inactiveButtonClass)
    button.disabled = 'disabled';
  }
}

  _checkInputValidity = (form, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
    const errorElement = form.querySelector(`#${inputElement.id}-error`)
 
    if(isInputNotValid){
      this._showError(inputElement, errorElement)
    }
    else{
      this._hideError(inputElement,errorElement)
    }
  }

  _setEventListeners = () => {

    const form = document.querySelector(this._formSelector) 
    const inputsList = form.querySelectorAll(this._inputSelector)
    const submitButton= form.querySelector(this._submitButtonSelector)
    const isFormValid = form.checkValidity();
    this._toggleButtonState(submitButton,isFormValid)

    Array.from(inputsList).forEach(inputElement => {
      inputElement.addEventListener('input', (evt) =>{
        const isFormValid = form.checkValidity();
        this._checkInputValidity(form, inputElement)
        this._toggleButtonState(submitButton,isFormValid)
      })
    })

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log('отправка формы')
    })

  }

  enableValidation = () =>{
    this._setEventListeners();
  }
}


const formProfile = new FormValidator(validationConfig, '.popup__form_type_edit')
formProfile.enableValidation();

const formAdd = new FormValidator(validationConfig, '.popup__form_type_add')
formAdd.enableValidation();

export { validationConfig, FormValidator,formProfile,formAdd }; 