class MoreProjects extends HTMLElement {
  connectedCallback() {
    const otherProjects = projects.filter(project => project.thumbnail !== projectName);

    this.innerHTML = `
      <div class="container mx-auto flex items-end justify-between px-4">
        <h4 class="font-sans text-primary text-2xl md:text-3xl">más proyectos</h4>
        <!-- Arrow -->
        <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
          class="ml-auto fill-primary mb-2">
          <path
            d="M63.4867 61.8074L64 0C48.519 0.150494 17.6712 0.362806 2.1916 0.511958L2.06395 8.24889C15.9887 8.11183 34.4745 7.99896 50.7388 7.85117L0 58.5891L5.41099 64L56.1497 13.2621L55.709 61.8948L63.4891 61.8075L63.4867 61.8074Z" />
        </svg>
      </div>
      <ul class="flex ml-4 mt-8 pb-4 overflow-x-auto overflow-x-overlay">
        ${otherProjects.map((project, index) => {
          const {thumbnail, shortTitle} = project;

          return(
            `
              <li class="flex-none w-72 2xl:w-1/6 md:w-1/2-gap-8 lg:w-1/3-gap-8 ${index !== (otherProjects.length -1) ? 'mr-8 md:mr-10' : ''}">
                <a href="./${thumbnail}.html" class="group">
                  <img
                    src="../assets/images/home/${thumbnail}.jpg"
                    srcset="../assets/images/home/${thumbnail}.jpg 1x, ../assets/images/home/${thumbnail}@2x.jpg 1x"
                    alt="${shortTitle}"
                    class="group-hover:opacity-90 transition ease-in-out duration-100"
                  />
                  <h4 class="text-xl md:text-2xl mt-4 md:mt-6 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100">
                    ${shortTitle}
                  </h4>
                </a>
              </li>
            `
          )
        }).join('')}
      </ul>
    `;
  }
};

customElements.define('more-projects', MoreProjects);