import { Api } from "./Api.js"

// Класс, который создаёт карточку
export class Card {
  constructor({ data, handleCardClick, handleDeleteIconClick, handleLikeClick }, cardSelector) {
    this._name = data.name
    this._handleCardClick = handleCardClick
    this._link = data.link
    this._cardSelector = cardSelector
    this._likesCount = data.likes.length
    this._myLike = data.likes.find(u => u._id === '87bfa82b813ceb37b97c25dd') !== undefined
    this._deletable = data.owner._id === '87bfa82b813ceb37b97c25dd'
    this._cardId = data._id
    this._handleDeleteIconClick = handleDeleteIconClick
    this._handleLikeClick = handleLikeClick
  }

  // метод, который получает готовую разметку перед размещением на страницу
  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true)

    return cardElement
  }

  // метод, который добавляет данные в разметку
  generateCard = () => {
    this._element = this._getTemplate()
    this._cardImage = this._element.querySelector(".elements__image")
    this._likeButton = this._element.querySelector(".elements__like")
    this._cardImage.src = this._link
    this._cardImage.alt = this._name
    this._element.querySelector(".elements__name").textContent = this._name
    this._likesCountElement = this._element.querySelector('.elements__like-count')
    this._likesCountElement.textContent = this._likesCount
    this._elementDelete = this._element.querySelector(".elements__delete")
    this._getIconDelete()
    this._getIconLike()
    this._setEventListeners()
    return this._element
  }

  //метод класса на лайк карточки
  _onLikeClick = async () => {

    // if(this._myLike){
    //   // this._handleLikeClick()
    //   this._likeButton.classList.toggle("elements__like_active")
    // }
    // else {
    //   this._handleLikeClick()
    //   this._likeButton.classList.toggle("elements__like_active")
    // }
    // this._myLike = !this._myLike

    // this._handleLikeClick(this._cardId)
    //   .then(() => {
    //     this._likeButton.classList.toggle("elements__like_active")
    //   })

    await this._handleLikeClick(this._cardId)
    this._likeButton.classList.toggle("elements__like_active")
  }

  _getIconLike = () => {
    if (this._myLike) {
      this._likeButton.classList.add('elements__like_active')
    }
  }
  
  _getIconDelete = () => {
    if(!this._deletable){
      this._elementDelete.classList.add('invisible')
    }
  }

  //метод класса на удаление карточки
  _onDeleteClick = () => {

    this._handleDeleteIconClick(this._cardId)
    
    this._element.remove()

    //очистка ссылки на DOM-элемент
    this._element = null
  }

  // Обработчики событий на лайк, удаление, открытие попапа с картинкой
  _setEventListeners = () => {
    this._likeButton.addEventListener("click", () => {
      this._onLikeClick()
    })

    this._elementDelete.addEventListener("click", () => {
        this._onDeleteClick()
      })

    this._cardImage.addEventListener("click", (data) => {
      this._handleCardClick(data)
    })
  }
}

