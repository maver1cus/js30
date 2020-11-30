const createKeyTemplate = (code, symbol, sound) => {
  return (
    `<div data-key="${code}" class="key">
        <kbd>${symbol}</kbd>
        <span class="sound">${sound}</span>
        <audio data-key="${code}" src="sounds/${sound}.wav">
    </div>`
  )
};

export default class Key {
  constructor(key) {
    this._element = null;
    this.code = key.code;
    this.symbol = key.symbol;
    this.sound = key.sound;
  }

  getTemplate() {
    return createKeyTemplate(this.code, this.symbol, this.sound);
  }

  getElement() {
    if (!this._element) {
      const newElement = document.createElement(`div`);
      newElement.innerHTML = this.getTemplate();
      this._element = newElement.firstChild;
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}