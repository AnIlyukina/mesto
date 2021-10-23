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
    this._form = document.querySelector(this._formSelector) 
    this._inputsList = this._form.querySelectorAll(this._inputSelector)
    this._submitButton= this._form.querySelector(this._submitButtonSelector)
  }
  
  _showError(inputElement, errorElement){
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass)
  }

  _hideError(inputElement, errorElement){
    errorElement.textContent = ' ';
    inputElement.classList.remove(this._inputErrorClass)
  }

  _toggleButtonState = ( isFormValid) => {
  if(isFormValid){
    this._submitButton.classList.remove(this._inactiveButtonClass)
    this._submitButton.disabled = false;
  } else{
    this._submitButton.classList.add(this._inactiveButtonClass)
    this._submitButton.disabled = 'disabled';
  }
}

  _checkInputValidity = (inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`)
 
    if(isInputNotValid){
      this._showError(inputElement, errorElement)
    }
    else{
      this._hideError(inputElement,errorElement)
    }
  }

  _setEventListeners = () => {

    const isFormValid = this._form.checkValidity();
    this._toggleButtonState(isFormValid)

    Array.from(this._inputsList).forEach(inputElement => {
      inputElement.addEventListener('input', (evt) =>{
        const isFormValid = this._form.checkValidity();
        this._checkInputValidity( inputElement)
        this._toggleButtonState(isFormValid)
      })
    })

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log('отправка формы')
      this._toggleButtonState(false);
    })
  }

  enableValidation = () =>{
    this._setEventListeners();
  }
}


export { validationConfig, FormValidator }; 
