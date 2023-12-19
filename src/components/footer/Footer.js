import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./Footer.scss";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Mher Manukyan")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by <a href="https://github.com/MherManukyan">Mher Manukyan</a>
        </p>
      </div>
    </Fade>
  );
}
