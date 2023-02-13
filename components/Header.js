import Link from "next/link";

const Header = ({ active, activeLanguage, changeLanguage }) => {
  return (
    <header className="flex items-baseline justify-between">
      <Link href="/" className="transition ease-in-out duration-100 hover:opacity-70">
        <svg width="83" height="21" viewBox="0 0 83 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-gray-900">
          <path d="M15.492 6.02C15.492 2.912 13.028 0.979999 8.94 0.979999H0.876V21H9.5C13.644 21 16.276 18.872 16.276 15.176C16.276 12.18 14.484 10.584 12.384 10.22V10.164C14.036 9.604 15.492 8.484 15.492 6.02ZM3.396 9.352V3.22H9.612C11.908 3.22 12.972 4.48 12.972 6.3C12.972 8.12 12.188 9.352 9.332 9.352H3.396ZM3.396 11.592H10.312C12.412 11.592 13.756 13.02 13.756 15.176C13.756 17.052 12.972 18.76 9.752 18.76H3.396V11.592ZM31.8875 15.988L33.6515 21H36.2555L28.8915 0.979999H26.0915L18.6995 21H21.3035L23.0675 15.988H31.8875ZM23.9075 13.748L27.4635 3.304H27.5195L31.0755 13.748H23.9075ZM58.4219 15.988L60.1859 21H62.7899L55.4259 0.979999H52.6259L45.2339 21H47.8379L49.6019 15.988H58.4219ZM50.4419 13.748L53.9979 3.304H54.0539L57.6099 13.748H50.4419ZM77.9508 15.988L79.7148 21H82.3188L74.9548 0.979999H72.1548L64.7628 21H67.3668L69.1308 15.988H77.9508ZM69.9708 13.748L73.5268 3.304H73.5828L77.1388 13.748H69.9708Z" />
        </svg>
      </Link>
      <ul className="flex items-baseline">
        <li className="pr-2 md:pr-4">
          <Link href="/projects" className={`${active === 'projects' ? 'underline' : ''} hover:underline underline-offset-4 font-sans uppercase text-xs text-gray-900 tracking-widest`}>
            {activeLanguage === 'ES' ? 'Proyectos' : 'Projects'}
          </Link>
        </li>
        <li className="pr-2 md:pr-4">
          <Link href="/contact" className={`${active === 'contact' ? 'underline' : ''} hover:underline underline-offset-4 font-sans uppercase text-xs text-gray-900 tracking-widest`} data-text-en="Contact" data-text-es="Contacto">
            {activeLanguage === 'ES' ? 'Contacto' : 'Contact'}
          </Link>
        </li>
        <li>
          <button onClick={() => changeLanguage(activeLanguage === 'EN' ? 'ES' : 'EN')} data-language={activeLanguage} className="hover:underline underline-offset-4 font-sans uppercase text-xs text-gray-900 tracking-widest">
            {activeLanguage === 'ES' ? 'EN' : 'ES'}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;