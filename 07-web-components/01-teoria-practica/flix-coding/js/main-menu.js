class KcMainMenu extends HTMLElement {
  menuItems = [
    {
      link: '/home.html#trending',
      name: 'Popular',
    },
    {
      link: '/home.html#shows',
      name: 'Series',
    },
    {
      link: '/home.html#movies',
      name: 'Películas',
    },
    {
      link: '#',
      name: 'Mi perfil',
    },
    {
      link: 'index.html',
      name: 'Cerrar sesión',
    },
  ];

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <template id="menu-item-tpl">
      <li class="navbar-item">
        <a href="" class="item-link"></a>
      </li>
    </template>
    `;
    this.itemTemplate = this.querySelector('#menu-item-tpl');
    this.render();
  }

  render() {
    this.menuItems.forEach((item) => this.addMenuItem(item.name, item.link));
  }

  addMenuItem(name, link) {
    // const linkElement = document.createElement('a');
    // linkElement.setAttribute('href', link);
    // linkElement.innerText = name;
    // const listElement = document.createElement('li');
    // listElement.classList.add('navbar-item');
    // listElement.appendChild(linkElement);
    // this.appendChild(listElement);

    const node = document.importNode(this.itemTemplate.content, true);
    const linkElement = node.querySelector('.item-link');
    linkElement.innerText = name;
    linkElement.setAttribute('href', link);
    this.appendChild(node);
  }
}

if (!customElements.get('kc-main-menu')) {
  customElements.define('kc-main-menu', KcMainMenu);
}
