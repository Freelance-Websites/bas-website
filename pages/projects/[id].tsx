import React, { useState, useEffect } from "react";

import CustomHead from "../../components/Head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Hero from "../../components/projects/Hero";
import Article from "../../components/projects/Article";
import Slider from "../../components/projects/Slider";

import { getCollectionIds, getCollectionById } from '../../lib/collections';

export default function Projects({ projectData }) {
  const contentArray = projectData.contentHtml.match(/<p>(.*?)<\/p>/g);
  const half = Math.round(contentArray.length / 2);
  const firstHalfArray = contentArray.slice(0, half);
  const secondHalfArray = contentArray.slice(half, contentArray.length);

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
      <CustomHead pageTitle={`Proyectos`} />
      <main className="py-4 md:py-8">
        <section className="container mx-auto px-4">
          <Header
            active="projects"
            activeLanguage={language}
            changeLanguage={changeLanguage}
          />
        </section>
        <Hero
          heroImage={projectData.heroImage}
          shortTitle={language === 'ES' ? projectData.shortTitleEsp : projectData.shortTitleEng}
          address={projectData.address}
          location={language === 'ES' ? projectData.locationEsp : projectData.locationEng}
          role={language === 'ES' ? projectData.roleEsp : projectData.roleEng}
          year={projectData.year}
          status={language === 'ES' ? projectData.statusEsp ? projectData.statusEsp : projectData.statusEng : null}
        />
        <Article
          firstColumn={firstHalfArray}
          secondColumn={secondHalfArray}
          associates={projectData.associates}
          collaborators={projectData.collaborators}
        />
        <Slider
          images={projectData.sliderImages}
          alt={projectData.address}
        />
        <Footer isProject={true} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getCollectionIds("projects");

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getCollectionById("projects", params.id);

  return {
    props: {
      projectData
    }
  }
}