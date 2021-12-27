import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Gallery = (props) => {
    let [pics, setPics] = useState([]);
    const base = 'https://www.flickr.com/services/rest/?';
    const method = 'flickr.interestingness.getList';
    const key = '7867f2d006615cd9c7c79d1275688a01';
    const per_page = 12;
    const format = 'json';
    const url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`;

    useEffect(() => {
        axios.get(url).then((data) => setPics(data.data.photos.photo));
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
                            <input type="text" />
                            <button>Click!</button>
                        </div>
                    </div>
                </div>
                <ul className="list">
                    {pics.map((pic, index) => {
                        const img1 = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`;
                        const img2 = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`;
                        return (
                            <li key={index} className="photo">
                                <div className="pic">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="text">
                                    <h2>{pic.title}</h2>
                                    <h3>sub title</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut odio totam optio amet.</p>
                                    <a href={img2} className='btn'>See More <i class="fas fa-angle-right"></i></a>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Gallery;
