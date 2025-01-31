import React, { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Contact from './components/Contact.jsx';
import Image from './components/Image.jsx';
import './App.css';


// Header Section Component
const Header = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="header" className={`header ${scrollingDown ? 'hide-nav' : ''}`}>
      <div className="hero">
        <img src="logono.png" alt="logo" />
        <h1 className="teko-custom">Our Team Portfolio!</h1>
        <button onClick={scrollToHome}>Click Here to Get to Know Us!</button>
      </div>
    </header>
  );
};

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("who");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="home-section relative flex flex-wrap items-center justify-between">
      <div className="home-content relative z-10 text-left w-full md:w-1/2 p-10">
        <h2>Welcome to Our Team Portfolio!</h2>
        <p>
          Welcome to our team portfolio! We are a group of five
          enthusiastic IT students currently in our third year of
          college, eager to learn and grow in the field of information
          technology. While we are still at the beginning of our
          journey, we are excited to offer our services and collaborate
          on projects that challenge us and help us develop our skills.
          <br />
          Explore our portfolio to see some of the projects we've
          worked on and our individual strengths. We appreciate your
          interest and look forward to the possibility of working
          together!
        </p>
        <button onClick={scrollToAbout}>About Us</button>
      </div>

      <div className="team-image w-full md:w-1/2 flex justify-center">
        <img src="team.jpg" alt="Our Team" className="w-3/4 h-auto rounded-lg shadow-lg" />
      </div>

      <div className="overlay absolute inset-0 bg-black bg-opacity-30"></div>
    </section>
  );
};

// Who Section Component
const Who = () => {
  const scrollToTeam = () => {
    const teamSection = document.getElementById("team");
    if (teamSection) {
      teamSection.scrollIntoView ({behavior: "smooth"})
    }
  }

  return(
    <section id="who" className="who-section">
    <h1>Who We Are</h1>
    <p>We are a motivated team of aspiring IT professionals with a shared goal to learn, collaborate, and provide valuable services. Our
    diverse skill sets cover various areas within IT, allowing us to take on different projects, big or small.</p>
    <hr/>
    <h1>Our Skills Areas</h1>
    <ul>
      <li><b>Web Development:</b>  Basic to intermediate experience in HTML, CSS, JavaScript, and frameworks.</li>
      <li><b>Software Development:</b>  Familiarity with languages like Python and Java; eager to take on tasks.</li>
      <li><b>Data Handling:</b>  Basic knowledge of databases and data analysis with tools like Excel and SQL.</li>
      <li><b>Technical Support:</b>  Willingness to assist with troubleshooting and support tasks.</li>
      <li><b>Graphic Design:</b>  Experience in creating graphics, logos, and branding materials to enhance visual identity.</li>
    </ul>
      <hr />
    <h1>Services We Offer:</h1>
    <ul>
      <li><b>Website Design and Development:</b> Helping small businesses or projects establish an online presence.</li>
      <li><b>Basic Software Solutions:</b> Assisting with simple application development or modifications.</li>
      <li><b>IT Support Services:</b> Providing guidance and troubleshooting assistance for basic IT issues</li>
      <li><b>Graphic Design Services:</b> Creating logos, brochures, and promotional materials tailored to your needs</li>
    </ul>
    <br/>
    <button onClick={scrollToTeam}>Meet the Team</button>
  </section>

  )
}

// Team Section Component
const Team = () => {
  const scrollToSome = () => {
    const someSection = document.getElementById("works");
    if (someSection) {
      someSection.scrollIntoView ({behavior: "smooth"})
    }
  }
  const teamItems = [
    {
      id:"A",
      src: "rvin.jpg",
      alt: "John Arvin P. Sambile",
      description: "John Arvin P. Sambile",
      details: "22 years old 3rd Year Collage “An aspiring software developer fascinated by problem-solving and coding challenges.”",
    },
    {
      id: "B",
      src: "bench.jpg",
      alt: "Bench B. Sandagan",
      description: "Bench B. Sandagan",
      details: "22 years old 3rd Year Collage “An aspiring web developer striving to craft engaging user experiences.”",
    },
    {
      id: "C",
      src: "bert.jpg",
      alt: "Roberto D. Colasito Jr.",
      description: "Roberto D. Colasito Jr.",
      details: "25 years old 3rd Year Collage “A tech enthusiast with a growing interest in data analysis and management.”",
    },
    {
      id: "D",
      src: "allyra.jpg",
      alt: "Allyra Rheal F. Lonto",
      description: "Allyra Rheal F. Lonto",
      details: "21 years old 3rd Year Collage “A graphic designer specializing in branding and creating vibrant, user-friendly websites.”",
    },
    {
      id: "E",
      src: "edz.jpg",
      alt: "Edilyn A. Sagorio",
      description: "Edilyn A. Sagorio",
      details: "26 years old 3rd Year Collage “A digital artist with interests in multimedia design,to craft engaging content..”",
    },
  ];

  const [visibleDetails, setVisibleDetails] = useState({});
  const toggleDetails = (index) => {
    setVisibleDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="team" className="team-section">
      <h2>MEET OUR TEAM </h2>
      <p>We are a team of five eager IT students, embarking on our learning journey together. As third-year college students, we are guided by our
      curiosity and desire to grow in the technology sector. Here’s a bit about each of us:
      </p>
      <div className="team">
        {teamItems.map((item, index) => (
          <div className={`team-item team-${item.id}`} key={index}>
            <img src={item.src} alt={item.alt} />
              <p className="team-description">{item.description}</p>
              <button className={`details-button button-${item.id}`} onClick={() => toggleDetails(index)}>
                {visibleDetails[index] ? "Hide Details" : "Show Details"}
              </button>
                {visibleDetails[index] && (
                  <p className="details-paragraph">{item.details}</p>
    )}
</div>
  ))}
      </div>
      <div className='team-button'>
      <button onClick={scrollToSome} >See Our Works</button>
      </div>
    </section>
  );
};

// Some Section Component
const Some = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slides");
    
    const showSlides = () => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000);
    };
    
    showSlides();
  }, []);

  return (
    <section id="works" className="some-section">
      <h2>SOME OF OUR WORKS</h2>
      <div className="some-content">
        <form className="some-form">
          <div className="slideshow-container">
            <div className="slides fade">
              <img src="1.jpg" alt="Project 1" />
            </div>
            <div className="slides fade">
              <img src="2.jpg" alt="Project 2" />
            </div>
            <div className="slides fade">
              <img src="3.jpg" alt="Project 3" />
            </div>
            <div className="slides fade">
              <img src="4.jpg" alt="Project 4" />
            </div>
            <div className="slides fade">
              <img src="5.jpg" alt="Project 5" />
            </div>
            <div className="slides fade">
              <img src="6.jpg" alt="Project 6" />
            </div>
            <div className="slides fade">
              <img src="7.jpg" alt="Project 7" />
            </div>
          </div>
        </form>
        <p className="some-text">
          <div className='title-text'><h1>Our Mission And Vision</h1></div>
          Our mission is to grow and learn as we embark on this journey in technology. We hope to take on projects that allow us to apply our skills while gaining valuable experience. We believe that collaboration and continuous learning are essential to our development.
          <br /> <br />We are open to providing beginner-level services and look forward to the opportunity to learn alongside our clients and partners.
        </p>
      </div>
      <button onClick={scrollToContact}>Contact Us Now</button>
    </section>
  );
};



// Main App Component
function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Home />
      <Who/>
      <Team />
      <Some />
      <Contact/>
    </div>
  );
}

export default App;
