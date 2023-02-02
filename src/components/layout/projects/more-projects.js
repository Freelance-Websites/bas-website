class MoreProjects extends HTMLElement {
  connectedCallback() {
    const {  } = this.dataset;

    this.innerHTML = `
      <div class="container mx-auto flex flex-col md:flex-row items-end justify-between px-4">
        <h4 class="font-sans text-primary text-2xl md:text-3xl">more projects</h4>
        <!-- Arrow -->
        <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
          class="ml-auto fill-primary mb-2">
          <path
            d="M63.4867 61.8074L64 0C48.519 0.150494 17.6712 0.362806 2.1916 0.511958L2.06395 8.24889C15.9887 8.11183 34.4745 7.99896 50.7388 7.85117L0 58.5891L5.41099 64L56.1497 13.2621L55.709 61.8948L63.4891 61.8075L63.4867 61.8074Z" />
        </svg>
      </div>
      <ul>
        
      </ul>
    `;
  }
};

customElements.define('more-projects', MoreProjects);