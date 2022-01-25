import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import { setLogLevel } from 'firebase';
import 'react-circular-progressbar/dist/styles.css';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider.js";

const About = (props) => {

    let [people, setPeople] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/dbs/influencer.json`).then((data) => {
            setPeople(data.data.people);
        });
    }, []);

    return (
        <section className="content about">
            <div className="inner">
                <h1>ABOUT</h1>
                <div className="about-content">
                    <div className="intro">
                        <div className="intro-first">
                            <h2># ABOUT US</h2>
                            <h3>Lorem, ipsum dolor.</h3>
                        </div>
                        <div className="intro-second">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Accusamus dolore ad voluptatem. Facere optio repellendus totam.{' '}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                                voluptatibus tempora sint in vitae autem voluptate possimus
                                eligendi veritatis magnam itaque facere voluptas dolorem quasi!
                            </p>
                        </div>
                        <div className="intro-third">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Accusamus dolore ad voluptatem. Facere optio repellendus totam,
                                repudiandae dolore qui eaque doloribus explicabo vero id quia
                                debitis accusantium blanditiis voluptates ipsum temporibus
                                eligendi dolores! Provident laborum pariatur dolores dicta
                                debitis officiis veniam esse libero reprehenderit incidunt
                                nesciunt minus, mollitia quam soluta.
                            </p>
                        </div>
                    </div>
                    <div className="history">
                        <div className="text">
                            <h2># HISTORY</h2>
                            <h3>Lorem ipsum dolor sit.</h3>
                        </div>
                        <ul className="items">
                            <Jump>
                                <div className="item" style={{ width: 100, height: 100 }}>

                                    <AnimatedProgressProvider
                                        valueStart={0}
                                        valueEnd={66}
                                        duration={1.5}
                                        easingFunction={easeQuadInOut}
                                        repeat
                                    >
                                        {value => {
                                            const roundedValue = Math.round(value);
                                            return (
                                                <CircularProgressbar
                                                    value={value}
                                                    text={`${roundedValue}%`}
                                                    styles={buildStyles({
                                                        pathTransition: "none", textColor: "#000",
                                                        pathColor: "#ebd76f"
                                                    })}
                                                />
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                    <span>Lorem</span>
                                </div>
                            </Jump>
                            <Jump delay={200}>
                                <div className="item" style={{ width: 100, height: 100 }}>

                                    <AnimatedProgressProvider
                                        valueStart={0}
                                        valueEnd={52}
                                        duration={1.5}
                                        easingFunction={easeQuadInOut}
                                        repeat
                                    >
                                        {value => {
                                            const roundedValue = Math.round(value);
                                            return (
                                                <CircularProgressbar
                                                    value={value}
                                                    text={`${roundedValue}%`}
                                                    styles={buildStyles({
                                                        pathTransition: "none", textColor: "#000",
                                                        pathColor: "#888"
                                                    })}
                                                />
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                    <span>Lorem</span>
                                </div>
                            </Jump>
                            <Jump delay={400}>
                                <div className="item" style={{ width: 100, height: 100 }}>
                                    <AnimatedProgressProvider
                                        valueStart={0}
                                        valueEnd={82}
                                        duration={1.5}
                                        easingFunction={easeQuadInOut}
                                        repeat
                                    >
                                        {value => {
                                            const roundedValue = Math.round(value);
                                            return (
                                                <CircularProgressbar
                                                    value={value}
                                                    text={`${roundedValue}%`}
                                                    styles={buildStyles({
                                                        pathTransition: "none", textColor: "#000",
                                                        pathColor: "#7db9e4"
                                                    })}
                                                />
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                    <span>Lorem</span>
                                </div>
                            </Jump>
                            <Jump delay={600}>
                                <div className="item" style={{ width: 100, height: 100 }}>
                                    <AnimatedProgressProvider
                                        valueStart={0}
                                        valueEnd={46}
                                        duration={1.5}
                                        easingFunction={easeQuadInOut}
                                        repeat
                                    >
                                        {value => {
                                            const roundedValue = Math.round(value);
                                            return (
                                                <CircularProgressbar
                                                    value={value}
                                                    text={`${roundedValue}%`}
                                                    styles={buildStyles({
                                                        pathTransition: "none", textColor: "#000",
                                                        pathColor: "#888"
                                                    })}
                                                />
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                    <span>Lorem</span>
                                </div>
                            </Jump>
                        </ul>
                    </div>
                    <div className="description">
                        <div className="boxes upper">
                            <div className="box top-left">
                                <span>SPRING 2022</span>
                                <h2>Lorem, ipsum dolor</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Repellat ea nemo inventore nobis perferendis eveniet!
                                </p>
                                <button>READ MORE</button>
                            </div>
                            {/* <Fade right> */}
                            <div className="box top-right">
                                <span>SUMMER 2022</span>
                                <h2>Lorem, ipsum dolor</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Repellat ea nemo inventore nobis perferendis eveniet!
                                </p>
                                <button>READ MORE</button>
                            </div>
                            {/* </Fade> */}
                        </div>
                        <div className="boxes lower">
                            {/* <Fade left delay={300}> */}
                            <div className="box lower-left">
                                <span>FALL 2022</span>
                                <h2>Lorem, ipsum dolor</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Repellat ea nemo inventore nobis perferendis eveniet!
                                </p>
                                <input type="text" />
                                <button>SEND</button>
                            </div>
                            {/* </Fade> */}
                            <div className="box lower-right">
                                <span>WINTER 2022</span>
                                <h2>Lorem, ipsum dolor</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Repellat ea nemo inventore nobis perferendis eveniet!
                                </p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className="people">
                        <div className="text">
                            <h2>#INFLUENCERS</h2>
                        </div>

                        <div className="list">
                            {people.map((person, index) => {
                                return (
                                    <Fade bottom key={index}>
                                        <div className="card-container" key={index} >
                                            <figure className="card">
                                                <div className="front">
                                                    <div className="pic">
                                                        <img
                                                            src={process.env.PUBLIC_URL + person.pic}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="txt">
                                                        <h3>{person.name}</h3>
                                                        <h4>{person.job}</h4>
                                                        <p>{person.say}</p>
                                                        <button>
                                                            Read More{' '}
                                                            <i className="fas fa-angle-double-right"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="back">
                                                    <h3>{person.say}</h3>
                                                    <p>{person.intro}</p>
                                                    <div className="sns">
                                                        <i className="fab fa-facebook-square"></i>
                                                        <i className="fab fa-instagram"></i>
                                                        <i className="fab fa-twitter"></i>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </Fade>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
