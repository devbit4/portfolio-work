import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Masonry from 'react-masonry-component';


const masonryOptions = {
    fitWidth: false,
    gutter: 0,
    itemSelector: ".pic"

}

const Gallery = (props) => {
    let [pics, setPics] = useState([]);
    let [loading, setLoading] = useState([]);
    let [enableClick, setEnableClick] = useState(true);
    let input = useRef();
    let list = useRef();


    useEffect(() => {
        getPhotos({
            type: "interest"
        });
    }, []);

    return (
        <section className="content">
            <div className="inner">
                <h1>Gallery</h1>
                <div className='intro'>
                    <div className="intro-left">
                        <h2>Bucket List</h2>
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius laudantium odit necessitatibus velit quod vel dolore illum debitis error iste?</p>
                    </div>
                    <div className="intro-right">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus dolore ad voluptatem. Facere optio repellendus totam, repudiandae dolore qui eaque doloribus explicabo vero id quia debitis accusantium blanditiis voluptates ipsum temporibus eligendi dolores! Provident laborum pariatur dolores dicta debitis officiis veniam esse libero reprehenderit incidunt nesciunt minus, mollitia quam soluta.</p>
                        <div className="searchbox">
                            <input ref={input} type="text" onKeyPress={e => {
                                if (e.code === "Enter") {
                                    if (enableClick) {
                                        list.current.classList.remove("on");
                                        setEnableClick(false);
                                        setLoading(true);
                                        getPhotos({
                                            type: "search",
                                            tags: input.current.value
                                        });
                                        input.current.value = "";
                                    }
                                }
                            }} />
                            <button onClick={() => {
                                if (enableClick) {
                                    list.current.classList.remove("on");
                                    setEnableClick(false);
                                    setLoading(true);
                                    getPhotos({
                                        type: "search",
                                        tags: input.current.value
                                    });
                                    input.current.value = "";
                                }
                            }}>Click!</button>
                        </div>
                    </div>
                </div>

                {(loading) ? <img className="loading" src="/img/loading.gif" /> : ""}

                <div className="list" ref={list}>
                    <Masonry
                        className={"frame"}
                        elementType={"ul"}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}
                        options={masonryOptions}>
                        {
                            pics.map((pic, index) => {
                                const imgM = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`;
                                return (
                                    <li key={index} className='pic'>
                                        <div className="inner">
                                            <img src={imgM} alt="IMG" />
                                            <h2>{pic.title}</h2>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </Masonry>
                </div>
            </div>
        </section>
    );



    async function getPhotos(opt) {
        let url = "";

        const base = 'https://www.flickr.com/services/rest/?';
        const method = 'flickr.interestingness.getList';
        const method2 = 'flickr.photos.search';
        const key = '7867f2d006615cd9c7c79d1275688a01';
        const per_page = 5;
        const format = 'json';

        if (opt.type === "interest") {
            url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`;
        } else if (opt.type === "search") {
            url = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${opt.tags}`;
        } else {
            console.error("on error");
        }

        await axios.get(url).then((data) => setPics(data.data.photos.photo));

        setTimeout(() => {
            list.current.classList.add("on");
            setLoading(false);
            setTimeout(() => {
                setEnableClick(true);
            }, 1000)
        }, 1000)
    }
};

export default Gallery;
