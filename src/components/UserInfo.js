const popupEdit = document.querySelector('.popup_type_edit')
const popupFormName = popupEdit.querySelector ('.popup__input_type_name') 
const popupFormVocation = popupEdit.querySelector ('.popup__input_type_vocation')

export class UserInfo{
  constructor({data}){
    this._name = data.name;
    this._vocation = data.vocation;
  }

  getUserInfo(){
    popupFormName.value = this._name.textContent
    popupFormVocation.value = this._vocation.textContent
  }

  setUserInfo(){
    this._name.textContent = popupFormName.value
    this._vocation.textContent = popupFormVocation.value
  }

}