import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { useState } from "react";

const Footer = () => {
  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [twitterHovered, setTwitterHovered] = useState(false);

  return (
    <footer>
      <div className="container d-flex justify-content-end">
        <p className="text-secondary-emphasis me-2">Find me on my socials</p>
        <a href="https://github.com/allexortiz" className="mx-2" target="_blank" rel="noopener noreferrer"
          onMouseEnter={() => setGithubHovered(true)} onMouseLeave={() => setGithubHovered(false)}>
          <BsGithub size={githubHovered ? 40 : 30} />
        </a>
        <a href="https://www.linkedin.com/in/allex-ortiz-457aa382/" className="mx-2" target="_blank" rel="noopener noreferrer"
          onMouseEnter={() => setLinkedinHovered(true)} onMouseLeave={() => setLinkedinHovered(false)}>
          <BsLinkedin size={linkedinHovered ? 40 : 30} />
        </a>
        <a href="https://twitter.com/tito41191" className="mx-2" target="_blank" rel="noopener noreferrer"
          onMouseEnter={() => setTwitterHovered(true)} onMouseLeave={() => setTwitterHovered(false)}>
          <BsTwitterX size={twitterHovered ? 40 : 30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;