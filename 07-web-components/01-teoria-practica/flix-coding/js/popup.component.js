class KcPopup extends HTMLElement {
  static get observedAttributes() {
    return ['open'];
  }

  template = `
      <style>
        .wrapper {
          opacity: 0;
          transition: visibility 0s, opacity 0.25s ease-in;
        }

        .wrapper:not(.open) {
          visibility: hidden;
        }

        .wrapper.open {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          height: 100vh;
          width: 100vw;
          opacity: 1;
          visibility: visible;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Estilos del popup */
        .overlay {
          background: rgba(0, 0, 0, 0.8);
          height: 100%;
          width: 100%;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .dialog {
          background-color: white;
          max-width: 500px;
          padding: 1rem;
          position: fixed;
        }

        button {
          cursor: pointer;
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        button:focus {
          border: 2px solid green;
        }

        :host {
          color: green;
          font-family: serif;
        }
      </style>

      <!-- Contenido HTML -->
      <div class="wrapper">
        <div class="overlay"></div>
        <div class="dialog">
          <button class="close">&times;</button>
          <h1 id="title"><slot name="title"></slot></h1>
          <div class="content" id="content">
            <slot part="contenido"></slot>
            <span part="resaltado">Gracias!</span>
          </div>
        </div>
      </div>
  `;

  constructor() {
    console.log('constructor');
    super();

    this.attachShadow({ mode: 'open' });

    this.close = this.close.bind(this);
    this._watchEscape = this._watchEscape.bind(this);
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log('attributeChangedCallback');
    if (newValue !== oldValue) {
      // this['value']
      // this.value
      this[attrName] = this.hasAttribute(attrName);
    }
  }

  connectedCallback() {
    console.log('connectedCallback');

    // const template = document.getElementById('plantilla');
    // const node = document.importNode(template.content, true);
    // this.appendChild(node);
    // this.shadowRoot.appendChild(node);
    this.shadowRoot.innerHTML = this.template;

    this.shadowRoot
      .querySelector('button')
      .addEventListener('click', this.close);
    this.shadowRoot
      .querySelector('.overlay')
      .addEventListener('click', this.close);
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector('button')
      .removeEventListener('click', this.close);
    this.shadowRoot
      .querySelector('.overlay')
      .removeEventListener('click', this.close);
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(isOpen) {
    this.shadowRoot.querySelector('.wrapper').classList.toggle('open', isOpen);
    if (isOpen) {
      this.setAttribute('open', true);
      document.addEventListener('keydown', this._watchEscape);
    } else {
      this.removeAttribute('open');
      document.removeEventListener('keydown', this._watchEscape);
    }
  }

  close() {
    if (this.open !== false) {
      this.open = false;
    }

    const closeEvent = new CustomEvent('popup-closed');
    this.dispatchEvent(closeEvent);
  }

  _watchEscape(event) {
    console.log(event);
    if (event.key === 'Escape') {
      this.close();
    }
  }
}

if (!customElements.get('kc-popup')) {
  customElements.define('kc-popup', KcPopup);
}
