import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';

import Particles from 'react-tsparticles';

// install Swiper modules
SwiperCore.use([Pagination]);

const Home = (props) => {
	return (
		<>
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
							onClick: {
								enable: true,
								mode: 'push',
							},
							onDiv: {
								selectors: '#repulse-div',
								mode: 'repulse',
							},
							onHover: {
								enable: true,
								mode: 'connect',
								parallax: {
									force: 60,
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
								max: 5,
							},
							animation: {
								speed: 40,
								minimumValue: 0.1,
							},
						},
					},
				}}
			/>
			<section className="main">
				<div className="inner"></div>
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
				<figure className="phone">
					<article className="screen">
						<Swiper
							direction={'vertical'}
							pagination={{
								clickable: true,
							}}
							className="mySwiper"
						>
							<SwiperSlide>Slide 1</SwiperSlide>
							<SwiperSlide>Slide 2</SwiperSlide>
							<SwiperSlide>Slide 3</SwiperSlide>
						</Swiper>
					</article>
					<i className="far fa-comment-dots big-speech"></i>
					<i className="far fa-comment-dots small-speech"></i>
				</figure>
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
					<video src="./img/home/vid1.mov" muted autoPlay loop controls></video>
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
							<img src="./img/home/11.jpg" alt="process1" />
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
							<img src="./img/home/13.jpg" alt="process2" />
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
							<img src="./img/home/9.jpg" alt="process3" />
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
				<div class="inner">
					<h1>Lorem ipsum dolor sit amet consectetur.</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
						ipsa nulla libero perferendis corporis excepturi! Nostrum sequi aut
						provident voluptatem.
					</p>
				</div>
			</section>
			<section className="content testimonials">
				<div className="inner">
					<h2>TESTIMONIALS</h2>
					<h1>WHAT PEOPLE SAY</h1>
					<div className="reviews">
						<div className="review">
							<i className="fas fa-quote-right"></i>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Similique tempora repellat aspernatur nam libero sit quis
								repudiandae cum id consectetur! Eum repellendus, sit ipsa, iste
								alias odit similique consectetur velit sequi dolorem pariatur
								quidem voluptatum natus libero exercitationem quaerat! Maxime!
							</p>
							<div className="writer">
								<div className="left-pic">
									<img src="#" alt="" />
								</div>
								<div className="right-name">
									<strong>SOPHIA LIM</strong>
									<span>STUDENTS</span>
								</div>
							</div>
						</div>
						<div className="review">
							<i className="fas fa-quote-right"></i>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Similique tempora repellat aspernatur nam libero sit quis
								repudiandae cum id consectetur! Eum repellendus, sit ipsa, iste
								alias odit similique consectetur velit sequi dolorem pariatur
								quidem voluptatum natus libero exercitationem quaerat! Maxime!
							</p>
							<div className="writer">
								<div className="left-pic">
									<img src="#" alt="" />
								</div>
								<div className="right-name">
									<strong>SOPHIA LIM</strong>
									<span>STUDENTS</span>
								</div>
							</div>
						</div>
						<div className="review">
							<i className="fas fa-quote-right"></i>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Similique tempora repellat aspernatur nam libero sit quis
								repudiandae cum id consectetur! Eum repellendus, sit ipsa, iste
								alias odit similique consectetur velit sequi dolorem pariatur
								quidem voluptatum natus libero exercitationem quaerat! Maxime!
							</p>
							<div className="writer">
								<div className="left-pic">
									<img src="#" alt="" />
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
				<div className="inner companies">
					<div className="company">
						<img src="#" alt="" />
					</div>
					<div className="company">
						<img src="#" alt="" />
					</div>
					<div className="company">
						<img src="#" alt="" />
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
