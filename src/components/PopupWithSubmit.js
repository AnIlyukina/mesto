import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._form = this._popupElement.querySelector(".popup__form");
    this._submitButton = this._form.querySelector(".popup__button");
    this._submitButtonDefault = this._submitButton.textContent;
    this._submitConfirmationBind = this._submitConfirmation.bind(this)
  }

  setSubmitAction(action) {
    this._onSubmitAction = action;
  }

  _submitConfirmation(evt){
    evt.preventDefault();
    this._onSubmitAction();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submitConfirmationBind);
  }

  close = () => {
    super.close()
    this._form.removeEventListener("submit", this._submitConfirmationBind)
  }

  toggleLoadingSubmit(isLoading){
    if(isLoading){
      this._submitButton.textContent = 'Удаление...'
    } else{
      this._submitButton.textContent = this._submitButtonDefault
    }
    
  }
}