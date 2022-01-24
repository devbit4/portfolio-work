import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination]);

const Community = (props) => {


    const [problems, setProblems] = useState([]);
    const writer = useRef(null);
    const type = useRef(null);
    const request = useRef(null);
    const updateWriter = useRef(null);
    const updateType = useRef(null);
    const updateRequest = useRef(null);

    const getLocalItems = () => {
        let data = localStorage.getItem('helps');
        console.log(data);
        if (data) {
            return JSON.parse(data);
        } else {
            return [
                { writer: 'Lena', type: 'type2', request: 'Here comes requests.' },
                { writer: 'Tim', type: 'type1', request: 'Here comes requests.' },
                { writer: 'Helen', type: 'type3', request: 'Here comes requests.' },
                { writer: 'Tom', type: 'type3', request: 'Here comes requests.' },
            ];
        }
    };
    const [helps, setHelps] = useState(getLocalItems);

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/dbs/board.json`).then((data) => {
            setProblems(data.data.data);
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('helps', JSON.stringify(helps));
    }, [helps]);

    const addPost = () => {
        if (!writer.current.value || !request.current.value) {
            alert('Please Type Your Request');
            return;
        }
        setHelps([
            {
                writer: writer.current.value,
                type: type.current.value,
                request: request.current.value,
            },
            ...helps,
        ]);
        writer.current.value = '';
        type.current.value = 'Type 1';
        request.current.value = '';
    };
    const deletePost = (deletedIndex) => {
        setHelps(helps.filter((post, postIndex) => postIndex !== deletedIndex));
    };
    const disableUpdate = (index) => {
        setHelps(
            helps.map((post, postIndex) => {
                if (postIndex === index) post.enableUpdate = false;
                return post;
            })
        );
    };
    const enableUpdate = (index) => {
        setHelps(
            helps.map((post, postIndex) => {
                if (postIndex === index) post.enableUpdate = true;
                return post;
            })
        );
        console.log(helps);
    };
    const updatePost = (index) => {
        setHelps(
            helps.map((post, postIndex) => {
                if (postIndex === index) {
                    post.writer = updateWriter.current.value;
                    post.type = updateType.current.value;
                    post.request = updateRequest.current.value;
                    post.enableUpdate = false;
                }
                return post;
            })
        );
    };

    return (
        <section className="content community">
            <div className="inner">
                <h1>COMMUNITY</h1>
                <div className="faq">
                    <h1 className="title"># FAQ</h1>
                    {problems.map((problem, index) => {
                        return (
                            <article key={index} className="active">
                                <div
                                    className="question"
                                    onClick={(e) => {
                                        e.target.closest('article').classList.toggle('active');
                                    }}
                                >
                                    <div className="question-front">
                                        <i className="far fa-circle"></i>
                                        <h2>{problem.question}</h2>
                                    </div>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div
                                    className="answer"
                                    onClick={(e) => {
                                        e.target.closest('article').classList.toggle('active');
                                    }}
                                >
                                    <p>{problem.answer}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
                <div className='pics'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        initialSlide={2}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={`${process.env.PUBLIC_URL}/img/4.jpg`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={`${process.env.PUBLIC_URL}/img/4.jpg`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={`${process.env.PUBLIC_URL}/img/203.jpg`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={`${process.env.PUBLIC_URL}/img/4.jpg`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={`${process.env.PUBLIC_URL}/img/4.jpg`} />
                        </SwiperSlide>



                    </Swiper>
                </div>
                <div className="help">
                    <h1 className="title"># HELP</h1>
                    <div className="boxes">
                        <section className="inputBox">
                            <input type="text" placeholder="Your Name Here" ref={writer} />
                            <select ref={type}>
                                <option>Type 1</option>
                                <option>Type 2</option>
                                <option>Type 3</option>
                            </select>
                            <textarea
                                cols="30"
                                rows="10"
                                placeholder="Your Request Here"
                                ref={request}
                            ></textarea>
                            <div className="btns">
                                <button
                                    onClick={() => {
                                        writer.current.value = '';
                                        request.current.value = '';
                                    }}
                                >
                                    CANCEL
                                </button>
                                <button onClick={addPost}>SEND</button>
                            </div>
                        </section>
                        <section className="showBox">
                            {helps.map((post, index) => {
                                return (
                                    <article key={index}>
                                        {post.enableUpdate ? (
                                            <>
                                                <div className="post">
                                                    <select defaultValue={post.type} ref={updateType}>
                                                        <option>Type1</option>
                                                        <option>Type2</option>
                                                        <option>Type3</option>
                                                    </select>
                                                    <input
                                                        type="text"
                                                        defaultValue={post.request}
                                                        ref={updateRequest}
                                                    />
                                                    <br />
                                                    <input
                                                        defaultValue={post.writer}
                                                        ref={updateWriter}
                                                    ></input>
                                                </div>
                                                <ul className="btns">
                                                    <li onClick={() => updatePost(index)}>
                                                        <i className="fas fa-highlighter"></i>
                                                    </li>
                                                    <li onClick={() => disableUpdate(index)}>
                                                        <i className="far fa-window-close"></i>
                                                    </li>
                                                </ul>
                                            </>
                                        ) : (
                                            <>
                                                <div className="post">
                                                    <strong>{post.type}</strong>
                                                    <p>{post.request}</p>
                                                    <span>{post.writer}</span>
                                                </div>
                                                <ul className="btns">
                                                    <li onClick={() => enableUpdate(index)}>
                                                        <i className="far fa-edit"></i>
                                                    </li>
                                                    <li onClick={() => deletePost(index)}>
                                                        <i className="far fa-trash-alt"></i>
                                                    </li>
                                                </ul>
                                            </>
                                        )}
                                    </article>
                                );
                            })}
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Community;
