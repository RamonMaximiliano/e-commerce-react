import githubreverse from "../../images/github-new.png";
import github from "../../images/github.png";
import linkedinreverse from "../../images/linkedin-white-new.png";
import linkedin from "../../images/linkedin-black-new.png";
import whatsreverse from "../../images/whatsappwhite-new.png";
import aiImage from "../../images/aiImage.jpg";
import whats from "../../images/whatsappblack-new.png";
import portfolioimage from "../../images/rocket.png"
import portfolioreverse from "../../images/rocketblack.png"
import mail from "../../images/mail.png"
import mailblack from "../../images/mailblack.png"
import resume from "../../images/cv.png"
import resumeblack from "../../images/cvblack.png"
import "./styles.css";
import { useState, useEffect } from "react";

export const Contact = () => {
  const [gitHub, setGitHub] = useState(false);
  const [linkedins, setLinkedin] = useState(false);
  const [whatss, setWhats] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [resumestate, setResume] = useState(false);
  const [mailstate, setMail] = useState(false);

  let setIsHovered = () => {
    setGitHub(true);
  };

  let setIsNotHovered = () => {
    setGitHub(false);
  };

  let setIsHoveredLink = () => {
    setLinkedin(true);
  };

  let setIsNotHoveredLink = () => {
    setLinkedin(false);
  };

  let setIsHoveredW = () => {
    setWhats(true);
  };

  let setIsNotHoveredW = () => {
    setWhats(false);
  };
  let setIsHoveredportfolio = () => {
    setPortfolio(true);
  };
  let setIsNotHoveredportfolio = () => {
    setPortfolio(false);
  };
  let setIsHoveredMail = () => {
    setMail(true);
  };
  let setIsNotHoveredMail = () => {
    setMail(false);
  };
  let setIsHoveredResume = () => {
    setResume(true);
  };
  let setIsNotHoveredResume = () => {
    setResume(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-contact-div">
      <div className="contact-div">
        <div>
          <h3 className="hello-world">Hello world!</h3>
          Just a guy coding
          <div className="education-section">
            <p>Education:</p>
            <ul className="education">
              <li>
                Bachelor's degree in Systems Analysis and Development -
                Uniasselvi
              </li>
              <li>MBA in Data Science - PUC-RS</li>
              <li>MBA in Project Management - Unisinos</li>
            </ul>
          </div>
        </div>
        <div>
          <img src={aiImage} className="profile-image" title="This image was created with AI"/>
        </div>
      </div>

<div className="main-icon-grid">
      <div className="icon-list">
        <a
          href="https://github.com/RamonMaximiliano"
          target="_blank"
          className="contact-icon"
          onMouseEnter={setIsHovered}
          onMouseLeave={setIsNotHovered}
          title="Check my GitHub"
        >
          <img src={gitHub ? githubreverse : github} />
        </a>
        <a
          href="https://www.linkedin.com/in/ramon-m-b75a9676"
          target="_blank"
          className="contact-icon"
          onMouseEnter={setIsHoveredLink}
          onMouseLeave={setIsNotHoveredLink}
          title="Check my Linkedin"
        >
          <img src={linkedins ? linkedinreverse : linkedin} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5551996927970"
          target="_blank"
          className="contact-icon"
          onMouseEnter={setIsHoveredW}
          onMouseLeave={setIsNotHoveredW}
          title="Talk to me"
        >
          <img src={whatss ? whatsreverse : whats} />
        </a>
        </div>
        <div className="icon-list">
        <a
          href="https://ramonmaximiliano.github.io/Portfolio2023/"
          target="_blank"
          className="contact-icon"
          onMouseEnter={setIsHoveredportfolio}
          onMouseLeave={setIsNotHoveredportfolio}
          title="Check my Portfolio"
        >
          <img src={portfolio ? portfolioimage : portfolioreverse} />
        </a>
        <a
          href="mailto:ramon_max1986@hotmail.com"
          target="_blank"
          className="contact-icon"
          onMouseEnter={setIsHoveredMail}
          onMouseLeave={setIsNotHoveredMail}
          title="Send me an e-mail"
        >
          <img src={mailstate ? mail : mailblack} />
        </a>
        <a
          href={process.env.PUBLIC_URL + '/EnglishCV.pdf'}
          target="_blank"
          className="contact-icon"
          onMouseEnter={setIsHoveredResume}
          onMouseLeave={setIsNotHoveredResume}
          title="Check my Resume"
        >
          <img src={resumestate ? resume : resumeblack} />
        </a>
        
        </div>
      </div>
    </div>
  );
};
