import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
const Join = (props) => {

    const [signUp, setSignUp] = useState(true);


    return (<section className='content'>
        <div className="inner">
            <h1>JOIN</h1>
            <span onClick={() => {
                setSignUp(false);
            }}>signIn</span>
            <span onClick={() => {
                setSignUp(true);
            }}>signUp</span>

            {
                signUp === true ?
                    <SignUpForm></SignUpForm>
                    : <SignInForm></SignInForm>

            }





        </div>
    </section >
    )
};

export default Join;