// Класс, который создаёт карточку 
export class Card {
  constructor({data, handleCardClick}, cardSelector){
    this._name = data.name;
    this._handleCardClick = handleCardClick;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  // метод, который получает готовую разметку перед размещением на страницу
  _getTemplate = () => {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.elements__element')
    .cloneNode(true);

    return cardElement;
  }

 // метод, который добавляет данные в разметку
  generateCard = () => {
    this._element = this._getTemplate();
    this._cardImage =  this._element.querySelector('.elements__image')
    this._likeButton = this._element.querySelector('.elements__like')
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    this._element.querySelector('.elements__name').textContent = this._name;

    return this._element;
  }

//метод класса на лайк карточки
  _onLikeClick = () => {
    this._likeButton.classList.toggle('elements__like_active');
  }

//метод класса на удаление карточки
  _onDeleteClick = () => {
    this._element.remove();
    //очистка ссылки на DOM-элемент
    this._element = null;
  }



// Обработчики событий на лайк, удаление, открытие попапа с картинкой 
  _setEventListeners = () => {
    this._likeButton.addEventListener('click', () => {
      this._onLikeClick();
    });

    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._onDeleteClick();
    });

    this._cardImage.addEventListener('click', (data) => { 
      this._handleCardClick(data); 
    }); 
  }
}

