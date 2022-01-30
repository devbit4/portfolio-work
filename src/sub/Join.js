import React, { useRef, useState, useEffect } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
const Join = (props) => {

    useEffect(() => {
        console.log(process.env.REACT_APP_FIREBASE_API_KEY)
    })
    const signUpBtn = useRef(null);
    const signInBtn = useRef(null);
    const [signUp, setSignUp] = useState(true);

    const signUpChange = () => {
        setSignUp(true);
        signUpBtn.current.classList.add("on");
        signInBtn.current.classList.remove("on");
    }
    const signInChange = () => {
        setSignUp(false);
        signUpBtn.current.classList.remove("on");
        signInBtn.current.classList.add("on");
    }

    return (<section className='content join'>
        <div className="inner">
            <h1>JOIN</h1>
            <div className='btns'>
                <button ref={signUpBtn} className="on" onClick={() => {
                    signUpChange()
                }}># SIGN UP</button>
                <button ref={signInBtn} onClick={() => {
                    signInChange()
                }}># SIGN IN</button>
            </div>

            {
                signUp === true ?
                    <SignUpForm signInChange={signInChange} authService={props.authService}></SignUpForm>
                    : <SignInForm signUpChange={signUpChange}></SignInForm>

            }

        </div>
    </section >
    )
};

export default Join;