import React from "react";
import "./Footer.css";

export default function Foooter() {
  return (
    <div className="Footer">
      <footer>
        Coded by{" "}
        <a
          href="https://yasserkabulimbo.netlify.app"
    
        >
          Yasser Kabulimbo {"  "}
        </a>
        . Hosted{" "}
        <a
          href="https://github.com/YasserLearnsCode/weatherApp-react"
        >
          on Github
        </a>{" "}
        & open sourced on Netlify
      </footer>
    </div>
  );
}
