import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup {
  constructor(popupElement){
    super(popupElement)
    this._popupElementCard = this._popupElement.querySelector(".popup__image")
    this._popupElementTitle = this._popupElement.querySelector(".popup__image-title")
  }

  open = ({ element }) => {
    super.open()
    this._popupElementCard.src = element.link
    this._popupElementTitle.textContent = element.name
    this._popupElementCard.alt = element.link
  }
}