import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import usePreventBodyScroll from "../hooks/usePreventBodyScroll";

import CustomHead from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { getAllCollections } from "../lib/collections";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export default function Homepage({ projectsData }) {
  const [language, setLanguage] = useState();

  const changeLanguage = (lang) => {
    setLanguage(lang);
    window.localStorage.setItem('language', lang);
  }

  const { disableScroll, enableScroll } = usePreventBodyScroll();
  
  const updateWindowHeight = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
  
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  
    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  useEffect(() => {
    updateWindowHeight();

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
        <article className="py-16 lg:py-8 2xl:pt-16">
          <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
            className="ml-auto fill-primary mb-8 ">
            <path
              d="M63.4867 61.8074L64 0C48.519 0.150494 17.6712 0.362806 2.1916 0.511958L2.06395 8.24889C15.9887 8.11183 34.4745 7.99896 50.7388 7.85117L0 58.5891L5.41099 64L56.1497 13.2621L55.709 61.8948L63.4891 61.8075L63.4867 61.8074Z" />
          </svg>
          <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
            <ScrollMenu
              onWheel={onWheel}
              transitionDuration={900}
              transitionBehavior={"smooth"}
            >
              {projectsData.map(project => 
                <div
                  className={`w-64 md:w-96 ${project.order === projectsData.length -1 ? '' : 'mr-8 md:mr-12'}`}
                  key={project.id}
                  itemID={project.id}
                >
                  <Link href={`/projects/${project.id}`} className="group">
                    <Image
                      src={project.thumbnail}
                      alt={language === 'ES' ? project.shortTitleEsp : project.shortTitleEng}
                      width={752}
                      height={940}
                      className="group-hover:opacity-90 transition ease-in-out duration-100"
                      priority
                    />
                    <h2
                      className="text-xl md:text-2xl mt-4 md:mt-6 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100"
                    >
                      {language === 'ES' ? project.shortTitleEsp : project.shortTitleEng}
                    </h2>
                  </Link>
                </div>
              )}
            </ScrollMenu>
          </div>
        </article>
        <Footer isProject={false} />
      </main>
    </>
  );
}

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollPrev();
  } else if (ev.deltaY > 0) {
    apiObj.scrollNext();
  }
}

export async function getStaticProps() {
  const projectsData = getAllCollections("projects");
  return {
    props: {
      projectsData,
    }
  };
};