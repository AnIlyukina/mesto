export class FormValidator {
  constructor(validationConfig, formSelector) {
    this._inputSelector = validationConfig.inputSelector
    this._inputErrorClass = validationConfig.inputErrorClass
    this._inactiveButtonClass = validationConfig.inactiveButtonClass
    this._submitButtonSelector = validationConfig.submitButtonSelector
    this._form = document.querySelector(formSelector)
    this._inputsList = this._form.querySelectorAll(this._inputSelector)
    this._submitButton = this._form.querySelector(this._submitButtonSelector)
  }

  _showError = (inputElement, errorElement) => {
    errorElement.textContent = inputElement.validationMessage
    inputElement.classList.add(this._inputErrorClass)
  }

  _checkInputValidity = (inputElement) => {
    const isInputNotValid = !inputElement.validity.valid
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`)

    if (isInputNotValid) {
      this._showError(inputElement, errorElement)
    } else {
      this._hideError(inputElement, errorElement)
    }
  }

  _hideError = (inputElement, errorElement) => {
    errorElement.textContent = " ",
    inputElement.classList.remove(this._inputErrorClass)
  }

  _toggleButtonState = (isFormValid) => {
    if (isFormValid) {
      this._submitButton.classList.remove(this._inactiveButtonClass)
      this._submitButton.disabled = false
    } else {
      this._submitButton.classList.add(this._inactiveButtonClass)
      this._submitButton.disabled = true
    }
  }

  clearValidation = () => {
    this._inputsList.forEach((inputElement) => {
      const errorElement = this._form.querySelector(`#${inputElement.id}-error`)
      this._hideError(inputElement, errorElement)
    })
    this._form.reset()
  }

  _setEventListeners = () => {
    const isFormValid = this._form.checkValidity()
    this._toggleButtonState(isFormValid)

    Array.from(this._inputsList).forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        const isFormValid = this._form.checkValidity()
        this._checkInputValidity(inputElement)
        this._toggleButtonState(isFormValid)
      })
    })

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._toggleButtonState(false)
    })
  }

  enableValidation = () => {
    this._setEventListeners()
  }
}



