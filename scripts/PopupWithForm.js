import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
  constructor({ popupSelector, handleFormSubmit }){
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit
    this._element = popupSelector
    this._form = this._element.querySelector('.popup__form')

  }

  _getInputValues = () => {
    this._inputList = this._element.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value
    });
    
    return this._formValues;
  }

  onSubmit = (evt) => {
    console.log('DSSD')
    evt.preventDefault();
    const inputs = this._getInputValues()
    this._handleFormSubmit(evt, inputs)
  }

  setEventListeners = () => {
    super.setEventListeners()
    this._form.addEventListener('submit', this.onSubmit)
  }

  close = () => {
    this._form.removeEventListener('submit', this.onSubmit)
    super.close()
    console.log('asdasdas')
  }


}