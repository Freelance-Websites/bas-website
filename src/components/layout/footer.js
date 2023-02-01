class Footer extends HTMLElement {
  connectedCallback() {
    const { project } = this.dataset;

    this.innerHTML = `
      <footer class="flex flex-col lg:flex-row items-baseline justify-between ${project === 'true' ? '' : 'px-4'}">
        <p class="font-sans uppercase text-xs text-gray-900 tracking-widest">
          Copyright &copy; ${new Date().getFullYear()} BA AA.
        </p>
        <p class="font-sans uppercase text-xs text-gray-900 tracking-widest mt-1 md:mt-0">
          Website by
          <a
            href="https://www.juanmartingarcia.com"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:underline underline-offset-4"
          >
            JMG
          </a>
        </p>
      </footer>
    `;
  }
};

customElements.define('custom-footer', Footer);