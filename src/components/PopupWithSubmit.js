import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._form = this._popupElement.querySelector(".popup__form");
    this._submitButton = this._form.querySelector(".popup__button");
    this._submitButtonDefault = this._submitButton.textContent;
  }

  setSubmitAction(action) {
    this._onSubmitAction = action;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._onSubmitAction();
    });
  }
}