export class Popup{
  constructor(popupElement){
    this._popupElement = popupElement;
    this._closeButton = this._popupElement.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this); 
  }
 
  _handleEscClose = (event) => {
    if(event.key === 'Escape'){
      this.close()
    }
  }

  setEventListeners = () => {
    this._closeButton.addEventListener('click', () => {
      this.close()
    })
    this._popupElement.addEventListener('click', (evt) =>{
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
    })
  }

  open = () => {
    this._popupElement.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose);
  }

  close = () => {
    this._popupElement.classList.remove('popup_opened')
    document.removeEventListener('keydown',  this._handleEscClose);
  }
}
