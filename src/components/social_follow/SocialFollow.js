import React from "react";

/* ---------REACT ICONS----------- */
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
} from "react-icons/ri";

import { AiFillTwitterSquare } from "react-icons/ai";

import { IconContext } from "react-icons";

const SocialFollow = () => {
  const style = {
    borderRadius: "8px",
    color: "#0091FF",
    size: "2rem",
  };

  return (
    <div className="socail-icons">
      <IconContext.Provider value={style}>
        <RiInstagramFill />
        <RiFacebookBoxFill />
        <RiLinkedinBoxFill />
        <AiFillTwitterSquare />
      </IconContext.Provider>
    </div>
  );
};

export default SocialFollow;
