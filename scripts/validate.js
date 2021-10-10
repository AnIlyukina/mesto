const showError = (errorElement, inputElement, config ) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass)
}

const hideError = (errorElement, inputElement, config ) => {
  errorElement.textContent = ' ';
  inputElement.classList.remove(config.inputErrorClass)
}

const CheckTextValidity = (inputElement,config) => {
  if(inputElement.type === 'text') {
    if (inputElement.value.length === 0){
      inputElement.setCustomValidity(config.customMessages.textMismatch)
    } else if (inputElement.value.length < 2){
      inputElement.setCustomValidity(config.customMessages.lengthMismatch(inputElement.value.length))
    } 
  }
}

const CheckEmailValidity = (inputElement, config) => {
  if(inputElement.type === 'url' ){
    inputElement.setCustomValidity(config.customMessages.emailMismatch)
  }
}


const checkInputValidity = (formElement, inputElement, config) => {
  
  inputElement.setCustomValidity('')
  const isInputNotValid = !inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
  CheckTextValidity(inputElement, config)
  CheckEmailValidity(inputElement, config)

  if (isInputNotValid) {
    showError(errorElement, inputElement, config);
  }
  else{
    hideError(errorElement, inputElement, config);
  }
}

const toggleButtonState = (button, isActive, config) => {
  if(isActive){
    button.classList.remove(config.inactiveButtonClass)
    button.disabled = false;
  } else{
    button.classList.add(config.inactiveButtonClass)
    button.disabled = 'disabled';
  }
}

const setEventListers = (formElement, config) => {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const submitButton= formElement.querySelector(config.submitButtonSelector)
  // const isFormValid = formElement.checkValidity();

  Array.from(inputList).forEach(inputElement => {
      // checkInputValidity(formElement, inputElement, config);
      // toggleButtonState(submitButton, isFormValid, config)
      inputElement.addEventListener('input', () => {
        const isFormValid = formElement.checkValidity();
        checkInputValidity(formElement, inputElement, config);
        toggleButtonState(submitButton, isFormValid, config)
      })
  })

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('отправка формы')
  })
}

const enableValidation = (config) =>{
  const forms = document.querySelectorAll(config.formSelector);
  Array.from(forms).forEach (formElement => {
      setEventListers(formElement, config)
  })
}


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  customMessages:{
    textMismatch: 'Вы пропустили это поле',
    lengthMismatch: (count) => `Минимальное количество символов: 2. Длина текста сейчас: ${count}.`,
    emailMismatch: 'Введите адрес сайта'
  }
}; 

enableValidation(validationConfig)

// export {enableValidation, validationConfig}