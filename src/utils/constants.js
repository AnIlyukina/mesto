//селектор формы Edit
export const popupFormEdit = ".popup__form_type_edit"

//селектор формы Add
export const popupFormAdd = ".popup__form_type_add"

// Массив с изначальными карточками
export const initialCards = [
  {
    name: "Стамбул",
    link: "https://images.unsplash.com/photo-1628936969837-e3afd8427bd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80.jpg",
  },
  {
    name: "Греция",
    link: "https://images.unsplash.com/photo-1618500031461-a5fc01e96763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80.jpg",
  },
  {
    name: "Мальдивы",
    link: "https://images.unsplash.com/photo-1527179528411-4219e0714bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80.jpg",
  },
  {
    name: "Италия",
    link: "https://images.unsplash.com/photo-1582204545593-1356b96cab4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80.jpg",
  },
  {
    name: "Сингапур",
    link: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=80.jpg",
  },
  {
    name: "Москва",
    link: "https://images.unsplash.com/photo-1576413326475-ea6c788332fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2128&q=80.jpg",
  },
]

//объект настроек всеx нужныx классов и селекторов элементов формы
export const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
}