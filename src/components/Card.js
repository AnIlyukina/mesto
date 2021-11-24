import { Api } from "./Api.js";

// Класс, который создаёт карточку
export class Card {
  constructor(
    {
      data,
      userId,
      handleCardClick,
      handleDeleteIconClick,
      handleLikeSet,
      handleLikeDelete,
    },
    cardSelector
  ) {
    this._userId = userId;
    this._name = data.name;
    this._handleCardClick = handleCardClick;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._likes = data.likes;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeSet = handleLikeSet;
    this._handleLikeDelete = handleLikeDelete;
  }

  // метод, который получает готовую разметку перед размещением на страницу
  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return cardElement;
  };

  _isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  // метод, который добавляет данные в разметку
  generateCard = () => {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".elements__image");
    this._likeButton = this._element.querySelector(".elements__like");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".elements__name").textContent = this._name;
    if (this._isLiked()) {
      this._likeButton.classList.add("elements__like_active");
    } else {
      this._likeButton.classList.remove("elements__like_active");
    }
    this._likesCountElement = this._element.querySelector(
      ".elements__like-count"
    );
    this._likesCountElement.textContent = this._likes.length;
    this._elementDelete = this._element.querySelector(".elements__delete");
    if (this._userId === this._cardOwnerId) {
      this._elementDelete.classList.remove("invisible");
    } else {
      this._elementDelete.classList.add("invisible");
    }
    this._setEventListeners();
    return this._element;
  };

  //методы класса на лайк карточки
  _setLike = () => {
    if (this._isLiked()) {
      this._handleLikeDelete(this._cardId);
    } else {
      this._handleLikeSet(this._cardId);
    }
  };

  like = (response) => {
    this._likes = response.likes;
    this._likesCountElement.textContent = this._likes.length;
    this._likeButton.classList.toggle("elements__like_active");
  };

  // метод класса на удаление карточки
  cardDelete = () => {
    this._element.remove();
  };

  // Обработчики событий на лайк, удаление, открытие попапа с картинкой
  _setEventListeners = () => {
    this._likeButton.addEventListener("click", () => {
      this._setLike();
    });

    this._elementDelete.addEventListener("click", () => {
      this._handleDeleteIconClick(this._cardId);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
  };
}