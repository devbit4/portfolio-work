import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Community = (props) => {

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("./dbs/board.json")
            .then(data => {
                setPosts(data.data.data)
            })
    })

    return (
        <section className="content community">
            <div className="inner">
                <h1>Community</h1>
                {
                    posts.slice(0).reverse().map((post, index) => {
                        return (
                            <article key={index}>
                                <h1>{posts.length - index}</h1>
                                <h2>{post.title}</h2>
                                <strong>{post.writer}</strong>
                                <span>{post.date}</span>
                                <em>{post.like}</em>

                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};
export default Community;
