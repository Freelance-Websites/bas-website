import Link from "next/link";

const Header = ({ active, activeLanguage, changeLanguage }) => {
  return (
    <header className="flex items-baseline justify-between">
      <Link href="/" className="transition ease-in-out duration-100 hover:opacity-70">
        <svg fill="none" height="22" viewBox="0 0 55 22" width="55" xmlns="http://www.w3.org/2000/svg" className="fill-gray-900"><g><path d="m15.492 6.02001c0 2.464-1.456 3.584-3.108 4.14399v.056c2.1.364 3.892 1.96 3.892 4.956 0 3.696-2.632 5.824-6.77602 5.824h-8.624003v-20.019988h8.064003c4.08802 0 6.55202 1.931998 6.55202 5.039998zm-12.09602 3.332h5.936c2.85602 0 3.64002-1.232 3.64002-3.052s-1.064-3.08-3.36002-3.08h-6.216zm0 2.23999v7.168h6.356c3.22002 0 4.00402-1.708 4.00402-3.584 0-2.156-1.344-3.584-3.444-3.584z"/><path d="m31.8875 15.988h-8.82l-1.764 5.012h-2.604l7.392-20.019988h2.8l7.364 20.019988h-2.604zm-7.98-2.24h7.168l-3.556-10.44399h-.056z"/><path d="m46.747 9.32401c4.508 1.11999 7.448 1.87599 7.448 6.43999 0 2.912-2.156 5.628-7.224 5.628-4.732 0-8.4-2.52-8.68-7.112h2.52c.28 2.744 1.96 4.872 6.16 4.872 3.472 0 4.704-1.596 4.704-3.388 0-2.744-1.484-3.248-5.964-4.284-2.996-.7-6.58-1.73599-6.58-5.62799 0-3.164 2.436-5.263997 6.86-5.263997 4.256 0 7.224 2.183997 7.56 6.327997h-2.52c-.364-2.688-1.876-4.088-5.04-4.088-2.828 0-4.34 1.092-4.34 2.744 0 2.66 2.156 3.024 5.096 3.752z"/></g></svg>
      </Link>
      <ul className="flex items-baseline">
        <li className="pr-2 md:pr-4">
          <Link href="/" className={`${active === 'projects' ? 'underline' : ''} hover:underline underline-offset-4 font-sans uppercase text-xs text-gray-900 tracking-widest`}>
            {activeLanguage === 'ES' ? 'Proyectos' : 'Projects'}
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`${active === 'contact' ? 'underline' : ''} hover:underline underline-offset-4 font-sans uppercase text-xs text-gray-900 tracking-widest`} data-text-en="Contact" data-text-es="Contacto">
            {activeLanguage === 'ES' ? 'Contacto' : 'Contact'}
          </Link>
        </li>
        {/* <li>
          <button onClick={() => changeLanguage(activeLanguage === 'EN' ? 'ES' : 'EN')} data-language={activeLanguage} className="hover:underline underline-offset-4 font-sans uppercase text-xs text-gray-900 tracking-widest">
            {activeLanguage === 'ES' ? 'EN' : 'ES'}
          </button>
        </li> */}
      </ul>
    </header>
  );
};

export default Header;