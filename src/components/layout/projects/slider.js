class ProjectSlider extends HTMLElement {
  connectedCallback() {
    // Grab the images data, and add a src prop, to use when initializing the modal
    const { images } = this.dataset;
    const imagesData = JSON.parse(images);
    imagesData.forEach(image => image.src = `${image.url}.${image.extension}`);

    // Add the markup for it
    this.innerHTML = `
      <section class="carousel" id="slider">
        ${imagesData.map((image, index) => 
          `
            <div class="carousel-cell mx-5 aspect-${image.aspect} h-80 md:h-[680px]" data-index="${index}">
              <img
                src="${image.url}.${image.extension}"
                srcset="${image.url}.${image.extension} 1x, ${image.url}@2x.${image.extension} 2x"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          `
         ).join('')}
      </section>
    `;

    // Carousel initialization
    const carouselContainer = document.querySelector('.carousel');
    const flkty = new Flickity( carouselContainer, {
      autoPlay: 4000,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
      imagesLoaded: true,
      adaptiveHeight: false,
      pauseAutoPlayOnHover: false,
      lazyLoad: 4,
    });

    // Programatically initialize modal
    const gallery = lightGallery(document.getElementById('slider'), {
      dynamic: true,
      dynamicEl: imagesData,
      download: false,
      counter: false,
      // addClass: "custom-lightbox",
      hideScrollbar: true,
      mobileSettings: {
        controls: true,
        showCloseIcon: true
      },
      nextHtml: `<svg clip-rule="evenodd" fill-rule="evenodd" stroke-miterlimit="10" viewBox="0 0 180 67"
                  xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m-28.707 0h28.707" stroke-width=".63" transform="matrix(-5.3265933249 0 0 2.66667 13.393503 33.0929874)" /><path d="m-8.645-3.691c2.701-2.82 7.276-2.82 10.22 0" transform="matrix(-1.84461297243 1.92575440719 1.92575440719 1.84461297243 156.5403486 56.5330167)" /><path d="m-8.645 3.691c2.701 2.82 7.276 2.82 10.22 0" transform="matrix(-1.84461297243 -1.92575440719 -1.92575440719 1.84461297243 156.5403486 9.6262914)" /></g></svg>`,
      prevHtml: `<svg clip-rule="evenodd" fill-rule="evenodd" stroke-miterlimit="10" viewBox="0 0 180 67"
                  xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m-28.707 0h28.707" stroke-width=".63" transform="matrix(-5.3265933249 0 0 2.66667 13.393503 33.0929874)" /><path d="m-8.645-3.691c2.701-2.82 7.276-2.82 10.22 0" transform="matrix(-1.84461297243 1.92575440719 1.92575440719 1.84461297243 156.5403486 56.5330167)" /><path d="m-8.645 3.691c2.701 2.82 7.276 2.82 10.22 0" transform="matrix(-1.84461297243 -1.92575440719 -1.92575440719 1.84461297243 156.5403486 9.6262914)" /></g></svg>`,
    });

    // Trigger the modal when clicking on the images
    const galleryTriggers = document.querySelectorAll('.carousel-cell');
    galleryTriggers.forEach(trigger => trigger.addEventListener('click', () => {
      gallery.openGallery(trigger.dataset.index);
    }))
  }
};

customElements.define('project-slider', ProjectSlider);