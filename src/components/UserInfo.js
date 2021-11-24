export class UserInfo {
  constructor({ name, vocation, avatar }) {
    this._name = name
    this._vocation = vocation
    this._avatar = avatar
  }

  getUserInfo() {
    return {
      userName: this._name.textContent,
      userVocation: this._vocation.textContent,
    }
  }

  setUserInfo({ userName, userVocation }) {
    if (userName) {  
      this._name.textContent = userName
    }
    this._vocation.textContent = userVocation
  }

  setAvatar(ava){
    this._avatar.style.backgroundImage = `url(${ava})`
  }
}