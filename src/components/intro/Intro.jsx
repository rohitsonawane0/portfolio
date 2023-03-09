import "./intro.scss";
import { init } from "ityped";

import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    if (!window.ityped) {
      // Initialize ityped library if it's not already loaded
      init(textRef.current, {
        showCursor: true,
        disableBackTyping: false,
        backSpeed: 100,
        typeSpeed: 200,
        strings: ["Backend Developer", "Nodejs Expert"],
      });
    }
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there I'm</h2>
          <h1>Rohit Sonawane</h1>
          <h3>
            Web Developer <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
