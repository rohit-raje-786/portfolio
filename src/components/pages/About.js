import React from "react";
import Skills from "../layouts/Skills";
import { about, skillsBar, section2title } from "../../profile";

const About = () => {
  return (
    <div id="about" className="effect2">
      <div data-aos="zoom-in-up" data-aos-once="true" className="row">
        {/* <div
          className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo"
          id="not"
        ></div> */}
        <div className="col-md-12 offset-md-1  about">
          <div className="About-title-box">
            <h1 id="About" className="red-line">
              {section2title}
            </h1>
          </div>
          <p className="lead about-text w-100">{about.paragraph}</p>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center flex-sm-row flex-column">
        <div className="profiles">
          <a href={about.codechef}>
            <button>
              Codechef <i className="fas fa-eye"></i>
            </button>
          </a>
        </div>
        <div className="profiles">
          <a href={about.hackerRank}>
            <button>
              HackerRank <i className="fas fa-eye "></i>
            </button>
          </a>
        </div>
        <div className="profiles">
          <a href={about.leetcode}>
            <button>
              Leetcode <i className="fas fa-eye "></i>
            </button>
          </a>
        </div>
        <div className="profiles">
          <a href={about.GFG}>
            <button>
              GFG <i className="fas fa-eye "></i>
            </button>
          </a>
        </div>
        <div className="profiles">
          <a href={about.codeforces}>
            <button>
              Codeforces <i className="fas fa-eye "></i>
            </button>
          </a>
        </div>
      </div>

      <div id="Skills">
        <div className="row d-flex justify-content-center skills">
          {skillsBar.map((x) => (
            <Skills faClass={x.faClass} label={x.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
