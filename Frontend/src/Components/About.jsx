import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () =>{
    return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is Food.</p>
                </div>
                <p className="mid">Savor vibrant flavors, warm hospitality, and a cozy ambiance at our restaurant.
                    Enjoy farm-fresh ingredients, handcrafted dishes, and attentive service.
                    Gather with friends, celebrate milestones, or unwind over signature desserts and drinks.
                    Reserve a table today and let our kitchen delight every craving memorable dining begins the moment the doors open.
                </p>
                <Link to={'/'}>Explore Menu 
                <span>
                <HiOutlineArrowNarrowRight/>
                </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about"></img>
            </div>
        </div>
    </section> 
    );
}

export default About;