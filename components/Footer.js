const Footer = ({ isProject }) => {
  return (
    <footer className={`flex flex-col lg:flex-row items-baseline justify-between ${isProject === true ? 'px-4' : 'md:absolute md:w-full md:bottom-0 xl:bottom-4'}`}>
      <p className="font-sans uppercase text-xs text-gray-900 tracking-widest">
        Copyright &copy; {new Date().getFullYear()} BA AA.
      </p>
      <p className={`font-sans uppercase text-xs text-gray-900 tracking-widest mt-1 md:mt-0 ${isProject === true ? '' : 'md:absolute md:right-8'}`}>
        Website by {" "}
        <a
          href="https://www.juanmartingarcia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4"
        >
          JMG
        </a>
      </p>
    </footer>
  );
};

export default Footer;