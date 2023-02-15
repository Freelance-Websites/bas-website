import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';

import CustomHead from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { getAllCollections } from "../lib/collections";

export default function Homepage({ projectsData }) {
  const [language, setLanguage] = useState();

  const changeLanguage = (lang) => {
    setLanguage(lang);
    window.localStorage.setItem('language', lang);
  }

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('language');
    changeLanguage(storedLanguage ? storedLanguage : 'ES')
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
        <ul className="py-4 md:py-8 lg:py-16 xl:py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          {projectsData.map(project => 
            <li>
              <Card
                project={project}
                language={language}
              />
            </li>
          )}
        </ul>
        <Footer isProject={false} />
      </main>
    </>
  );
}

export const Card = (project, language) => {
  return (
    <Link
      href={`/projects/${project.project.id}`}
      className="group"
    >
      <Image
        src={project.project.thumbnail}
        alt={language === 'ES' ? project.project.shortTitleEsp : project.project.shortTitleEng}
        width={470}
        height={350}
        className="group-hover:opacity-90 transition ease-in-out duration-100"
        priority
      />
      <h2
        className="text-md mt-2 md:mt-4 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100"
      >
        {language === 'ES' ? project.project.shortTitleEsp : project.project.shortTitleEng}
      </h2>
    </Link>
  )
}

export async function getStaticProps() {
  const projectsData = getAllCollections("projects");
  return {
    props: {
      projectsData,
    }
  };
};