export class Section{
  constructor({renderer}, container){
    this._renderer = renderer;
    this._container = container;
  }

  renderItems = (items) => {
    this._items = items;
    this._items.forEach(item => this._renderer(item));
  } 

  addItemAppend = (element) => {
    this._container.append(element)
  }

  addItemPrepend = (element) => {
    this._container.prepend(element)
  }

}