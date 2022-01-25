import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';

function Youtube() {

    const body = document.querySelector("body");

    let [isPop, setIsPop] = useState(false);
    let [index, setIndex] = useState(0);
    let [features, setFeatures] = useState([]);
    let [trends, setTrends] = useState([]);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const time = new Date();
    const m = time.getMonth();
    const d = time.getDate();

    const youtube = useSelector(state => state.youtubeReducer.youtube);


    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/dbs/youtube.json`)
            .then(json => {
                setFeatures(json.data.featured);
                setTrends(json.data.trend);
            })
    }, []);




    return (
        <section className="content youtube">
            <div className="inner">
                <h1>YOUTUBE</h1>

                <div className="news">
                    <h1># WHAT'S NEWS?</h1>
                    {
                        youtube.map((item, index) => {
                            let tit = item.snippet.title;
                            let tit_len = tit.length;
                            let desc = item.snippet.description;
                            let desc_len = desc.length;

                            return (
                                <article key={index}>
                                    <div className="inner">
                                        <div className="circle"><i className="far fa-circle"></i></div>
                                        <div className="num">
                                            <strong>{index + 10}</strong>
                                            <span>{monthNames[m]}</span>
                                        </div>
                                        <div className="txt">
                                            <h2 onClick={() => {
                                                setIsPop(true);
                                                setIndex(index);
                                            }}>{(tit_len > 30) ? tit = tit.substr(0, 30) + "..." : tit}</h2>
                                            <p>{(desc_len > 250) ? desc = desc.substr(0, 250) + "..." : desc}</p>
                                        </div>
                                        <div className="pic" onClick={() => {
                                            setIsPop(true);
                                            setIndex(index);
                                            console.log(body);
                                            body.style.overflow = "hidden";
                                        }}>
                                            <img src={item.snippet.thumbnails.medium.url} />
                                            <i className="far fa-play-circle"></i>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>

                <div className="library">
                    <h1># LIBRARY</h1>
                    <div className='inner'>
                        <Fade left>
                            <div className="left">

                                <div className='time'>
                                    <strong className='date'>{d}</strong>
                                    <strong className='month'>{monthNames[m]}</strong>
                                </div>

                            </div>
                        </Fade>
                        <div className="right">
                            <div className="right-upper"></div>
                            <div className="right-lower">
                                <Fade bottom>
                                    <div className="box">
                                        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                                        <span>31.03.2022</span>
                                    </div>
                                </Fade>
                                <Fade bottom>
                                    <div className="box">
                                        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                                        <span>31.03.2022</span>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="issue">
                    <div className='inner'>
                        <div className='text'>
                            <h1># Featured<span><i className="fas fa-ellipsis-h"></i></span></h1>
                            <div className="articles">
                                {
                                    features.map((feature, index) => {
                                        return (
                                            <article key={index}>
                                                <h2>{feature.title}</h2>
                                                <p>{feature.desc}</p>
                                                <span>{feature.date}</span>
                                            </article>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='text'>
                            <h1># Trending<span><i className="fas fa-ellipsis-h"></i></span></h1>
                            <div className="articles">
                                {
                                    trends.map((trend, index) => {
                                        return (
                                            <article key={index}>
                                                <h2>{trend.title}</h2>
                                                <p>{trend.desc}</p>
                                                <span>{trend.date}</span>
                                            </article>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
                {isPop ? <Pop /> : null}
            </div>
        </section >
    )

    function Pop() {
        return (
            <aside className="pop">
                <iframe
                    src={"https://www.youtube.com/embed/" + youtube[index].snippet.resourceId.videoId} width='100%' height='100%' allowFullScreen
                ></iframe>
                <span onClick={() => {
                    setIsPop(false);
                    body.style.overflow = "auto";
                }}>close</span>
            </aside>
        )
    }
}

export default Youtube;
