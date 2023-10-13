import githubreverse from "../../images/github-reverse.png";
import github from "../../images/github.png";
import linkedinreverse from "../../images/linkedin-reverse.png";
import linkedin from "../../images/linkedin.png";
import whatsreverse from "../../images/whatsapp-reverse.png";
import whats from "../../images/whatsapp.png";
import "./styles.css"

import { useState } from "react";

export const Footer = () => {
  const [githubIMG, setGithub] = useState(false);
  const githubMouseOver = () => {
    setGithub(true);
  };
  const githubMouseOut = () => {
    setGithub(false);
  };

  const [linkedinIMG, setlinkedinIMG] = useState(false);
  const linkedinMouseOver = () => {
    setlinkedinIMG(true);
  };
  const linkedinMouseOut = () => {
    setlinkedinIMG(false);
  };

  const [whatsIMG, setwhatsIMG] = useState(false);
  const whatsIMGMouseOver = () => {
    setwhatsIMG(true);
  };
  const whatsIMGMouseOut = () => {
    setwhatsIMG(false);
  };
  return (
    <div className="main-footer">
        <div className="images">
      <img
        src={githubIMG ? github : githubreverse}
        className="cartImg"
        onMouseOver={githubMouseOver}
        onMouseOut={githubMouseOut}
      />
      <img
        src={linkedinIMG ? linkedin : linkedinreverse}
        className="cartImg"
        onMouseOver={linkedinMouseOver}
        onMouseOut={linkedinMouseOut}
      />

      <img
        src={whatsIMG ? whats : whatsreverse}
        className="cartImg"
        onMouseOver={whatsIMGMouseOver}
        onMouseOut={whatsIMGMouseOut}
      />
      </div>
    </div>
  );
};
