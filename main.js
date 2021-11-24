(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,o;return n=t,(o=[{key:"getInfoDate",value:function(){return fetch("".concat(this._baseUrl,"users/me/"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"cards/"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"saveInfoDate",value:function(e){return fetch("".concat(this._baseUrl,"users/me/"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(e.name),about:"".concat(e.about)})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(e)})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"saveCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(e.name),link:"".concat(e.link)})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(){function e(t,n){var r=this,i=t.data,u=t.userId,c=t.handleCardClick,a=t.handleDeleteIconClick,l=t.handleLikeSet,s=t.handleLikeDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_getTemplate",(function(){return document.querySelector(r._cardSelector).content.querySelector(".elements__element").cloneNode(!0)})),o(this,"generateCard",(function(){return r._element=r._getTemplate(),r._cardImage=r._element.querySelector(".elements__image"),r._likeButton=r._element.querySelector(".elements__like"),r._cardImage.src=r._link,r._cardImage.alt=r._name,r._element.querySelector(".elements__name").textContent=r._name,r._isLiked()?r._likeButton.classList.add("elements__like_active"):r._likeButton.classList.remove("elements__like_active"),r._likesCountElement=r._element.querySelector(".elements__like-count"),r._likesCountElement.textContent=r._likes.length,r._elementDelete=r._element.querySelector(".elements__delete"),r._userId===r._cardOwnerId?r._elementDelete.classList.remove("invisible"):r._elementDelete.classList.add("invisible"),r._setEventListeners(),r._element})),o(this,"_setLike",(function(){r._isLiked()?r._handleLikeDelete(r._cardId):r._handleLikeSet(r._cardId)})),o(this,"like",(function(e){r._likes=e.likes,r._likesCountElement.textContent=r._likes.length,r._likeButton.classList.toggle("elements__like_active")})),o(this,"cardDelete",(function(){r._element.remove()})),o(this,"_setEventListeners",(function(){r._likeButton.addEventListener("click",(function(){r._setLike()})),r._elementDelete.addEventListener("click",(function(){r._handleDeleteIconClick(r._cardId)})),r._cardImage.addEventListener("click",(function(){r._handleCardClick()}))})),this._userId=u,this._name=i.name,this._handleCardClick=c,this._link=i.link,this._cardSelector=n,this._likes=i.likes,this._cardId=i._id,this._cardOwnerId=i.owner._id,this._handleDeleteIconClick=a,this._handleLikeSet=l,this._handleLikeDelete=s}var t,r;return t=e,(r=[{key:"_isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}}])&&n(t.prototype,r),e}();function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_showError",(function(e,t){t.textContent=e.validationMessage,e.classList.add(o._inputErrorClass)})),i(this,"_hideError",(function(e,t){t.textContent="",e.classList.remove(o._inputErrorClass)})),i(this,"_toggleButtonState",(function(e){e?(o._submitButton.classList.remove(o._inactiveButtonClass),o._submitButton.disabled=!1):(o._submitButton.classList.add(o._inactiveButtonClass),o._submitButton.disabled=!0)})),i(this,"_checkInputValidity",(function(e){var t=!e.validity.valid,n=o._form.querySelector("#".concat(e.id,"-error"));t?o._showError(e,n):o._hideError(e,n)})),i(this,"_setEventListeners",(function(){var e=o._form.checkValidity();o._toggleButtonState(e),Array.from(o._inputsList).forEach((function(e){e.addEventListener("input",(function(){var t=o._form.checkValidity();o._checkInputValidity(e),o._toggleButtonState(t)}))})),o._form.addEventListener("submit",(function(e){e.preventDefault(),o._toggleButtonState(!1)}))})),i(this,"enableValidation",(function(){o._setEventListeners()})),this._inputSelector=t.inputSelector,this._inputErrorClass=t.inputErrorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._submitButtonSelector=t.submitButtonSelector,this._form=document.querySelector(n),this._inputsList=this._form.querySelectorAll(this._inputSelector),this._submitButton=this._form.querySelector(this._submitButtonSelector)};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function e(t,n){var o=this,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"renderItems",(function(e){e.forEach((function(e){return o._renderer(e)}))})),c(this,"addItemAppend",(function(e){o._container.append(e)})),c(this,"addItemPrepend",(function(e){o._container.prepend(e)})),this._renderer=r,this._container=n};function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t){var n=t.name,o=t.vocation;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._vocation=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._name.textContent,userVocation:this._vocation.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userVocation;this._name.textContent=t,this._vocation.textContent=n}}])&&l(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._closeButton=this._popupElement.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&f(t.prototype,n),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},y(e,t,n||e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(r,e);var t,n,o=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=v(t);if(n){var r=v(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return h(this,e)});function r(e){var t,n,i,u,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),c=function(e){var o=e.element;y((t=m(n),v(r.prototype)),"open",t).call(t),n._popupElementCard.src=o.link,n._popupElementTitle.textContent=o.name,n._popupElementCard.alt=o.link},(u="open")in(i=m(n=o.call(this,e)))?Object.defineProperty(i,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):i.open=c,n._popupElementCard=n._popupElement.querySelector(".popup__image"),n._popupElementTitle=n._popupElement.querySelector(".popup__image-title"),n}return r}(p);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t,n){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},C(e,t,n||e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(o);if(r){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e){var t,n,o,r=e.popupElement,c=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),O(w(o=i.call(this,r)),"onSubmit",(function(e){e.preventDefault();var t=o._getInputValues();console.log(t),o._handleFormSubmit(t)})),O(w(o),"setEventListeners",(function(){C((t=w(o),L(u.prototype)),"setEventListeners",t).call(t),o._form.addEventListener("submit",o.onSubmit)})),O(w(o),"close",(function(){C((n=w(o),L(u.prototype)),"close",n).call(n),o._form.reset()})),o._handleFormSubmit=c,o._form=o._popupElement.querySelector(".popup__form"),o._submitButton=o._form.querySelector(".popup__button"),o._submitButtonDefault=o._submitButton.textContent,o}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"toggleLoadingSubmit",value:function(e){this._submitButton.textContent=e?"Сохранение....":this._submitButtonDefault}}])&&k(t.prototype,n),u}(p),P={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"};function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function q(e,t,n){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},q(e,t,n||e)}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function T(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(o);if(r){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popupElement.querySelector(".popup__form"),t._submitButton=t._form.querySelector(".popup__button"),t._submitButtonDefault=t._submitButton.textContent,t}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._onSubmitAction=e}},{key:"setEventListeners",value:function(){var e=this;q(R(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._onSubmitAction()}))}}])&&B(t.prototype,n),u}(p),V=document.querySelector(".popup_type_edit"),U=V.querySelector(".popup__input_type_name"),A=V.querySelector(".popup__input_type_vocation"),N=document.querySelector(".popup_type_add"),F=document.querySelector(".popup_type_image"),J=document.querySelector(".popup_type_confirm"),G=document.querySelector(".popup_type_avatar"),H=document.querySelector(".profile__edit-button_type_avatar"),z=document.querySelector(".popup__input_type_avatar"),M=document.querySelector(".profile__edit-button_type_info"),K=document.querySelector(".profile__info-name"),Q=document.querySelector(".profile__info-vocation"),W=document.querySelector(".profile__add-button"),X=document.querySelector(".profile__avatar"),Y=document.querySelector(".elements__grid"),Z=new x(J);Z.setEventListeners(),new u(P,".popup__form_type_edit").enableValidation(),new u(P,".popup__form_type_avatar").enableValidation(),new u(P,".popup__form_type_add").enableValidation();var $,ee,te=new t({baseUrl:"https://nomoreparties.co/v1/cohort-30/",headers:{authorization:"e95f6452-4a83-47bc-9602-e1836af50369","Content-Type":"application/json"}}),ne=[];Promise.all([te.getInfoDate(),te.getInitialCards()]).then((function(e){ee=e[0]._id,K.textContent=e[0].name,Q.textContent=e[0].about,X.style.backgroundImage="url(".concat(e[0].avatar,")"),ne=e[1],($=new a({renderer:function(e){var t=se(e);$.addItemAppend(t)}},Y)).renderItems(ne)})).catch((function(e){console.log(e)}));var oe=new s({name:K,vocation:Q}),re=new j({popupElement:V,handleFormSubmit:function(){ie()}});re._getInputValues(),re.setEventListeners();var ie=function(){re.toggleLoadingSubmit(!0),te.saveInfoDate({name:U.value,about:A.value}).then((function(e){oe.setUserInfo({userName:e.name,userVocation:e.about})})).then((function(){re.close()})).catch((function(e){console.log(e)})).finally((function(){re.toggleLoadingSubmit(!1)}))},ue=new j({popupElement:G,handleFormSubmit:function(){console.log("dhjdshv"),ce()}});ue.setEventListeners();var ce=function(){ue.toggleLoadingSubmit(!0),te.changeAvatar(z.value).then((function(e){X.style.backgroundImage="url(".concat(e.avatar,")")})).then((function(){ue.close()})).catch((function(e){console.log(e)})).finally((function(){ue.toggleLoadingSubmit(!1)}))},ae=new j({popupElement:N,handleFormSubmit:function(e){le(e)}});ae.setEventListeners();var le=function(e){var t={name:e.title,link:e.link};te.saveCard(t).then((function(e){var t=se(e);$.addItemPrepend(t)})).then((function(){ae.close()})).catch((function(e){console.log(e)}))},se=function(e){var t=new r({data:e,userId:ee,handleCardClick:function(){fe.open(e)},handleDeleteIconClick:function(e){Z.open(),Z.setSubmitAction((function(){te.deleteCard(e).then((function(){Z.close(),t.cardDelete()})).catch((function(e){console.log(e)}))}))},handleLikeSet:function(e){te.likeCard(e).then((function(e){t.like(e)})).catch((function(e){console.log(e)}))},handleLikeDelete:function(e){te.deleteLikeCard(e).then((function(e){t.like(e)})).catch((function(e){console.log(e)}))}},".elements__template");return t.generateCard()},fe=new b(F);fe.setEventListeners(),M.addEventListener("click",(function(){var e=oe.getUserInfo();U.value=e.userName,A.value=e.userVocation,re.open()})),W.addEventListener("click",(function(){ae.open()})),H.addEventListener("click",(function(){ue.open()}))})();