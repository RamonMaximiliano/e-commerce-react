import githubreverse from "../../images/github-reverse.png";
import github from "../../images/github.png";
import linkedinreverse from "../../images/linkedin-reverse.png";
import linkedin from "../../images/linkedin.png";
import whatsreverse from "../../images/whatsapp-reverse.png";
import aiImage from "../../images/aiImage.jpg";
import whats from "../../images/whatsapp.png";
import "./styles.css";
import { useState } from "react";

export const Contact = () => {
  const [gitHub, setGitHub] = useState(false);
  const [linkedins, setLinkedin] = useState(false);
  const [whatss, setWhats] = useState(false);

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

  return (
    <div className="main-contact-div">
      <div className="contact-div">
        <div>
          <h3>Hello world!</h3>
          Just a guy coding
        </div>
        <div>
          <img src={aiImage} className="profile-image" />
        </div>
      </div>

      <div className="icon-list">
        <a
          href="https://github.com/RamonMaximiliano"
          target="_blank"
          className="contact-icon"
          onMouseEnter={setIsHovered}
          onMouseLeave={setIsNotHovered}
        >
          <img src={gitHub ? githubreverse : github} />
        </a>
        <a
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="_blank"
          className="contact-icon"
          onMouseEnter={setIsHoveredLink}
          onMouseLeave={setIsNotHoveredLink}
        >
          <img src={linkedins ? linkedinreverse : linkedin} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5551996927970"
          target="_blank"
          className="contact-icon"
          onMouseEnter={setIsHoveredW}
          onMouseLeave={setIsNotHoveredW}
        >
          <img src={whatss ? whatsreverse : whats} />
        </a>
      </div>
    </div>
  );
};
