import React, { useState } from "react";

import CustomHead from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Homepage({ projectsData }) {
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
      <CustomHead pageTitle="Contacto" />
      <main className="container mx-auto px-4 py-4 md:py-8 custom-height relative overflow-y-hidden">
        <Header
          active="contact"
          activeLanguage={language}
          changeLanguage={changeLanguage}
        />
        <main className="h-screen flex items-end">
          <section className="bottom-4 lg:bottom-16 absolute">
            <h1 className="font-sans uppercase text-xs text-gray-900 tracking-widest" data-text-en="Contact" data-text-es="Contacto">
              {language === 'ES' ? 'Contacto' : 'Contact'}
            </h1>
            <ul className="text-md mt-2 text-gray-900">
              <li>
                <a className="hover:opacity-90 transition ease-in-out duration-100" href="mailto:hola@ba-studio.com.ar">
                  hola@ba-studio.com.ar
                </a>
              </li>
              <li>
                <a className="hover:opacity-90 transition ease-in-out duration-100" href="https://wa.link/tl44uk" target="_blank" rel="noopener noreferrer">
                  +54 11 40 43 58 69
                </a>
              </li>
              <li>
                <a className="hover:opacity-90 transition ease-in-out duration-100" href="https://goo.gl/maps/3VXovjsH26XB5pzZ6" target="_blank" rel="noopener noreferrer">
                  roseti 446, caba
                </a>
              </li>
            </ul>
          </section>
        </main>
      </main>
    </>
  );
}