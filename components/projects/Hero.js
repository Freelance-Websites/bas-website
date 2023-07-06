const Hero = ({ 
  address,
  location,
  role,
  status,
  year,
 }) => {
  return (
    <section className="pt-4 w-full">
      <ul className="container mx-auto flex flex-col md:flex-row justify-between items-baseline">
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