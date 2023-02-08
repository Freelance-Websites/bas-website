import Image from 'next/image';

const Hero = ({ 
  shortTitle,
  longTitle,
  location,
  role,
  status,
  year,
  heroImage
 }) => {
  return (
    <section className="pt-4 w-full">
      <div className="relative aspect-video xl:h-[580px] w-full">
        <Image
          src={heroImage}
          alt={shortTitle}
          fill="true"
          className="group-hover:opacity-90 transition ease-in-out duration-100 object-cover"
          priority
        />
      </div>
      <ul className="container mx-auto flex flex-col md:flex-row justify-between items-baseline px-4 pt-4 md:pt-12">
        <li>
          <h1 className="font-sans text-primary text-2xl md:text-3xl mb-2">{longTitle}</h1>
          <p className="font-sans text-primary text-lg leading-tight">{location}</p>
          <p className="font-sans text-primary text-lg leading-tight">{role}</p>
          {status ?
            <p className="font-sans text-primary text-lg leading-tight">{status}</p>
          : ''}
        </li>
        <li className="order-first md:order-none">
          <span className="text-primary font-sans text-sm">{year}</span>
        </li>
      </ul>
    </section>
  );
};

export default Hero;