export class UserInfo {
  constructor({ data }) {
    this._name = data.name
    this._vocation = data.vocation
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