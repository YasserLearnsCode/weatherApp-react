import React from "react";
import "./Footer.css";

export default function Foooter() {
  return (
    <div className="Footer">
      <footer>
        Coded by{" "}
        <a
          href="https://yasserkabulimbo.netlify.app"
          target="_blank"
          rel="noopener"
        >
          Yasser Kabulimbo {"  "}
        </a>
        . Hosted{" "}
        <a
          href="https://github.com/YasserLearnsCode/weatherApp-react"
          target="_blank"
          rel="noopener"
        >
          on Github
        </a>{" "}
        & open sourced on
        <a href="" target="_blank" rel="noopener">
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}
