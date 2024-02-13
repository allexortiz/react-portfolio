import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { useState } from "react";

// Footer component displaying social media links with hover effects
const Footer = () => {
  // State variables to track hover state for each social media icon
  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [twitterHovered, setTwitterHovered] = useState(false);

  return (
    <footer>
      {/* Container for social media links */}
      <div className="container d-flex justify-content-end">
        {/* Text indicating the purpose of the social media links */}
        <p className="text-secondary-emphasis me-2">Find me on my socials</p>
        
        {/* GitHub social media link */}
        <a href="https://github.com/allexortiz" className="mx-2" target="_blank" rel="noopener noreferrer"
          // Event handlers to toggle hover state
          onMouseEnter={() => setGithubHovered(true)} onMouseLeave={() => setGithubHovered(false)}>
          {/* GitHub icon with conditional size based on hover state */}
          <BsGithub size={githubHovered ? 40 : 30} />
        </a>
        
        {/* LinkedIn social media link */}
        <a href="https://www.linkedin.com/in/allex-ortiz-457aa382/" className="mx-2" target="_blank" rel="noopener noreferrer"
          // Event handlers to toggle hover state
          onMouseEnter={() => setLinkedinHovered(true)} onMouseLeave={() => setLinkedinHovered(false)}>
          {/* LinkedIn icon with conditional size based on hover state */}
          <BsLinkedin size={linkedinHovered ? 40 : 30} />
        </a>
        
        {/* Twitter social media link */}
        <a href="https://twitter.com/tito41191" className="mx-2" target="_blank" rel="noopener noreferrer"
          // Event handlers to toggle hover state
          onMouseEnter={() => setTwitterHovered(true)} onMouseLeave={() => setTwitterHovered(false)}>
          {/* Twitter icon with conditional size based on hover state */}
          <BsTwitterX size={twitterHovered ? 40 : 30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;