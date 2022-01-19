import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';

const Community = (props) => {
    const [problems, setProblems] = useState([]);
    const writer = useRef(null);
    const request = useRef(null);
    const updateWriter = useRef(null);
    const updateRequest = useRef(null);
    const [posts, setPosts] = useState([
        { writer: "Lena", request: "I need your help" },
        { writer: "Lena", request: "I need your help" }
    ]);

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/dbs/board.json`)
            .then(data => {
                setProblems(data.data.data)
            })
    }, [])

    const addPost = () => {
        if (!writer.current.value || !request.current.value) {
            alert("Please Type Your Request");
            return;
        }
        setPosts([{ writer: writer.current.value, request: request.current.value }, ...posts]);
        writer.current.value = "";
        request.current.value = "";

    }
    const deletePost = (deletedIndex) => {
        setPosts(posts.filter((post, postIndex) => postIndex !== deletedIndex))
    }
    const disableUpdate = (index) => {
        setPosts(posts.map((post, postIndex) => {
            if (postIndex === index) post.enableUpdate = false;
            return post;
        }))
    }
    const enableUpdate = (index) => {
        setPosts(posts.map((post, postIndex) => {
            if (postIndex === index) post.enableUpdate = true;
            return post;

        }))
        console.log(posts);
    }
    const updatePost = (index) => {
        setPosts(posts.map((post, postIndex) => {
            if (postIndex === index) {
                post.writer = updateWriter.current.value;
                post.request = updateRequest.current.value;
                post.enableUpdate = false;
            }
            return post;

        }))
    }


    return (
        <section className="content community">
            <div className="inner">
                <h1>COMMUNITY</h1>
                <div className="faq">
                    <h1 className='title'># FAQ</h1>
                    {
                        problems.map((problem, index) => {
                            return (
                                <article key={index}>
                                    <div className="question" onClick={(e) => {
                                        e.target.closest("article").classList.toggle("active");
                                    }}>
                                        <div className='question-front'>
                                            <i className="far fa-circle"></i>
                                            <h2>{problem.question}</h2>
                                        </div>
                                        <i className="fas fa-chevron-down"></i>
                                    </div>
                                    <div className="answer" onClick={(e) => {
                                        e.target.closest("article").classList.toggle("active");
                                    }}>
                                        <p>{problem.answer}</p>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
                <div className="help">
                    <h1 className='title'># HELP</h1>
                    <div className='boxes'>
                        <section className="inputBox">
                            <input type="text" placeholder="Your Name Here" ref={writer} />
                            <textarea cols="30" rows="10" placeholder="Your Request Here" ref={request}></textarea>
                            <div className="btns">
                                <button onClick={() => {
                                    writer.current.value = "";
                                    request.current.value = "";
                                }}>CANCEL</button>
                                <button onClick={addPost}>SEND</button>
                            </div>
                        </section>
                        <section className="showBox">
                            {
                                posts.map((post, index) => {
                                    return (
                                        <article key={index}>

                                            {post.enableUpdate ?

                                                <>
                                                    <div className="post">
                                                        <input type="text" defaultValue={post.request} ref={updateRequest} /><br />
                                                        <textarea defaultValue={post.writer} ref={updateWriter}></textarea>
                                                    </div>
                                                    <ul className="btns">
                                                        <li onClick={() => updatePost(index)}>입력</li>
                                                        <li onClick={() => disableUpdate(index)}>취소</li>
                                                    </ul>
                                                </>

                                                :
                                                <>
                                                    <div className="post">
                                                        <p>{post.request}</p>
                                                        <span>{post.writer}</span>
                                                    </div>
                                                    <ul className="btns">
                                                        <li onClick={() => enableUpdate(index)}>Edit</li>
                                                        <li onClick={() => deletePost(index)}>Del</li>
                                                    </ul>
                                                </>

                                            }

                                        </article>
                                    )
                                })
                            }
                        </section>
                    </div>
                </div>
            </div>
        </section >
    );
};
export default Community;
