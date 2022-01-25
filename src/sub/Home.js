import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import Anime from '../class/anime.js';
import Particles from 'react-tsparticles';
import Fade from 'react-reveal/Fade';

import { useSelector, useDispatch } from 'react-redux';
import { setYoutube } from '../redux/actions';
import axios from 'axios';

import LoadingScreen from './Loading'


SwiperCore.use([Autoplay, Pagination, Navigation]);

const Home = (props) => {
    const [loading, setLoading] = useState(true);

    const home = useRef(null);
    const [index, setIndex] = useState(0);
    const pos = useRef([]);
    const base = 200;
    const getIndex = index => {
        setIndex(index);
    }
    const handleResize = () => {
        const secs = document.querySelectorAll('.scroll');
        let arr = [];
        for (let sec of secs) arr.push(sec.offsetTop);
        pos.current = arr;
    }
    const handleScroll = () => {
        let scroll = window.scrollY;
        const btns = home.current.querySelectorAll('.btns li');

        pos.current.map((pos, index) => {
            if (scroll >= pos - base) {
                for (const btn of btns) btn.classList.remove('on');
                btns[index].classList.add('on');
            }
        })

    }

    // youtube redux fetch
    const youtube = useSelector(state => state.youtubeReducer.youtube);
    const dispatch = useDispatch();
    console.log(youtube);

    const api_key = "AIzaSyDsfN60C3q050t7aRRi2gw5CcR9CkegDz8";
    const playListId = "PL1fBkO2q3tOee1NUg1rw49pFNBK-uCEI1";
    const num = 4;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api_key}&playlistId=${playListId}&maxResults=${num}`;

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
        fetchYoutube();

    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        new Anime(window, {
            prop: 'scroll',
            value: pos.current[index],
            duration: 500
        })

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    });

    const fetchYoutube = async () => {
        const response = await axios
            .get(url)
            .catch(err => console.error(err))

        dispatch(setYoutube(response.data.items));
    }

    return (
        <>
            {
                loading === false ? (
                    <div className='home' ref={home}>
                        <section className="main">
                            <Particles
                                params={{
                                    background: {
                                        color: {
                                            value: '#d5b3b3',
                                        },
                                        position: '50% 50%',
                                        repeat: 'no-repeat',
                                        size: 'cover',
                                    },
                                    fullScreen: {
                                        zIndex: -1,
                                    },
                                    interactivity: {
                                        events: {
                                            // onClick: {
                                            //     enable: true,
                                            //     mode: 'push',
                                            // },
                                            onClick: {
                                                selectors: '#repulse-div',
                                                mode: 'repulse',
                                            },
                                            onHover: {
                                                enable: true,
                                                mode: 'repulse',
                                                parallax: {
                                                    force: 1,
                                                },
                                            },
                                        },
                                        modes: {
                                            bubble: {
                                                distance: 400,
                                                duration: 2,
                                                opacity: 0.8,
                                                size: 40,
                                            },
                                            grab: {
                                                distance: 400,
                                            },
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
                                        links: {
                                            color: {
                                                value: '#ffffff',
                                            },
                                            distance: 150,
                                            opacity: 0.4,
                                        },
                                        move: {
                                            attract: {
                                                rotate: {
                                                    x: 600,
                                                    y: 1200,
                                                },
                                            },
                                            enable: true,
                                            outModes: {
                                                bottom: 'out',
                                                left: 'out',
                                                right: 'out',
                                                top: 'out',
                                            },
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
                            />
                            <Fade left>
                                <article>
                                    <p>
                                        <strong>Share</strong> <br></br>
                                        <span>Your Stories</span>
                                    </p>
                                    <em>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                                        incidunt quidem veritatis corrupti quam et fugiat excepturi
                                        explicabo laboriosam nisi?
                                    </em>
                                    <a href="#">
                                        Read More <i className="fas fa-plus"></i>
                                    </a>
                                </article>
                            </Fade>
                            <figure className="phone">
                                <article className="screen">
                                    <Swiper
                                        direction={'vertical'}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide></SwiperSlide>
                                        <SwiperSlide></SwiperSlide>
                                        <SwiperSlide></SwiperSlide>
                                    </Swiper>
                                </article>
                                <Fade top delay={300}>
                                    <strong className='big-speech'><i className="far fa-comment-dots"></i></strong>
                                </Fade>
                                <Fade top delay={800}>
                                    <strong className='small-speech'><i className="far fa-comment-dots"></i></strong>
                                </Fade>
                            </figure>
                        </section>
                        <section className="content welcome scroll">
                            <div className="inner">
                                <h2>DREAM BIG INC</h2>
                                <h1>YOU ARE WELCOME</h1>
                                <div className="about">
                                    <div className="box">
                                        <i className="fas fa-network-wired"></i>
                                        <h3>OUR NETWORK</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Repellendus ipsam tempora ab blanditiis. Ipsam, dignissimos.
                                        </p>
                                        <span>READ MORE</span>
                                    </div>
                                    <div className="box on">
                                        <i className="fas fa-chart-line"></i>
                                        <h3>OUR ACTIVITY</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Repellendus ipsam tempora ab blanditiis. Ipsam, dignissimos.
                                        </p>
                                        <span>READ MORE</span>
                                    </div>
                                    <div className="box">
                                        <i className="fas fa-users"></i>
                                        <h3>OUR FRIENDS</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Repellendus ipsam tempora ab blanditiis. Ipsam, dignissimos.
                                        </p>
                                        <span>READ MORE</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="intrdouction">
                            <div className="left-video">
                                <video
                                    src={`${process.env.PUBLIC_URL}/img/home/vid1.mov`}
                                    muted
                                    autoPlay
                                    loop
                                    controls
                                ></video>
                            </div>
                            <div className="right-text">
                                <h2>CREATIVE IN MIND</h2>
                                <h1>OUR STORY HAS NO LIMIT</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                                    ducimus. <br></br>Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit.<br></br> Doloribus reprehenderit necessitatibus
                                    officia nostrum molestias sit mollitia culpa. <br></br>Quisquam ut,
                                    exercitationem praesentium optio aperiam esse. Error.
                                </p>
                                <a href="#">
                                    Read More <i className="fas fa-plus"></i>
                                </a>
                            </div>
                        </section>
                        <section className="content achievement">
                            <div className="inner">
                                <div className="blocks">
                                    <div className="block">
                                        <i className="fas fa-child"></i>
                                        <div className="text">
                                            <span>2018</span>
                                            <strong>CLIENTS</strong>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <i className="fas fa-sliders-h"></i>
                                        <div className="text">
                                            <span>2019</span>
                                            <strong>PROJECTS</strong>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <i className="fas fa-award"></i>
                                        <div className="text">
                                            <span>2020</span>
                                            <strong>AWARDS</strong>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <i className="fas fa-cogs"></i>
                                        <div className="text">
                                            <span>2021</span>
                                            <strong>PLUGINS</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="content process scroll">
                            <div className="inner">
                                <h2>DREAM BIG INC</h2>
                                <h1>OUR AMAZING WORKS</h1>
                                <Fade left>
                                    <div className="round">
                                        <div className="left-pic">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/img/home/process1.jpg`}
                                                alt="process1"
                                            />
                                        </div>

                                        <div className="right-text">
                                            <h2>FIRST STEP</h2>
                                            <h1>BRAINSTORM & WRITE YOUR STORY</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Corrupti hic neque ex, dolore distinctio voluptate repudiandae
                                                a vitae, alias, obcaecati ullam? Tenetur tempora placeat
                                                velit.
                                            </p>
                                            <span>VIEW IDEAS </span>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade right delay={200}>
                                    <div className="round">
                                        <div className="left-pic">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/img/home/process2.jpg`}
                                                alt="process2"
                                            />
                                        </div>
                                        <div className="right-text">
                                            <h2>SECOND STEP</h2>
                                            <h1>SHARE YOUR STORIES WITH OTHERS</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Corrupti hic neque ex, dolore distinctio voluptate repudiandae
                                                a vitae, alias, obcaecati ullam? Tenetur tempora placeat
                                                velit.
                                            </p>
                                            <span>VIEW IDEAS</span>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade left delay={400}>
                                    <div className="round">
                                        <div className="left-pic">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/img/home/process3.jpg`}
                                                alt="process3"
                                            />
                                        </div>
                                        <div className="right-text">
                                            <h2>THIRD STEP</h2>
                                            <h1>PUSH LIKE BUTTONS</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Corrupti hic neque ex, dolore distinctio voluptate repudiandae
                                                a vitae, alias, obcaecati ullam? Tenetur tempora placeat
                                                velit.
                                            </p>
                                            <span>VIEW IDEAS</span>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </section>
                        <section className="content banner">
                            <div className="banner-inner">
                                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                                    Provident ipsa nulla libero perferendis corporis excepturi! Nostrum
                                    sequi aut provident voluptatem.
                                </p>
                            </div>
                        </section>
                        <section className="content testimonials scroll">
                            <div className="inner">
                                <h2>TESTIMONIALS</h2>
                                <h1>WHAT PEOPLE SAY</h1>
                                <div className="reviews">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        // navigation={true}
                                        loop={true}
                                        loopFillGroupWithBlank={true}
                                        pagination={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className="review">
                                                <i className="fas fa-quote-right"></i>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Similique tempora repellat aspernatur nam libero sit quis
                                                    repudiandae cum id consectetur! Eum repellendus, sit ipsa,
                                                    iste alias odit similique consectetur velit sequi dolorem
                                                    pariatur quidem voluptatum natus libero exercitationem
                                                    quaerat! Maxime!
                                                </p>
                                                <div className="writer">
                                                    <div className="left-pic">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/img/home/person1.jpg`}
                                                            alt="person1"
                                                        />
                                                    </div>
                                                    <div className="right-name">
                                                        <strong>Tim</strong>
                                                        <span>STUDENTS</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <i className="fas fa-quote-right"></i>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Similique tempora repellat aspernatur nam libero sit quis
                                                    repudiandae cum id consectetur! Eum repellendus, sit ipsa,
                                                    iste alias odit similique consectetur velit sequi dolorem
                                                    pariatur quidem voluptatum natus libero exercitationem
                                                    quaerat! Maxime!
                                                </p>
                                                <div className="writer">
                                                    <div className="left-pic">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/img/home/person2.jpg`}
                                                            alt="person2"
                                                        />
                                                    </div>
                                                    <div className="right-name">
                                                        <strong>Tim</strong>
                                                        <span>STUDENTS</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <i className="fas fa-quote-right"></i>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Similique tempora repellat aspernatur nam libero sit quis
                                                    repudiandae cum id consectetur! Eum repellendus, sit ipsa,
                                                    iste alias odit similique consectetur velit sequi dolorem
                                                    pariatur quidem voluptatum natus libero exercitationem
                                                    quaerat! Maxime!
                                                </p>
                                                <div className="writer">
                                                    <div className="left-pic">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/img/home/person3.jpg`}
                                                            alt="person3"
                                                        />
                                                    </div>
                                                    <div className="right-name">
                                                        <strong>Tim</strong>
                                                        <span>STUDENTS</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="review">
                                                <i className="fas fa-quote-right"></i>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Similique tempora repellat aspernatur nam libero sit quis
                                                    repudiandae cum id consectetur! Eum repellendus, sit ipsa,
                                                    iste alias odit similique consectetur velit sequi dolorem
                                                    pariatur quidem voluptatum natus libero exercitationem
                                                    quaerat! Maxime!
                                                </p>
                                                <div className="writer">
                                                    <div className="left-pic">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/img/home/person4.jpg`}
                                                            alt="person4"
                                                        />
                                                    </div>
                                                    <div className="right-name">
                                                        <strong>Tim</strong>
                                                        <span>STUDENTS</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <i className="fas fa-quote-right"></i>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Similique tempora repellat aspernatur nam libero sit quis
                                                    repudiandae cum id consectetur! Eum repellendus, sit ipsa,
                                                    iste alias odit similique consectetur velit sequi dolorem
                                                    pariatur quidem voluptatum natus libero exercitationem
                                                    quaerat! Maxime!
                                                </p>
                                                <div className="writer">
                                                    <div className="left-pic">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/img/home/person5.jpg`}
                                                            alt="person5"
                                                        />
                                                    </div>
                                                    <div className="right-name">
                                                        <strong>Tim</strong>
                                                        <span>STUDENTS</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <i className="fas fa-quote-right"></i>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Similique tempora repellat aspernatur nam libero sit quis
                                                    repudiandae cum id consectetur! Eum repellendus, sit ipsa,
                                                    iste alias odit similique consectetur velit sequi dolorem
                                                    pariatur quidem voluptatum natus libero exercitationem
                                                    quaerat! Maxime!
                                                </p>
                                                <div className="writer">
                                                    <div className="left-pic">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/img/home/person6.jpg`}
                                                            alt="person6"
                                                        />
                                                    </div>
                                                    <div className="right-name">
                                                        <strong>Tim</strong>
                                                        <span>STUDENTS</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </section>
                        <section className="content sponsor">
                            <div className="inner companies">
                                <div className="company">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/home/logo1.png`}
                                        alt="logo1"
                                    />
                                </div>
                                <div className="company">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/home/logo2.png`}
                                        alt="logo2"
                                    />
                                </div>
                                <div className="company">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/home/logo3.png`}
                                        alt="logo3"
                                    />
                                </div>
                                <div className="company">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/home/logo4.png`}
                                        alt="logo4"
                                    />
                                </div>
                                <div className="company">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/home/logo5.png`}
                                        alt="logo5"
                                    />
                                </div>
                                <div className="company">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/home/logo7.png`}
                                        alt="logo6"
                                    />
                                </div>
                                <div className="company">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/home/logo8.jpg`}
                                        alt="logo7"
                                    />
                                </div>
                                <div className="company">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/home/logo6.jpg`}
                                        alt="logo8"
                                    />
                                </div>
                            </div>
                        </section>
                        <section className='scrollBtns'>
                            <ul className="btns">
                                <li className='on' onClick={() =>
                                    getIndex(0)
                                }></li>
                                <li onClick={() =>
                                    getIndex(1)
                                }></li>
                                <li onClick={() => getIndex(2)

                                }></li>
                                <li onClick={() => getIndex(3)}></li>
                            </ul>
                        </section>
                    </div>
                )

                    : (
                        <LoadingScreen></LoadingScreen>
                    )
            }

        </>

    );
};

export default Home;
