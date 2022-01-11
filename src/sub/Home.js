import React, { useRef } from 'react';

const Home = (props) => {
    let bg1 = useRef();
    return (
        <>

            <section className="main" ref={bg1}>
                <article>
                    <p><strong>lorem</strong>ipsum</p>
                    <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, illum.</em>
                </article>
                <figure>
                    <div className="phone">
                    </div>
                </figure>
                <nav>
                    <span onClick={() => {

                    }}>family</span>
                    <span>friends</span>
                    <span>travel</span>
                </nav>

            </section>

            <section className="content welcome">
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
                        <div className="box">
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
                    <video src="./img/1.mp4" muted autoplay loop controls></video>
                </div>
                <div className="right-text">
                    <h2>CREATIVE IN MIND</h2>
                    <h1>OUR STORY HAS NO LIMIT</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                        ducimus. <br></br>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br> Doloribus reprehenderit necessitatibus officia nostrum molestias sit mollitia culpa. <br></br>Quisquam ut, exercitationem praesentium optio aperiam esse. Error.
                    </p>
                    <a href="#">Read More</a>
                </div>
            </section>
            <section className="content achievement">
                <div className="inner">
                    <div className="blocks">
                        <div className="block">
                            <i className="fas fa-angle-right"></i>
                            <div className="text">
                                <span>2016</span>
                                <strong>PLUGINS</strong>
                            </div>
                        </div>
                        <div className="block">
                            <i className="fas fa-angle-right"></i>
                            <div className="text">
                                <span>2016</span>
                                <strong>PLUGINS</strong>
                            </div>
                        </div>
                        <div className="block">
                            <i className="fas fa-angle-right"></i>
                            <div className="text">
                                <span>2016</span>
                                <strong>PLUGINS</strong>
                            </div>
                        </div>
                        <div className="block">
                            <i className="fas fa-angle-right"></i>
                            <div className="text">
                                <span>2016</span>
                                <strong>PLUGINS</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content process">
                <div className="inner">
                    <h2>DREAM BIG INC</h2>
                    <h1>OUR AMAZING WORKS</h1>
                    <div className="round">
                        <div className="left-pic">
                            <img src="./img/11.jpg" alt="" />
                        </div>
                        <div className="right-text">
                            <h2>FIRST STEP</h2>
                            <h1>BRAINSTORM & WRITE YOUR DREAM</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Corrupti hic neque ex, dolore distinctio voluptate repudiandae a
                                vitae, alias, obcaecati ullam? Tenetur tempora placeat velit.
                            </p>
                            <span>VIEW IDEAS</span>
                        </div>
                    </div>
                    <div className="round">
                        <div className="left-pic">
                            <img src="./img/19.jpg" alt="" />
                        </div>
                        <div className="right-text">
                            <h2>SECOND STEP</h2>
                            <h1>SHARE YOUR GOALS WITH OTHERS</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Corrupti hic neque ex, dolore distinctio voluptate repudiandae a
                                vitae, alias, obcaecati ullam? Tenetur tempora placeat velit.
                            </p>
                            <span>VIEW IDEAS</span>
                        </div>
                    </div>
                    <div className="round">
                        <div className="left-pic">
                            <img src="./img/9.jpg" alt="" />
                        </div>
                        <div className="right-text">
                            <h2>THIRD STEP</h2>
                            <h1>ACHIEVE YOUR DREAM & REFLECT</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Corrupti hic neque ex, dolore distinctio voluptate repudiandae a
                                vitae, alias, obcaecati ullam? Tenetur tempora placeat velit.
                            </p>
                            <span>VIEW IDEAS</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content banner">
                <div className="inner">
                    <span className="text">배너에 글씨가 나타나는 부분</span>
                </div>
            </section>
            <section className="content testimonials">
                <div className='inner'>
                    <h2>TESTIMONIALS</h2>
                    <h1>WHAT PEOPLE SAY</h1>
                    <div className="reviews">
                        <div className="review">
                            <i class="fas fa-quote-right"></i>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                                tempora repellat aspernatur nam libero sit quis repudiandae cum id
                                consectetur! Eum repellendus, sit ipsa, iste alias odit similique
                                consectetur velit sequi dolorem pariatur quidem voluptatum natus
                                libero exercitationem quaerat! Maxime!
                            </p>
                            <div className="writer">
                                <div className="left-pic">
                                    <img src="" alt="" />
                                </div>
                                <div className="right-name">
                                    <strong>SOPHIA LIM</strong>
                                    <span>STUDENTS</span>
                                </div>
                            </div>

                        </div>
                        <div className="review">
                            <i class="fas fa-quote-right"></i>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                                tempora repellat aspernatur nam libero sit quis repudiandae cum id
                                consectetur! Eum repellendus, sit ipsa, iste alias odit similique
                                consectetur velit sequi dolorem pariatur quidem voluptatum natus
                                libero exercitationem quaerat! Maxime!
                            </p>
                            <div className="writer">
                                <div className="left-pic">
                                    <img src="" alt="" />
                                </div>
                                <div className="right-name">
                                    <strong>SOPHIA LIM</strong>
                                    <span>STUDENTS</span>
                                </div>
                            </div>

                        </div>
                        <div className="review">
                            <i class="fas fa-quote-right"></i>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                                tempora repellat aspernatur nam libero sit quis repudiandae cum id
                                consectetur! Eum repellendus, sit ipsa, iste alias odit similique
                                consectetur velit sequi dolorem pariatur quidem voluptatum natus
                                libero exercitationem quaerat! Maxime!
                            </p>
                            <div className="writer">
                                <div className="left-pic">
                                    <img src="" alt="" />
                                </div>
                                <div className="right-name">
                                    <strong>SOPHIA LIM</strong>
                                    <span>STUDENTS</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className="content sponsor">
                <div className='inner companies'>
                    <div className="company">
                        <img src="./img/42.png" alt="" />
                    </div>
                    <div className="company">
                        <img src="./img/41.png" alt="" />
                    </div>
                    <div className="company">
                        <img src="./img/40.png" alt="" />
                    </div>
                    <div className="company">
                        <img src="" alt="" />
                    </div>
                    <div className="company">
                        <img src="" alt="" />
                    </div>
                    <div className="company">
                        <img src="" alt="" />
                    </div>
                    <div className="company">
                        <img src="" alt="" />
                    </div>
                    <div className="company">
                        <img src="" alt="" />
                    </div>
                    <div className="company">
                        <img src="" alt="" />
                    </div>
                    <div className="company">
                        <img src="" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
