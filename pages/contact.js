import React, { useState, useEffect } from "react";

import CustomHead from '../components/Head';
import Header from '../components/Header';

import { attributes } from '../content/contact.md';

export default function Contact() {
  const {
    titleEsp,
    titleEng,
    emailContent,
    phoneContent,
    phoneUrl,
    addressContent,
    addressUrl,
  } = attributes;

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
      <CustomHead pageTitle={language === 'ES' ? titleEsp : titleEng} />
      <main className="container mx-auto px-4 py-4 md:py-8 custom-height relative">
        <Header
          active="contact"
          activeLanguage={language}
          changeLanguage={changeLanguage}
        />
          <section className="flex items-end absolute bottom-8 md:bottom-16">
            <div>
              <h1 className="font-sans uppercase text-xs text-gray-900 tracking-widest" data-text-en={titleEng} data-text-es={titleEsp}>
              {language === 'ES' ? titleEsp : titleEng}
            </h1>
            <ul className="text-md mt-2 text-gray-900">
              <li>
                <a className="hover:opacity-90 transition ease-in-out duration-100" href={`mailto:${emailContent}`}>
                  {emailContent}
                </a>
              </li>
              <li>
                <a className="hover:opacity-90 transition ease-in-out duration-100" href={phoneUrl} target="_blank" rel="noopener noreferrer">
                  {phoneContent}
                </a>
              </li>
              <li>
                <a className="hover:opacity-90 transition ease-in-out duration-100" href={addressUrl} target="_blank" rel="noopener noreferrer">
                  {addressContent}
                </a>
              </li>
            </ul>
            </div>
          </section>
      </main>
    </>
  );
}