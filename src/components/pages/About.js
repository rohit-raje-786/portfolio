import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title } from '../../profile'

const About = () => {
    return (
        <div id="about" className="effect2">
            
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
               
            <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo" id="not"></div>
            <div className="col-12 offset-md-1 col-md-6 about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">{section2title}</h1>
                </div>
                <p className="lead about-text">
                    {about.paragraph}  
                </p>
            </div>
            </div>
            <hr/>
            <div className="d-flex justify-content-evenly">
                <div className="profiles">
                    <a href={about.codechef}><button  >Codechef Profile<i className="fas fa-eye"></i></button></a>
                </div>
                <div className="profiles">
                    <a href={about.hackerRank}><button >HackerRank Profile<i className="fas fa-eye"></i></button></a>
                 </div>   
                 <div className="profiles">
                    <a href={about.leetcode}><button >Leetcode Profile<i className="fas fa-eye"></i></button></a>
                 </div>    
               
                


            </div>
            
            <div id="Skills"> 
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) => 
                        <Skills faClass={x.faClass} label={x.name}/>
                    )}
                </div> 
            </div>
        </div>
    )
}

export default About
