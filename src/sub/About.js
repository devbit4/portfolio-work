import axios from 'axios';
import React, { useEffect, useState } from 'react';

const About = (props) => {
    let [people, setPeople] = useState([]);
    useEffect(() => {
        axios.get("./dbs/influencer.json")
            .then(data => {
                setPeople(data.data.people)
            })
    })

    return (

        <section className='content'>
            <div className="inner">
                <h1>ABOUT</h1>
                <div className='intro'>
                    <div className="intro-first">
                        <h2>ABOUT US</h2>
                        <h3>Lorem, ipsum dolor.</h3>
                    </div>
                    <div className="intro-second">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus dolore ad voluptatem. Facere optio repellendus totam. </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatibus tempora sint in vitae autem voluptate possimus eligendi veritatis magnam itaque facere voluptas dolorem quasi!</p>
                    </div>
                    <div className="intro-third">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus dolore ad voluptatem. Facere optio repellendus totam, repudiandae dolore qui eaque doloribus explicabo vero id quia debitis accusantium blanditiis voluptates ipsum temporibus eligendi dolores! Provident laborum pariatur dolores dicta debitis officiis veniam esse libero reprehenderit incidunt nesciunt minus, mollitia quam soluta.</p>
                    </div>
                </div>
                <div className="history">
                    <div className="text">
                        <h2>HISTORY</h2>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    <ul className="items">
                        <li className="item num">
                            <i className="fas fa-map-signs"></i>
                            <strong>20.5</strong>
                            <span>YEARS</span>
                        </li>
                        <li className="item">
                            <i className="fas fa-map-signs"></i>
                            <strong>20.5</strong>
                            <span>YEARS</span>
                        </li>
                        <li className="item">
                            <i className="fas fa-map-signs"></i>
                            <strong>20.5</strong>
                            <span>YEARS</span>
                        </li>
                        <li className="item last">
                            <i className="fas fa-map-signs"></i>
                            <strong>20.5</strong>
                            <span>YEARS</span>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <div className="boxes upper">
                        <div className="box left">
                            <span>FALL 2016</span>
                            <h2>Lorem, ipsum dolor</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ea nemo inventore nobis perferendis eveniet!</p>
                            <button>READ MORE</button>
                        </div>
                        <div className="box right">
                            <span>FALL 2016</span>
                            <h2>Lorem, ipsum dolor</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ea nemo inventore nobis perferendis eveniet!</p>
                            <button>READ MORE</button>
                        </div>
                    </div>
                    <div className="boxes lower">
                        <div className="box left">
                            <span>FALL 2016</span>
                            <h2>Lorem, ipsum dolor</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ea nemo inventore nobis perferendis eveniet!</p>
                            <input type="text" />
                            <button>SEND</button>
                        </div>
                        <div className="box right">
                            <span>FALL 2016</span>
                            <h2>Lorem, ipsum dolor</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ea nemo inventore nobis perferendis eveniet!</p>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="people">
                    <div className="text">
                        <h2>Influencers</h2>
                    </div>
                    <div className="list">
                        {
                            people.map((person, index) => {
                                return (
                                    <div className="card-container" key={index}>
                                        <figure className="card">
                                            <div className="front">
                                                <div className='pic'>
                                                    <img src="#" alt="" />
                                                </div>
                                                <div className='txt'>
                                                    <h3>{person.name}</h3>
                                                    <h4>{person.job}</h4>
                                                    <p>{person.say}</p>
                                                    <button>Read More <i className="fas fa-angle-double-right"></i></button>
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
                                )
                            })
                        }
                    </div>





                </div>
            </div >
        </section >
    )
};

export default About;