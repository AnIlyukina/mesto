export class UserInfo {
  constructor({ name, vocation }) {
    this._name = name
    this._vocation = vocation
  }

  getUserInfo() {
    return {
      userName: this._name.textContent,
      userVocation: this._vocation.textContent,
    }
  }

  setUserInfo({ userName, userVocation }) {
    this._name.textContent = userName
    this._vocation.textContent = userVocation
  }
}