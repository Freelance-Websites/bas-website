import { useState, useRef, useCallback } from 'react';
import Flickity from 'react-flickity-component';
import LightGallery from 'lightgallery/react';

// Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const flickityOptions = {
  autoPlay: 4000,
  prevNextButtons: true,
  pageDots: false,
  wrapAround: true,
  imagesLoaded: true,
  adaptiveHeight: false,
  pauseAutoPlayOnHover: false,
  lazyLoad: 1,
  arrowShape: 'm9.01456 14.2758-1.34233-1.3274 4.66087-4.66085h-11.7081v-1.93892h11.7081l-4.66087-4.65341 1.34233-1.334868 6.95774 6.957738z'
};

const Slider = ({ images, alt }) => {
  // Image gallery stuff
  const lightGallery = useRef(null);
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    };
  }, []);
  
  // Prev-Next arrow
  const [flktyRef, setFlktyRef] = useState(null);
  const prevSlide = () => {
    flktyRef.previous();
  }
  const nextSlide = () => {
    flktyRef.next();
  }

  return (
    <section className="group relative pt-8">
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
      >
        <Flickity
          className={'carousel overflow-x-hidden'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          flickityRef={c => setFlktyRef(c)}
        >
          {images && images.filter(image => image.visible === true).map((image, index) => 
            <div
              key={index}
              className="w-full mx-auto flex justify-center"
            >
              <img
                src={image.src}
                className={`aspect-${image.aspect} object-contain block h-80 lg:h-[680px]`}
                alt={alt}
              />
            </div>
          )}
        </Flickity>
      </LightGallery>
      {/* Fullscreen button */}
      <button
        className="absolute right-0 top-8 transition ease-in-out duration-75 opacity-0 group-hover:opacity-100"
        id="fullscreen-btn"
        onClick={() => lightGallery.current.openGallery()}
      >
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.6663 2.67331L9.58229 7.75731L8.63952 6.81454L13.7235 1.73054H10.2219V0.397461H15.9994V6.17494H14.6663V2.67331ZM1.33308 14.1216L6.41708 9.03761L7.35985 9.98038L2.27585 15.0644H5.77748V16.3975H0V10.62H1.33308V14.1216Z"
            fill="#1A1A1A" />
        </svg>
      </button>
      {/* Custom prev-next buttons */}
      <button onClick={prevSlide} className="hidden md:block absolute top-1/2">
        <svg fill="none" height="15" viewBox="0 0 16 15" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6.9581 14.2758 1.34233-1.3274-4.66087-4.66085h11.70814v-1.93892h-11.70814l4.66087-4.65341-1.34233-1.334868-6.95774523 6.957738z" fill="#1a1a1a"/></svg>
      </button>
      <button onClick={nextSlide} className="hidden md:block absolute top-1/2 right-0">
        <svg fill="none" height="15" viewBox="0 0 16 15" width="16" xmlns="http://www.w3.org/2000/svg" className="fill-gray-900"><path d="m9.01456 14.2758-1.34233-1.3274 4.66087-4.66085h-11.7081v-1.93892h11.7081l-4.66087-4.65341 1.34233-1.334868 6.95774 6.957738z" /></svg>
      </button>
    </section>
  );
};

export default Slider;