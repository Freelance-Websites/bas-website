class MoreProjects extends HTMLElement {
  connectedCallback() {
    const { image, extension, title, location, role, year } = this.dataset;

    this.innerHTML = `
      <p>test</p>
    `;
  }
};

customElements.define('more-projects', MoreProjects);