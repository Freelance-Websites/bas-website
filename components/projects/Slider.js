import { useRef, useCallback } from 'react';
import Flickity from 'react-flickity-component';
import LightGallery from 'lightgallery/react';

// Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const flickityOptions = {
  autoPlay: 4000,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  imagesLoaded: true,
  adaptiveHeight: false,
  pauseAutoPlayOnHover: false,
  lazyLoad: 4,
};

const Slider = ({ images, alt }) => {
  const lightGallery = useRef(null);

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    };
  }, []);

  return (
    <section className="group relative">
      <LightGallery
        dynamic={true}
        dynamicEl={images}
        download={false}
        counter={false}
        hideScrollbar={true}
        onInit={onInit}
        mobileSettings={{
          controls: true,
          showCloseIcon: true
        }}
        nextHtml={
          `<svg clip-rule="evenodd" fill-rule="evenodd" stroke-miterlimit="10" viewBox="0 0 180 67" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m-28.707 0h28.707" stroke-width=".63" transform="matrix(-5.3265933249 0 0 2.66667 13.393503 33.0929874)" /><path d="m-8.645-3.691c2.701-2.82 7.276-2.82 10.22 0" transform="matrix(-1.84461297243 1.92575440719 1.92575440719 1.84461297243 156.5403486 56.5330167)" /><path d="m-8.645 3.691c2.701 2.82 7.276 2.82 10.22 0" transform="matrix(-1.84461297243 -1.92575440719 -1.92575440719 1.84461297243 156.5403486 9.6262914)" /></g></svg>`
        }
        prevHtml={
          `<svg clip-rule="evenodd" fill-rule="evenodd" stroke-miterlimit="10" viewBox="0 0 180 67" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m-28.707 0h28.707" stroke-width=".63" transform="matrix(-5.3265933249 0 0 2.66667 13.393503 33.0929874)" /><path d="m-8.645-3.691c2.701-2.82 7.276-2.82 10.22 0" transform="matrix(-1.84461297243 1.92575440719 1.92575440719 1.84461297243 156.5403486 56.5330167)" /><path d="m-8.645 3.691c2.701 2.82 7.276 2.82 10.22 0" transform="matrix(-1.84461297243 -1.92575440719 -1.92575440719 1.84461297243 156.5403486 9.6262914)" /></g></svg>`
        }
      >
        <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          static
        >
          {images.filter(image => image.visible === true).map((image, index) => 
            <img
              src={image.src}
              className={`mx-5 aspect-${image.aspect} h-80 md:h-[680px] object-cover`}
              key={index}
              alt={alt}
            />
          )}
        </Flickity>
      </LightGallery>
      {/* Fullscreen button */}
      <button
        className="absolute right-4 top-4 transition ease-in-out duration-75 opacity-0 group-hover:opacity-100 p-2 rounded-sm bg-white"
        id="fullscreen-btn"
        onClick={() => lightGallery.current.openGallery()}
      >
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.6663 2.67331L9.58229 7.75731L8.63952 6.81454L13.7235 1.73054H10.2219V0.397461H15.9994V6.17494H14.6663V2.67331ZM1.33308 14.1216L6.41708 9.03761L7.35985 9.98038L2.27585 15.0644H5.77748V16.3975H0V10.62H1.33308V14.1216Z"
            fill="#1A1A1A" />
        </svg>
      </button>
    </section>
  );
};

export default Slider;