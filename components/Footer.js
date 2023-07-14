const Footer = ({ classes }) => {
  return (
    <footer className={`flex flex-col lg:flex-row items-baseline justify-between pb-4 md:pb-8 ${classes ? classes : ''}`}>
      <p className="font-sans uppercase text-xs text-gray-900 tracking-widest">
        Copyright &copy; {new Date().getFullYear()} BAS.
      </p>
      <p className="font-sans uppercase text-xs text-gray-900 tracking-widest mt-1 md:mt-0">
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