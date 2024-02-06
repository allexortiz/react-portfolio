import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="container d-flex justify-content-end">
        <a href="https://github.com/allexortiz" className="mx-2" target="_blank" rel="noopener noreferrer">
          <BsGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/allex-ortiz-457aa382/" className="mx-2" target="_blank" rel="noopener noreferrer">
          <BsLinkedin size={30} />
        </a>
        <a href="https://twitter.com/tito41191" className="mx-2" target="_blank" rel="noopener noreferrer">
          <BsTwitterX size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;