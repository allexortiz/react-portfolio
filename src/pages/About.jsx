import profile from '../assets/profile.jpg';

// About component displaying information about the author
export default function About() {
  return (
    <div className="container">
      {/* Section for the main content */}
      <section className="row justify-content-center">
        {/* Column for the header */}
        <div className="col-md-10 col-lg-8">
          <h1 className="text-center">About Me</h1>
        </div>
      </section>
      
      {/* Section for the author's details */}
      <section className="row">
        {/* Column for the author's profile image */}
        <div className="col-md-4">
          <img src={profile} alt="a photo of me" className="img-fluid rounded" />
        </div>
        
        {/* Column for the author's bio */}
        <div className="col-md-8">
          <div className="p-4">
            {/* Heading for the author's bio */}
            <h3>A little bit about me:</h3>
            
            {/* Paragraphs containing the author's bio */}
            <p>
              Hi there! I'm Allex Ortiz, a devoted father, music enthusiast, football aficionado, and aspiring web developer on a journey of transition and growth.
            </p>

            <p>
              As a father, my greatest joy comes from spending quality time with my son. His laughter and curiosity remind me of the importance of cherishing every moment and nurturing the bond we share.
            </p>

            <p>
              Music is my muse, and I find solace and inspiration in its diverse melodies and rhythms. Whether it's lo-fi, post-hardcore, or classical, I'm always eager to explore new genres and discover hidden gems.
            </p>

            <p>
              On the football pitch, you'll often find me chasing after the ball with the same passion I bring to cheering for my favorite team, Everton Football Club. The camaraderie and adrenaline rush of the game fuel my competitive spirit and keep me active and energized.
            </p>

            <p>
              After over a decade in warehousing, I've decided to embark on a new chapter as a web developer. I'm excited about the endless possibilities of the digital world and am committed to honing my skills and mastering new technologies. Every line of code is a step forward in realizing my dream and making a meaningful impact in the tech community.
            </p>

            <p>
              I believe in the power of perseverance and continuous learning. With each challenge I face and every skill I acquire, I'm one step closer to achieving my goals and creating a brighter future for myself and those around me.
            </p>

            <p>
              Let's connect and embark on this journey of growth and exploration together!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};