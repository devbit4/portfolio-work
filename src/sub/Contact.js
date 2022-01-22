import React from 'react';
import { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';

const Contact = (props) => {
    const { kakao } = window;
    const container = useRef(null);
    const container2 = useRef(null);

    const youtube = useSelector(state => state.youtubeReducer.youtube);


    useEffect(() => {
        const options = {
            center: new kakao.maps.LatLng(37.5132313, 127.0594368),
            level: 3
        }
        const options2 = {
            center: new kakao.maps.LatLng(36.65145117804619, 127.49042332882416),
            level: 3
        }
        const map = new kakao.maps.Map(container.current, options);
        const map2 = new kakao.maps.Map(container2.current, options2);

        // marker
        const marker = new kakao.maps.Marker({
            map: map,
            position: options.center
        });
        const marker2 = new kakao.maps.Marker({
            map: map2,
            position: options2.center
        });

        // resize
        const mapSet = () => map.setCenter(options.center);
        const mapSet2 = () => map2.setCenter(options2.center);
        window.addEventListener('resize', mapSet);
        window.addEventListener('resize', mapSet2);
        const mapTypeControl = new kakao.maps.MapTypeControl();
        const mapTypeControl2 = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        map2.addControl(mapTypeControl2, kakao.maps.ControlPosition.TOPRIGHT);

    }, []);

    return (
        <section className='content contact'>
            <div className="inner">
                <h1>CONTACT</h1>
                <div className='inner-text'>
                    <div className="intro">
                        <div className="intro-left">
                            <h2># LOCATION</h2>
                            <h3>Lorem, ipsum dolor.</h3>
                        </div>
                        <div className="intro-right">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Accusamus dolore ad voluptatem. Facere optio repellendus totam,
                                repudiandae dolore qui eaque doloribus explicabo vero id quia
                                debitis accusantium blanditiis voluptates ipsum temporibus
                                eligendi dolores! Provident laborum pariatur dolores dicta debitis
                                officiis veniam esse libero reprehenderit incidunt nesciunt minus,
                                mollitia quam soluta.
                            </p>
                        </div>
                    </div>
                    <div className="times">
                        <div className="time">
                            <strong>Mon-Fr</strong>
                            <span>09:00-11:00 am</span>
                            <span>14:00-18:00 pm</span>
                        </div>
                        <div className="time">
                            <strong>Saturday</strong>
                            <span>09:00-11:00 am</span>
                            <span>14:00-14:00 pm</span>
                        </div>
                        <div className="time">
                            <strong>Sunday</strong>
                            <span>09:00-10:00 am</span>
                            <span>16:00-18:00 pm</span>
                        </div>
                    </div>
                    <div className="locations">
                        <div className="location">
                            <div className="location-left pic">
                                <div id="map" ref={container}></div>
                            </div>
                            <div className="location-right text">
                                <h2>STORY PLACE1</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facilis modi quam, sequi architecto officia!</p>
                                <span><i className="fas fa-map-marker-alt"></i> 31 Walker St, New York, NY 10013, USA</span>
                                <span><i className="fas fa-phone-alt"></i> +365 / 4369- 35656, +3615</span>
                                <span><i className="far fa-envelope"></i> cinemabridge@qodeinteractive.com</span>
                            </div>
                        </div>
                        <div className="location">
                            <div className="location-left text">
                                <h2>STORY PLACE2</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facilis modi quam, sequi architecto officia!</p>
                                <span><i className="fas fa-map-marker-alt"></i> 31 Walker St, New York, NY 10013, USA</span>
                                <span><i className="fas fa-phone-alt"></i> +365 / 4369- 35656, +3615 </span>
                                <span><i className="far fa-envelope"></i> cinemabridge@qodeinteractive.com</span>
                            </div>
                            <div className="location-right pic">
                                <div id="map" ref={container2}></div>
                            </div>
                        </div>
                    </div>
                    <div className="youtubes">
                        <div className='bigVid'>
                            <iframe
                                src={"https://www.youtube.com/embed/" + youtube[3].snippet.resourceId.videoId} width='100%' height='100%' allowFullScreen
                            >
                            </iframe>
                            <h1>Touch</h1>

                        </div>
                        <div className='articles'>
                            {
                                youtube.slice(0, 3).map((item, index) => {
                                    return (<article key={index}>
                                        <img src={item.snippet.thumbnails.medium.url} alt="vid" />
                                        <div className="txt">
                                            <i className="far fa-play-circle"></i>
                                            <h2>{item.snippet.title}</h2>
                                        </div>
                                    </article>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;

