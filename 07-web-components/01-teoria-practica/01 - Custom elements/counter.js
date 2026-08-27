class KcCounter extends HTMLElement {
  static get observedAttributes() {
    return ['value', 'data-tgb'];
  }

  constructor() {
    super();

    // establecer el valor inicial
    this.value = 31;
  }

  set value(value) {
    if (this._value === value) {
      return;
    }
    this._value = value;
    this._updateValue();
  }

  get value() {
    return this._value;
  }

  connectedCallback() {
    this.innerHTML = `
        <button id="decrement">&minus;</button>
        <span id="value"></span>
        <button id="increment">&plus;</button>
      `;

    // obtengo la referencia al span del valor
    this.valueElement = this.querySelector('#value');
    this._updateValue();

    // obtengo las instancias de los botones más y menos
    this.minusButton = this.querySelector('#decrement');
    this.plusButton = this.querySelector('#increment');

    // me suscribo a los eventos click
    this.minusButton.addEventListener('click', () => {
      this.value--;
    });
    this.plusButton.addEventListener('click', () => {
      this.value++;
    });
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log('attibuteChanged', attrName, oldValue, '=>', newValue);
    if (attrName === 'value') {
      if (newValue) {
        this.value = parseInt(newValue, 10);
      } else {
        this.value = 0;
      }
    }
  }

  disconnectedCallback() {
    this.minusButton.removeEventListener('click');
    this.plusButton.removeEventListener('click');
  }

  _updateValue() {
    console.log('updateValue');
    if (this.valueElement) {
      this.valueElement.innerText = this._value;
      console.log('--- Repintado');
    }

    this.dispatchEvent(
      new CustomEvent('valueChanged', { detail: this._value })
    );
  }
}

if (!customElements.get('kc-counter')) {
  customElements.define('kc-counter', KcCounter);
}
