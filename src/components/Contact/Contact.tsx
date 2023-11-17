import githubreverse from "../../images/github-reverse.png";
import github from "../../images/github.png";
import linkedinreverse from "../../images/linkedin-reverse.png";
import linkedin from "../../images/linkedin.png";
import whatsreverse from "../../images/whatsapp-reverse.png";
import aiImage from "../../images/aiImage.jpg";
import whats from "../../images/whatsapp.png";
import "./styles.css";

export const Contact = () => {
  return (
    <div className="main-contact-div">
      <div>
        <img src={aiImage} className="profile-image" />
      </div>

      <div className="contact-div">
        <div>
          Contact page https://ramonmaximiliano.github.io/Portfolio2023/
          trk=d_flagship3_profile_self_view_public_profile Hello world! Just a
          guy learning web dev
        </div>
        <div className="icon-list">
          <a href="https://github.com/RamonMaximiliano" target="_blank">
            <img src={githubreverse} />
          </a>
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
          >
            <img src={linkedin} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5551996927970"
            target="_blank"
          >
            <img src={whats} />
          </a>
        </div>
      </div>
    </div>
  );
};
