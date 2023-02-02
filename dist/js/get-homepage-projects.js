const homepageGalleryContainer = document.querySelector('.gallery-container');

homepageGalleryContainer.innerHTML = projects.sort((a, b) => a.order > b.order ? 1 : -1)
  .map(project => {
    const { thumbnail, shortTitle } = project;

    return (`
      <li class="gallery-item w-64 md:w-96 mr-8 md:mr-10">
        <a href="./projects/${thumbnail}.html" class="group">
          <img
            src="./assets/images/home/${thumbnail}.jpg"
            srcset="./assets/images/home/${thumbnail}.jpg 1x, ./assets/images/home/${thumbnail}@2x.jpg 2x"
            alt="${shortTitle}"
            class="group-hover:opacity-90 transition ease-in-out duration-100"
          />
          <h2
            class="text-xl md:text-2xl mt-4 md:mt-6 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100"
          >
            ${shortTitle}
          </h2>
        </a>
      </li>
    `)
  })
.join('');

const container = document.getElementsByClassName('gallery-container');
const blocks = document.getElementsByClassName('gallery-item');
const hs = new HorizontalScroll.default({
  blocks : blocks,
  container: container,
});