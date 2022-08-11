import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/SignUp.css';
import {
    AllBox2,
    SignUpIdPwEmailTel,
    SignUpHeaderName,
    SignUpBox,
    TextId,
    TextPw,
    TextName,
    TextEmail,
    SignUpId,
    SignUpPw,
    SignUpName,
    SignUpEmail,
    LoginFullBox,
  
} from '../styledComponent';

function SignUp() {
    const navigate= useNavigate();
    const goHome=() =>{
        navigate("/");
    };
    return (
        <>

<div className='SignUpFullBox'>
        <AllBox2>
            <LoginFullBox>
                <SignUpHeaderName>Sign Up</SignUpHeaderName>
                <SignUpBox>
                    <SignUpIdPwEmailTel>
                        <SignUpId>
                            <TextId>아이디</TextId>
                            <input className='BtnTest' type='text' placeholder='아이디' required/>
                            <button className='SignUpIdBtn'>중복확인</button>
                        </SignUpId>

                        <SignUpPw>
                            <TextPw>비밀번호</TextPw>
                            <div className='PwBox'>
                                <input required type='password' minLength="6" maxLength="15" placeholder='비밀번호' />
                                <input required type='password' minLength="6" maxLength="15" placeholder='비밀번호 확인' />
                            </div>
                        </SignUpPw>

                        <SignUpName>
                            <TextName>이름</TextName>
                            <input required type='text' placeholder='이름' />
                        </SignUpName>

                        <SignUpEmail>
                            <TextEmail>이메일</TextEmail>
                            <input required type='email' placeholder='이메일 인증' />
                        </SignUpEmail>

                    </SignUpIdPwEmailTel>

                    <div className='SignUpBtnBox'>
                        <button className='SignUpBtn'>가입하기</button>
                    </div>

                </SignUpBox>
            </LoginFullBox>
        </AllBox2>
        </div>
        </>
    );
};

export default SignUp;