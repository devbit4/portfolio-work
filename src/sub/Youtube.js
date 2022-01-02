import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {
    let [data, setData] = useState([]);
    let [isPop, setIsPop] = useState(false);
    let [index, setIndex] = useState(0);

    let [features, setFeatures] = useState([]);
    let [trends, setTrends] = useState([]);


    const api_key = "AIzaSyB7VIAECTixPlj0sr-goHwkmNRFIwxZntA";
    const playListId = "PLYOPkdUKSFgX5CgKf68RJzJHec0XEdBNd";
    const num = 4;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api_key}&playlistId=${playListId}&maxResults=${num}`;

    useEffect(() => {
        axios
            .get(url)
            .then(json => {
                console.log(json.data.items);
                setData(json.data.items);
            })

        axios.get("./dbs/youtube.json")
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
                    <h1>WHAT'S NEWS?</h1>
                    {
                        data.map((item, index) => {
                            let tit = item.snippet.title;
                            let tit_len = tit.length;
                            let desc = item.snippet.description;
                            let desc_len = desc.length;

                            return (
                                <article key={index}>
                                    <div className="inner">
                                        <div className="circle"><i className="far fa-circle"></i></div>
                                        <div className="num">
                                            <strong>{index + 20}</strong>
                                            <span>March</span>
                                        </div>
                                        <div className="txt">
                                            <h2>{(tit_len > 30) ? tit = tit.substr(0, 30) + "..." : tit}</h2>
                                            <p>{(desc_len > 250) ? desc = desc.substr(0, 250) + "..." : desc}</p>
                                        </div>
                                        <div className="pic" onClick={() => {
                                            setIsPop(true);
                                            setIndex(index);
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
                    <h1>LIBRARY</h1>
                    <div className='inner'>
                        <div className="left"></div>
                        <div className="right">
                            <div className="right-upper"></div>
                            <div className="right-lower">
                                <div className="box">
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                                    <span>31.03.2022</span>
                                </div>
                                <div className="box">
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                                    <span>31.03.2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="issue">
                    <div className='inner'>
                        <div className='text'>
                            <h1>Featured<span><i className="fas fa-ellipsis-h"></i></span></h1>
                            {
                                features.map((feature, index) => {
                                    return (
                                        <article key={index}>
                                            <h2>{feature.title}</h2>
                                            <p>{feature.desc}</p>
                                            <span>{"- " + feature.date}</span>
                                        </article>
                                    )
                                })
                            }
                        </div>
                        <div className='text'>
                            <h1>#Trending<span><i className="fas fa-ellipsis-h"></i></span></h1>
                            {
                                trends.map((trend, index) => {
                                    return (
                                        <article key={index}>
                                            <h2>{trend.title}</h2>
                                            <p>{trend.desc}</p>
                                            <span>{"- " + trend.date}</span>
                                        </article>
                                    )
                                })
                            }
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
                    src={"https://www.youtube.com/embed/" + data[index].snippet.resourceId.videoId} width='100%' height='100%' allowFullScreen
                ></iframe>
                <span onClick={() => {
                    setIsPop(false);
                }}>close</span>
            </aside>
        )
    }
}

export default Youtube;
