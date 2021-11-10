import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
  constructor(popupElement){
    super(popupElement)
    this._popupElementCard = this._popupElement.querySelector('.popup__image');
    console.log(this._popupElementCard)
    this._popupElementTitle = this._popupElement.querySelector('.popup__image-title')
    console.log(this._popupElementTitle)
  }

  open ({data}) {
    super.open();
    this._popupElementCard.src =  data.link ;
    this._popupElementTitle.textContent = data.name;
    this._popupElementCard.alt = data.link ;
  }
}