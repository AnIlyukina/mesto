import { openPopup } from './index.js'; 

// Массив с изначальными карточками
const initialCards = [
  {
    name: 'Стамбул',
    link: 'https://images.unsplash.com/photo-1628936969837-e3afd8427bd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80.jpg',
  },
  {
    name: 'Греция',
    link: 'https://images.unsplash.com/photo-1618500031461-a5fc01e96763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80.jpg',
  },
  {
    name: 'Мальдивы',
    link: 'https://images.unsplash.com/photo-1527179528411-4219e0714bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80.jpg',
  },
  {
    name: 'Италия',
    link: 'https://images.unsplash.com/photo-1582204545593-1356b96cab4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80.jpg',
  },
  {
    name: 'Сингапур',
    link: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=80.jpg',
  },
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1576413326475-ea6c788332fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2128&q=80.jpg',
  }
]; 

// //Переменные окна popapImage
const popupImage = document.querySelector('.popup_type_image')
const popupImageCard = popupImage.querySelector('.popup__image')
const popupImageTitle =   popupImage.querySelector('.popup__image-title')

// Класс, который создаёт карточку 

class Card {
  constructor(data, cardSelector){
    this._name = data.name;
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
    this._setEventListener();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.elements__name').textContent = this._name;

    return this._element;
  }

//Функция на лайк карточки
  _onLikeClick(){
    this._likeButton.classList.toggle('elements__like_active');
  }

//Функция на удаление карточки
  _onDeleteClick(){
    const cardDelete = this._element.closest('.elements__element')
    cardDelete.remove();
  }

//Функция на открытие окна popupImage
  _openPopupImage(){

    openPopup(popupImage);
    popupImageCard.src =  this._link;
    popupImageTitle.textContent = this._name;
    popupImageCard.alt = this._name;
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
      this._openPopupImage();
    });

  }
}

export { Card, initialCards }; 
