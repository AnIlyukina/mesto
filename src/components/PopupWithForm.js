import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup {
  constructor({ popupElement, handleFormSubmit }) {
    super(popupElement)
    this._handleFormSubmit = handleFormSubmit
    this._form = this._popupElement.querySelector(".popup__form")
    this._submitButton = this._form.querySelector('.popup__button')
    this._submitButtonDefault = this._submitButton.textContent
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll(".popup__input")
    this._formValues = {}
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value
    })

    return this._formValues
  }


  onSubmit = (evt) => {
    evt.preventDefault()
    const inputs = this._getInputValues()
    console.log(inputs)
    this._handleFormSubmit(inputs)
  }

  setEventListeners = () => {
    super.setEventListeners()
    this._form.addEventListener("submit", this.onSubmit)
  }

  close = () => {
    super.close()
    this._form.reset()
  }

  toggleLoadingSubmit(isLoading){
    if(isLoading){
      this._submitButton.textContent = 'Сохранение....'
    } else{
      this._submitButton.textContent = this._submitButtonDefault
    }
  }
}