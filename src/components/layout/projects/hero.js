class Hero extends HTMLElement {
  connectedCallback() {
    const { image, extension, title, location, role, year } = this.dataset;

    this.innerHTML = `
      <section class="pt-4 w-full">
        <img src="${image}.${extension}"
          srcset="${image}.${extension} 1x, ${image}@2x.${extension} 2x"
          alt="${title}" class="w-full" />
        <ul class="container mx-auto flex flex-col md:flex-row justify-between items-baseline px-4 pt-4 md:pt-12">
          <li>
            <h1 class="font-sans text-primary text-2xl md:text-3xl mb-2">${title}</h1>
            <p class="font-sans text-primary text-lg leading-tight">${location}</p>
            <p class="font-sans text-primary text-lg leading-tight">${role}</p>
          </li>
          <li class="order-first md:order-none">
            <span class="text-primary font-sans text-sm">${year}</span>
          </li>
        </ul>
      </section>
    `;
  }
};

customElements.define('project-hero', Hero);