import { Popup } from "./Popup.js";

const popupImage = document.querySelector('.popup_type_image')
const popupImageCard = popupImage.querySelector('.popup__image')
const popupImageTitle =   popupImage.querySelector('.popup__image-title')

export class PopupWithImage extends Popup{
  constructor(data,popupSelector){
    super(popupSelector)
    this._name = data.name;
    this._link = data.link;
  }

  open(){
    this.setEventListeners()
    this._popupSelector.classList.add('popup_opened')
    popupImageCard.src =  this._link;
    popupImageTitle.textContent = this._name;
    popupImageCard.alt = this._name;
  }
}