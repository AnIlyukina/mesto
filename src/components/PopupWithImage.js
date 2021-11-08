import { Popup } from "./Popup.js";
import {popupImageCard, popupImageTitle } from "../utils/constants.js";

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