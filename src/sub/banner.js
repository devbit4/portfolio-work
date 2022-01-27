import React from 'react';
import Particles from 'react-tsparticles';

const Banner = (props) => {

    return (

        <section className="content banner">
            <Particles
                params={{
                    background: {
                        color: {
                            value: '#d5b3b3',
                        },
                    },
                    fullScreen: {
                        enable: false,
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                                parallax: {
                                    force: 1,
                                },
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: 'random',
                        },
                        move: {
                            attract: {
                                rotate: {
                                    x: 600,
                                    y: 1200,
                                },
                            },
                            enable: true,
                            speed: 1,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            limit: 500,
                            value: 300,
                        },
                        opacity: {
                            value: 0.5,
                            animation: {
                                speed: 3,
                                minimumValue: 0.1,
                            },
                        },
                        size: {
                            random: {
                                enable: true,
                            },
                            value: {
                                min: 1,
                                max: 6,
                            },
                            animation: {
                                speed: 40,
                                minimumValue: 0.1,
                            },
                        },
                    },
                }}
            ></Particles>
            <div className="banner-inner">
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                    Provident ipsa nulla libero perferendis corporis excepturi! Nostrum
                    sequi aut provident voluptatem.
                </p>
            </div>
        </section>)
};

export default Banner;