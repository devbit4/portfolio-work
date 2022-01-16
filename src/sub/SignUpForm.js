import { useEffect, useRef, useState } from 'react';

function SignUpForm(props) {
    const frame = useRef(null);

    const initVal = {
        userid: '',
        pwd1: '',
        pwd2: '',
        email: '',
        news: '',
    };
    const [val, setVal] = useState(initVal);
    const [err, setErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVal({ ...val, [name]: value });
    };

    const handleCheck = (e) => {
        const { name } = e.target;
        const isCheck = e.target.checked;
        setVal({ ...val, [name]: isCheck });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        setErr(check(val));
        console.log(val);
    };

    const check = (val) => {
        let errs = {};
        let eng = /[a-zA-Z]/;
        let num = /[0-9]/;
        let spc = /[!@#$%^&*]/;

        if (!val.userid || val.userid.length < 5) {
            errs.userid = '아이디 5글자 이상입력';
        }
        if (
            !val.pwd1 ||
            val.pwd1.length < 5 ||
            !eng.test(val.pwd1) ||
            !num.test(val.pwd1) ||
            !spc.test(val.pwd1)
        ) {
            errs.pwd1 = '비밀번호는 5글자 이상, 문자,숫자,특수문자를 모두 포함';
        }
        if (!val.email || val.email.length < 8 || !/@/.test(val.email)) {
            errs.email = '이메일주소를 8글자 이상입력';
        }
        if (!val.pwd2 || val.pwd1 !== val.pwd2) {
            errs.pwd2 = '두개의 비밀번호를 동일하게 입력';
        }
        if (!val.news) {
            errs.news = '동의여부를 선택하세요';
        }
        return errs;
    };

    useEffect(() => {
        frame.current.classList.add('on');
        console.log(err);
        const len = Object.keys(err).length;
        if (len === 0 && isSubmit) {
            console.log('succeed');
            setSuccess(true);
        } else {
            console.log('fail');
            setSuccess(false);
        }
    }, [err]);

    return (
        <section className="joinForm" ref={frame}>
            <div className="joinForm-inner">
                {success ? <div>회원가입을 축하합니다.</div> : null}

                <div className="signUp">
                    <div className="signUp-left">
                        <div className="logo">
                            <i className="far fa-comments"></i>STORIES
                        </div>
                        <div className="text">
                            <h2>Welcome Back!</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Delectus iusto totam laudantium.
                            </p>
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                props.signInChange();
                            }}>
                                <span>SIGN IN</span>
                            </a>
                        </div>
                    </div>
                    <div className="signUp-right">
                        <h2>Create Account</h2>
                        <div className="platforms">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-google"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <legend className="h">signUpForm</legend>
                                <table>
                                    <caption className="h">signUpFormInput</caption>
                                    <tbody>
                                        {/* userid */}
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    id="userid"
                                                    name="userid"
                                                    placeholder="USER ID"
                                                    onChange={handleChange}
                                                />
                                                <p className="err">{err.userid}</p>
                                            </td>
                                        </tr>

                                        {/* password */}
                                        <tr>
                                            <td>
                                                <input
                                                    type="password"
                                                    id="pwd1"
                                                    name="pwd1"
                                                    placeholder="PASSWORD"
                                                    onChange={handleChange}
                                                />
                                                <p className="err">{err.pwd1}</p>
                                            </td>
                                        </tr>

                                        {/* re password */}
                                        <tr>
                                            <td>
                                                <input
                                                    type="password"
                                                    id="pwd2"
                                                    name="pwd2"
                                                    placeholder="RE-PASSWORD"
                                                    onChange={handleChange}
                                                />
                                                <p className="err">{err.pwd2}</p>
                                            </td>
                                        </tr>

                                        {/* email */}
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="EMAIL"
                                                    onChange={handleChange}
                                                />
                                                <p className="err">{err.email}</p>
                                            </td>
                                        </tr>

                                        {/* news letter */}
                                        <tr>
                                            <td>
                                                <span>News Letter: </span>
                                                <label htmlFor="yes">Yes</label>
                                                <input
                                                    type="radio"
                                                    id="yes"
                                                    name="news"
                                                    onChange={handleCheck}
                                                />

                                                <label htmlFor="no">No</label>
                                                <input
                                                    type="radio"
                                                    id="no"
                                                    name="news"
                                                    onChange={handleCheck}
                                                />
                                                <span className="err">{err.news}</span>
                                            </td>
                                        </tr>

                                        {/* btn set */}
                                        <tr>
                                            <th colSpan="2" className="btnSet">
                                                <input type="submit" value="SEND" />
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </fieldset>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SignUpForm;
