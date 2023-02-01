class Gallery extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ul class="gallery-container">
        <li class="gallery-item w-64 md:w-96 mr-8 md:mr-10">
          <a href="./projects/estomba.html" class="group">
            <img
              src="./assets/images/home/estomba.jpg"
              srcset="./assets/images/home/estomba.jpg 1x, ./assets/images/home/estomba@2x.jpg 2x"
              alt="Estomba"
              class="group-hover:opacity-90 transition ease-in-out duration-100"
            />
            <h2
              class="text-xl md:text-2xl mt-4 md:mt-6 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100"
            >
              estomba
            </h2>
          </a>
        </li>
        <li class="gallery-item w-64 md:w-96 mr-8 md:mr-10">
          <a href="./projects/galicia.html" class="group">
            <img
              src="./assets/images/home/galicia.jpg"
              srcset="./assets/images/home/galicia.jpg 1x, ./assets/images/home/galicia@2x.jpg 2x"
              alt="Galicia"
              class="group-hover:opacity-90 transition ease-in-out duration-100"
            />
            <h2
              class="text-xl md:text-2xl mt-4 md:mt-6 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100"
            >
              galicia
            </h2>
          </a>
        </li>
        <li class="gallery-item w-64 md:w-96 mr-8 md:mr-10">
          <a href="./projects/teodoro-garcia.html" class="group">
            <img
              src="./assets/images/home/teodoro.jpg"
              srcset="./assets/images/home/teodoro.jpg 1x, ./assets/images/home/teodoro@2x.jpg 2x"
              alt="Teodoro García"
              class="group-hover:opacity-90 transition ease-in-out duration-100"
            />
            <h2
              class="text-xl md:text-2xl mt-4 md:mt-6 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100"
            >
              teodoro garcia
            </h2>
          </a>
        </li>
        <li class="gallery-item w-64 md:w-96 mr-8 md:mr-10">
          <a href="./projects/comodoro-rivadavia.html" class="group">
            <img
              src="./assets/images/home/comodoro.jpg"
              srcset="./assets/images/home/comodoro.jpg 1x, ./assets/images/home/comodoro@2x.jpg 2x"
              alt="Comodoro Rivadavia"
              class="group-hover:opacity-90 transition ease-in-out duration-100"
            />
            <h2
              class="text-xl md:text-2xl mt-4 md:mt-6 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100"
            >
              comodoro rivadavia
            </h2>
          </a>
        </li>
        <li class="gallery-item w-64 md:w-96 mr-8 md:mr-10">
          <a href="./projects/heredia.html" class="group">
            <img
              src="./assets/images/home/heredia.jpg"
              srcset="./assets/images/home/heredia.jpg 1x, ./assets/images/home/heredia@2x.jpg 2x"
              alt="Heredia"
              class="group-hover:opacity-90 transition ease-in-out duration-100"
            />
            <h2
              class="text-xl md:text-2xl mt-4 md:mt-6 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100"
            >
              heredia
            </h2>
          </a>
        </li>
        <li class="gallery-item w-64 md:w-96 mr-8 md:mr-10">
          <a href="./projects/olaguer-y-feliu.html" class="group">
            <img
              src="./assets/images/home/olaguer.jpg"
              srcset="./assets/images/home/olaguer.jpg 1x, ./assets/images/home/olaguer@2x.jpg 2x"
              alt="Olaguer y Feliú"
              class="group-hover:opacity-90 transition ease-in-out duration-100"
            />
            <h2
              class="text-xl md:text-2xl mt-4 md:mt-6 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100"
            >
              olaguer y feliu
            </h2>
          </a>
        </li>
        <li class="gallery-item w-64 md:w-96 mr-8 md:mr-10">
          <a href="./projects/oficinas-pq.html" class="group">
            <img
              src="./assets/images/home/oficinas-pq.jpg"
              srcset="./assets/images/home/oficinas-pq.jpg 1x, ./assets/images/home/oficinas-pq@2x.jpg 2x"
              alt="Oficinas PQ"
              class="group-hover:opacity-90 transition ease-in-out duration-100"
            />
            <h2
              class="text-xl md:text-2xl mt-4 md:mt-6 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100"
            >
              oficinas pq
            </h2>
          </a>
        </li>
        <li class="gallery-item w-64 md:w-96">
          <a href="./projects/yacireta.html" class="group">
            <img
              src="./assets/images/home/yacireta.jpg"
              srcset="./assets/images/home/yacireta.jpg 1x, ./assets/images/home/yacireta@2x.jpg 2x"
              alt="Pabellón Yaciretá"
              class="group-hover:opacity-90 transition ease-in-out duration-100"
            />
            <h2
              class="text-xl md:text-2xl mt-4 md:mt-6 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100"
            >
              yacireta
            </h2>
          </a>
        </li>
      </ul>
    `;

    const blocks = document.getElementsByClassName('gallery-item');
    const container = document.getElementsByClassName('gallery-container');
    const hs = new HorizontalScroll.default({
      blocks : blocks,
      container: container,
    });
  }
};

customElements.define('home-gallery', Gallery);