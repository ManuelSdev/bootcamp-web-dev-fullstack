class KcSwapi extends HTMLElement {
    constructor() {
      super();
      //Pilla plantilla
      this.template = document.getElementById('starwars-films').content;
      //Creamos shadow dom para el contenido del custom element
      this.shadowDom = this.attachShadow({ mode: 'closed' });
      console.log(this.shadowRoot)
      console.log(this.shadowDom)

    }
    //Hacemos un get para poder pillar desde fuera this._films
    get films() {
        return this._films;
      }
    connectedCallback() {
        console.log('response');
      const url = 'https://swapi.dev/api/films/';
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.addEventListener('load', (event)=>{
        const response = JSON.parse(event.target.response);
        console.log(response);
        //extraemos los resultados de la respuesta
        const results = response.results;
        //La respuesta contiene un array con objetos peliculas
        //Simplificamos mapeando esos objetos a otro array
        //con objetos que tengan solo las propiedades que nos 
        //interesan de las peliculas
        this._films = results
            .map((film) => {
                return {
                    title: film.title,
                    director: film.director,
                    episode: film.episode_id,
                    release: film.release_date,
                };
            })
            //ordenamos por episodio
            .sort((a, b) => a.episode - b.episode);
            this.displayFilms();
            console.log(this._films);
          });
          request.send();
        }
      
        displayFilms() {
          for (let film of this._films) {
            let node = document.importNode(this.template, true);
            console.log(node.getElementById('episode').innerText);
            node.getElementById('episode').innerText = film.episode;
            node.getElementById('title').innerText = film.title;
            node.getElementById('director').innerText = film.director;
            node.getElementById('release').innerText = film.release;
            this.shadowDom.appendChild(node);
          }
        }
}

if (!customElements.get('kc-swapi')) {
    customElements.define('kc-swapi', KcSwapi);
  }
  
