class SampleElement extends HTMLElement {
  constructor() {
    super();
    // referencio la plantilla (el contenido)
    let template = document.getElementById('sample-template').content;
    // hago un duplicado en el documento
    let node = document.importNode(template, true);
    // creo un shadow DOM para el contenido del custom element
    const shadowRoot = this.attachShadow({ mode: 'open' });
    // agrego la copia del contenido de la plantilla en
    // el shadow DOM del custom element
    shadowRoot.appendChild(node);
  }
  connectedCallback() {}
}

if (!customElements.get('sample-element')) {
  customElements.define('sample-element', SampleElement);
}
