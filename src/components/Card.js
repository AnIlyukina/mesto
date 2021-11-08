import {initialCards} from '../utils/constants.js'


// Класс, который создаёт карточку 
class Card {
  constructor({data, handleCardClick}, cardSelector){
    this._name = data.name;
    this.handleCardClick = handleCardClick;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.elements__element')
    .cloneNode(true);

    return cardElement;
  }

  generateCard(){
    this._element = this._getTemplate();
    this._cardImage =  this._element.querySelector('.elements__image')
    this._likeButton = this._element.querySelector('.elements__like')

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListener();
    this._element.querySelector('.elements__name').textContent = this._name;

    return this._element;
  }



//Функция на удаление карточки
  _onDeleteClick(){
    const cardDelete = this._element.closest('.elements__element')
    cardDelete.remove();
  }



// Обработчики событий на лайк, удаление, открытие попапа с картинкой 
  _setEventListener(){
    this._likeButton.addEventListener('click', () => {
      this._onLikeClick();
    });

    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._onDeleteClick();
    });

    this._cardImage.addEventListener('click', () => { 
      this.handleCardClick(); 
    }); 

  }
    //Функция на лайк карточки
    _onLikeClick(){
      this._likeButton.classList.toggle('elements__like_active');
    }
  
}

export { Card, initialCards }; 
