import React, { useState, useEffect } from "react";

import CustomHead from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/projects/Card';

import { getAllCollections } from "../lib/collections";

export default function Homepage({ projectsData }) {
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
      <CustomHead pageTitle="Home" />
      <main className="container mx-auto px-4 py-4 md:py-8 custom-height relative">
        <Header
          active="home"
          activeLanguage={language}
          changeLanguage={changeLanguage}
        />
        <ul className="py-4 md:py-8 lg:py-16 xl:py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-8 lg:gap-x-12 lg:gap-y-4">
          {projectsData.sort((projectA, projectB) => projectA.order > projectB.order ? 1 : -1).map((project, index) => 
            <li key={index}>
              <Card
                project={project}
                activeLanguage={language}
              />
            </li>
          )}
        </ul>
        <Footer isProject={false} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const projectsData = getAllCollections("projects");
  return {
    props: {
      projectsData,
    }
  };
};