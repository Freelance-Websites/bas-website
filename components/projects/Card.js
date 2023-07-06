import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const Card = ({project, activeLanguage}) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group"
    >
      <Image
        src={project.thumbnail}
        alt={activeLanguage === 'ES' ? project.shortTitleEsp : project.shortTitleEng}
        width={470}
        height={350}
        className="group-hover:opacity-90 transition ease-in-out duration-100"
        priority
      />
      <h2
        className="text-md mt-2 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100"
      >
        {activeLanguage === 'ES' ? project.shortTitleEsp : project.shortTitleEng}
      </h2>
    </Link>
  )
}

export default Card;