import Image from 'next/image';

const Hero = ({ 
  shortTitle,
  address,
  location,
  role,
  status,
  year,
  heroImage
 }) => {
  return (
    <section className="pt-4 md:pt-8 lg:pt-16 xl:pt-32 px-4 w-full">
      <Image
        src={heroImage}
        alt={shortTitle}
        className="group-hover:opacity-90 transition ease-in-out duration-100 object-cover"
        priority
        width={376}
        height={280}
      />
      <ul className="container mx-auto flex flex-col md:flex-row justify-between items-baseline pt-4 md:pt-8 lg:pt-12">
        <li>
          <h1 className="font-sans text-gray-900 text-xs text-gray-900 tracking-widest uppercase mb-2">{address}</h1>
          <p className="font-sans text-gray-900 text-md leading-tight">{location}</p>
          <p className="font-sans text-gray-900 text-md leading-tight">{role}</p>
          {status ?
            <p className="font-sans text-gray-900 text-md leading-tight">{status}</p>
          : ''}
        </li>
        <li className="order-first md:order-none">
          <span className="text-gray-900 font-sans text-xs">{year}</span>
        </li>
      </ul>
    </section>
  );
};

export default Hero;