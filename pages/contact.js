import React, { useState } from "react";

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

  // Comment for now since we dont have EN
  // useEffect(() => {
  //   const storedLanguage = window.localStorage.getItem('language');
  //   changeLanguage(storedLanguage ? storedLanguage : 'ES');
  // }, []);

  return (
    <>
      <CustomHead pageTitle={language === 'ES' ? titleEsp : titleEng} />
      <main className="container mx-auto px-4 py-4 md:py-8 custom-height relative overflow-y-hidden">
        <Header
          active="contact"
          activeLanguage={language}
          changeLanguage={changeLanguage}
        />
        <main className="flex items-end">
          <section className="bottom-4 lg:bottom-16 absolute">
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
          </section>
        </main>
      </main>
    </>
  );
}