import React from 'react';

const Footer = (props) => {
    return (
        <footer className='footer'>
            <div className="wrap">
                <div className="footer-lower">
                    <ul className="items">
                        <li className="item">
                            <div className="inner">
                                <h2>News Letter</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem repellat provident laborum necessitatibus tempora tenetur dicta adipisci ipsam quasi praesentium?</p>
                            </div>
                        </li>
                        <li className="item">
                            <div className="inner">
                                <h2>Working Hours</h2>
                                <p>Monday-Saturday<br></br>
                                    09:00-18:00 Saturday 09:00-12:00<br></br>
                                    Closed 25 December</p>
                            </div>
                        </li>
                        <li className="item">
                            <div className="inner">
                                <h2>Address</h2>
                                <p>198 West 21th street Suite 721<br></br>
                                    New York,NY 10010<br></br>
                                    Phone: +88(0) 101 0000 000 <br></br>
                                    Fax:+88(0)202 0000 001</p>
                            </div>
                        </li>
                        <li className="item">
                            <div className="inner">
                                <h2>Website policies</h2>
                                <a href="#">Terms&Conditions</a>
                                <a href="#">Privacy policy</a>
                                <a href="#">Accessibility</a>
                                <a href="#">Cookies policy</a>
                            </div>
                        </li>



                    </ul>

                </div>


            </div>


        </footer>




    )
}

export default Footer;