import React from "react";
import "./why-procredita.css";
import { whyProcredita, ourTech } from "./homeData";
import img from "../images-&-icons/why-procredita-logo.svg";

function WhyProcredita() {
  return (
    <div className="Why-Procredita">
      <div className="Why-Procredita_title">
        <img src={img} alt="why procredita image" />
      </div>

      <div className="Why-Procredita_bdy">
        <div>{whyProcredita}</div>
        <div className="img"></div>
      </div>
      
      <div className="our-technology">
        <div className="our-technology__cards">
          {ourTech.map((el, i) => (
            <div key={i} className="our-technology__card">
              <img src={el.img} />
              <div className="our-technology__card_bdy">{el.body}</div>
            </div>
          ))}
        </div>
        <div className="our-technology_btn">Hire Us</div>
      </div>
    </div>
  );
}

export default WhyProcredita;
