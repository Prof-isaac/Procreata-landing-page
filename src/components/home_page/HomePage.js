import React from "react";
import Fade from "react-reveal/Fade";
import { whatWeDoBody, regionalFranchise, ourClients } from "./homeData";
import "./home-style.css";
import WhyProcredita from "./WhyProcredita";
import HireUs from "./HireUs";

function HomePage() {
  return (
    <div className="homepage">

      <div className="services">
        <div className="what-we-do">
          <div className="what-we-do__title">
            We provide a comprehensive debt collection service
          </div>

          <div className="what-we-do__body">{whatWeDoBody}</div>

          <div className="what-we-do__btns">
            <a href="#EFj"></a>
            {/* <HireUs/> */}
            <div className="what-we-do-btn__two">
              <span></span>
              <a href="#gdhd">Watch the Video</a>
            </div>
          </div>
        </div>

        <div className="service__img-box">
        
        </div>
      </div>

      <WhyProcredita />

      <div className="regional-franchise">
        <div className="regional-franchise__title">
          <span></span>
          <span>Own a Procredita Regional Franchise</span>
        </div>

        <div className="regional-franchise__bdy">
          <div className="regional-franchise-bdy_img"></div>

          <div className="regional-franchise-bdy_txt">
            <div>{regionalFranchise}</div>
            <div>Become a Debt Collection Manager</div>
            <div className="signup-btn">Sign Up</div>
          </div>
        </div>
      </div>

      <div className="our-partners">
        <div className="our-partners_title">
          We are partnered with several major financial institutions and
          businesses in Nigeria. <span>Procredita </span> is your
          trusour-partnersted partner in efficient debt recovery. We get the job
          done.
        </div>
        <p>Why not try us today?</p>
        <div className="our-partners_hire-us">
          <a>Hire Us</a>
        </div>
      </div>

      <div className="our-clients">
        <div className="our-clients_title">Hear from some of our clients</div>
        <Fade bottom>
          <div className="cleints">
            {ourClients.map((cleint, index) => (
              <div key={index} className="cleint">
                <div>{cleint.testimony}</div>
                <div className="cleint_img-cont">
                  <img src={cleint.img} />
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}
export default HomePage;
