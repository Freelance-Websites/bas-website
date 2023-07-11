import React, { useState, useEffect } from "react";

import CustomHead from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { getStudioData } from '../lib/studio';

export default function Studio({ studioData }) {
  const [language, setLanguage] = useState('ES');

  const changeLanguage = (lang) => {
    setLanguage(lang);
    window.localStorage.setItem('language', lang);
  }

  const updateViewportHeight = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;

    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    // Comment for now since we dont have EN language
    //   const storedLanguage = window.localStorage.getItem('language');
    //   changeLanguage(storedLanguage ? storedLanguage : 'ES');

    updateViewportHeight();
    window.addEventListener('resize', () => updateViewportHeight());

    // Cleanup
    return () => {
      document.removeEventListener('resize', updateViewportHeight);
    }
  }, []);

  return (
    <>
      <CustomHead pageTitle={language === 'ES' ? studioData.titleEsp : studioData.titleEng} />
      <main className="container mx-auto px-4 py-4 md:py-8 custom-height relative">
        <Header
          active="studio"
          activeLanguage={language}
          changeLanguage={changeLanguage}
        />
          <section className="py-4 md:py-8 lg:py-16 xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
              <h1 className="md:col-span-2 pt-8 md:pt-0 font-sans uppercase text-xs text-gray-900 tracking-widest" data-text-en={studioData.titleEng} data-text-es={studioData.titleEsp}>
                {language === 'ES' ? studioData.titleEsp : studioData.titleEng}
              </h1>
              <div className="grid grid-cols-1 gap-4 text-gray-900 text-md leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: studioData.contentHtml }} />
          </section>
          <Footer classes={"md:absolute md:left-0 md:bottom-0 md:w-full md:px-4"} />
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const studioData = await getStudioData();

  return {
    props: {
      studioData
    }
  }
}