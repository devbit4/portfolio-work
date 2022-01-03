import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Masonry from 'react-masonry-component';

const path = process.env.PUBLIC_URL;

const masonryOptions = {
    fitWidth: false,
    gutter: 0,
    itemSelector: '.pic',
};

const Gallery = (props) => {
    let [pics, setPics] = useState([]);
    let [loading, setLoading] = useState([]);
    let [enableClick, setEnableClick] = useState(true);
    let [popup, setPopup] = useState(false);
    let [index, setIndex] = useState();
    let input = useRef();
    let list = useRef();

    useEffect(() => {
        getPhotos({
            type: 'interest',
        });
    }, []);

    return (
        <section className="content gallery">
            <div className="inner">
                <h1
                    onClick={(e) => {
                        if (enableClick) {
                            list.current.classList.remove('on');
                            setEnableClick(false);
                            setLoading(true);
                            getPhotos({
                                type: 'interest',
                            });
                        }
                    }}
                >
                    GALLERY
                </h1>
                <div className="intro">
                    <div className="intro-left">
                        <h2>OUR STORIES</h2>
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                            laudantium odit necessitatibus velit quod vel dolore illum debitis
                            error iste?
                        </p>
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
                        <div className="searchbox">
                            <input
                                ref={input}
                                type="text"
                                onKeyPress={(e) => {
                                    if (e.code === 'Enter') {
                                        if (input.current.value === '') return;
                                        if (enableClick) {
                                            list.current.classList.remove('on');
                                            setEnableClick(false);
                                            setLoading(true);
                                            getPhotos({
                                                type: 'search',
                                                tags: input.current.value,
                                            });
                                            input.current.value = '';
                                        }
                                    }
                                }}
                            />
                            <button
                                onClick={() => {
                                    if (input.current.value === '') return;
                                    if (enableClick) {
                                        list.current.classList.remove('on');
                                        setEnableClick(false);
                                        setLoading(true);
                                        getPhotos({
                                            type: 'search',
                                            tags: input.current.value,
                                        });
                                        input.current.value = '';
                                    }
                                }}
                            >
                                Click!
                            </button>
                        </div>
                    </div>
                </div>

                {loading ? <img className="loading" src={path + "/img/loading.gif"} /> : ''}

                <div className="list" ref={list}>
                    <Masonry
                        className={'frame'}
                        elementType={'ul'}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}
                        options={masonryOptions}
                    >
                        {pics.map((pic, index) => {
                            const imgM = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`;
                            return (
                                <li key={index} className="pic" onClick={() => {
                                    setPopup(true);
                                    setIndex(index);
                                }}>
                                    <div className="inner">
                                        <div className="type">
                                            <span>Art,fashion</span>
                                            <span>
                                                <i className="far fa-sticky-note"></i>
                                                <i className="fas fa-sign-in-alt"></i>
                                            </span>
                                        </div>
                                        <img
                                            src={imgM}
                                            alt="IMG"
                                        ></img>
                                        <strong className='click'>click!</strong>

                                        <h2>{pic.title.toUpperCase()}</h2>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Doloremque necessitatibus illum laudantium maiores dolor
                                            praesentium impedit consequuntur enim aspernatur
                                            veritatis.
                                        </p>
                                        <strong>By Andrew Kim</strong>
                                    </div>
                                </li>
                            );
                        })}
                    </Masonry>
                </div>
            </div>
            {popup ? <Popup></Popup> : ''}
        </section>
    );

    //이미지 검색 후 불러오기
    async function getPhotos(opt) {
        let url = '';

        const base = 'https://www.flickr.com/services/rest/?';
        const method = 'flickr.interestingness.getList';
        const method2 = 'flickr.photos.search';
        const key = '7867f2d006615cd9c7c79d1275688a01';
        const per_page = 12;
        const format = 'json';

        if (opt.type === 'interest') {
            url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`;
        } else if (opt.type === 'search') {
            url = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${opt.tags}`;
        } else {
            console.error('on error');
        }

        await axios.get(url).then((data) => setPics(data.data.photos.photo));

        setTimeout(() => {
            list.current.classList.add('on');
            setLoading(false);
            setTimeout(() => {
                setEnableClick(true);
            }, 1000);
        }, 1000);
    }
    //팝업창
    function Popup() {
        const imgB = `https://live.staticflickr.com/${pics[index].server}/${pics[index].id}_${pics[index].secret}_b.jpg`;

        return (
            <aside className="popup">
                <div className="pic">
                    <img src={imgB} alt="big image" />
                </div>
                <div className="text">
                    <h2>{pics[index].title.toUpperCase()}</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                        exercitationem rem? Quis similique sint iste, explicabo architecto.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                        exercitationem rem? Quis similique sint iste, explicabo architecto
                        neque ipsum modi.
                    </p>
                </div>
                <span
                    onClick={() => {
                        setPopup(false);
                    }}
                >
                    Close
                </span>
            </aside >
        );
    }
};

export default Gallery;
