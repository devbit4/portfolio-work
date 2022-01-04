import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Community = (props) => {

    let [problems, setProblems] = useState([]);
    useEffect(() => {
        axios.get("./dbs/board.json")
            .then(data => {
                setProblems(data.data.data)
            })
    })

    return (
        <section className="content community">
            <div className="inner">
                <h1>COMMUNITY</h1>
                <div className="faq">
                    <h1 className='title'>FAQ</h1>
                    {
                        problems.map((problem, index) => {
                            return (
                                <article className="active" key={index}>
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
            </div>
        </section >
    );
};
export default Community;
