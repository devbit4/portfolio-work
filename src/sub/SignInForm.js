import React from 'react';

const SignInForm = (props) => {

    return (
        <section className="joinForm">
            <div className="joinForm-inner">
                <div className="signIn">
                    <div className="signIn-left">
                        <div className='inner'>
                            <h2>Sign In to Stories</h2>
                            <div className="platforms">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-google"></i>
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <form>
                                <fieldset>
                                    <legend className="h">signUpForm</legend>
                                    <table>
                                        <caption className="h">signUpFormInput</caption>
                                        <tbody>
                                            {/* id */}
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        id="id"
                                                        name="id"
                                                        placeholder="USER ID"
                                                    />
                                                </td>
                                            </tr>

                                            {/* password */}
                                            <tr>
                                                <td>
                                                    <input
                                                        type="password"
                                                        id="pwd"
                                                        name="pwd"
                                                        placeholder="PASSWORD"
                                                    />
                                                </td>
                                            </tr>

                                            {/* btn set */}
                                            <tr>
                                                <th colSpan="2" className="btnSet">
                                                    <input type="submit" value="SIGN IN" />
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </fieldset>
                            </form>
                            <a href="#"><span>Forget your password?</span></a>
                        </div>


                    </div>

                    <div className="signIn-right">
                        <div className="logo">
                            <i className="far fa-comments"></i>STORIES
                        </div>
                        <div className="text">
                            <h2>Hello, Friend!</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Delectus iusto totam laudantium.
                            </p>
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                props.signUpChange();
                            }}>
                                <span>SIGN UP</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SignInForm;
