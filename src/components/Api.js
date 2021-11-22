export class Api{
  constructor(option){
    this._baseUrl = option.baseUrl
    this._headers = option.headers
  }

  // Получение информации о пользователе 
  getInfoDate(){
    return fetch(`${this._baseUrl}users/me/`, {
      method:'GET',
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }
  

  getInitialCards() {
    return fetch(`${this._baseUrl}cards/`, {
      method:'GET',
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }

  saveInfoDate(data){
    return fetch(`${this._baseUrl}users/me/`, {
      method:'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: `${data.name}`,
        about: `${data.about}`
      })
    })
    .then(res =>{
      if (res.ok){
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  saveCard(data){
    return fetch(`${this._baseUrl}cards/`, {
      method:'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: `${data.name}`,
        link: `${data.link}`
      })
    })
    .then(res =>{
      if (res.ok){
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  deleteCard(cardId){
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method:'DELETE',
      headers: this._headers,
    })
    .then(res =>{
      if (res.ok){
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  async likeCard(cardId){
    // return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
    //   method:'PUT',
    //   headers: this._headers,
    // })
    // .then(res =>{
    //   if (res.ok){
    //     return res.json()
    //   }
    //   return Promise.reject(`Ошибка ${res.status}`)
    // })
    const response = await fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method:'PUT',
      headers: this._headers,
    });
    const data = await response.json()
    return data
  }

  async deleteLikeCard(cardId){
    // return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
    //   method:'DELETE',
    //   headers: this._headers,
    // })
    // .then(res =>{
    //   if (res.ok){
    //     return res.json()
    //   }
    //   return Promise.reject(`Ошибка ${res.status}`)
    // })
    const response = await fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method:'DELETE',
      headers: this._headers,
    });
    const data = await response.json()
    return data
  }
}