class Hero extends HTMLElement {
  connectedCallback() {
    const { thumbnail, longTitle, location, role, year, status } = selectedProject[0];

    this.innerHTML = `
      <section class="pt-4 w-full">
        <img src="../assets/images/projects/${thumbnail}/hero.jpg"
          srcset="../assets/images/projects/${thumbnail}/hero.jpg 1x, ../assets/images/projects/${thumbnail}/hero@2x.jpg 2x"
          alt="${longTitle}" class="w-full" />
        <ul class="container mx-auto flex flex-col md:flex-row justify-between items-baseline px-4 pt-4 md:pt-12">
          <li>
            <h1 class="font-sans text-primary text-2xl md:text-3xl mb-2">${longTitle}</h1>
            <p class="font-sans text-primary text-lg leading-tight">${location}.</p>
            <p class="font-sans text-primary text-lg leading-tight">${role}.</p>
            ${status ?
              `<p class="font-sans text-primary text-lg leading-tight">${status}.</p>`
            : ''}
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