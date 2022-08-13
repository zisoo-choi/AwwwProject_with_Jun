import React,{useState} from 'react';
import {Link, Outlet} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


import '../css/Login.css';
import{
    AllBox,
    LoginName,
    LoginBox,
    InputId,
    InputPw,
    LoginBtnBar,
    CheckBar,
    SocialCheck,
    SnsBox,
    InstaAcnt,
    AppleAcnt,
    TwitterAcnt,
    IdpwBox,
    SocialLogin,
    LinkText,
    LoginBtnBottomBar,
    LoginFullBox,
} from '../styledComponent';


function Login() {
    const navigate= useNavigate();
    const goHome=() =>{
        navigate("/");
    };
    const [SnsBtn,setSnsBtn]=useState(false);
    const toggleBtn=()=>{
        setSnsBtn((SnsBtn)=>!SnsBtn);
    }
    
    return (
        <>
            
            <div className='LoginFullBox'>
            <AllBox>
                <LoginFullBox>
                    <LoginName>Login</LoginName>
                    <LoginBox>
                        <IdpwBox>
                            <InputId>
                                <input name='placeId' type="text" placeholder='ID'/>
                            </InputId>
                            <InputPw>
                                <input type="password" placeholder='PW'/>
                            </InputPw>
                            <LoginBtnBar>
                                <button className='LoginBtn'>Login</button>
                            </LoginBtnBar>
                        </IdpwBox>
                       
                        <SocialLogin >
                             <SocialCheck >
                                <CheckBar>소셜 로그인</CheckBar>
                                <input type="checkbox" onClick={toggleBtn}/>
                            </SocialCheck>
                            {SnsBtn ? (<SnsBox>
                                <InstaAcnt>
                                    <button onClick={() => window.open('https://www.instagram.com/', '_blank')} className='InstaBtn'>Instargram</button>
                                </InstaAcnt>
                                <AppleAcnt>
                                    <button onClick={() => window.open('https://www.applemusic.co.kr/shop/member.html?type=login', '_blank')} className='AppleBtn'>Apple</button>
                                </AppleAcnt>
                                <TwitterAcnt>
                                    <button onClick={() => window.open('https://twitter.com/?lang=ko', '_blank')} className='TwitterBtn'>Twitter</button>
                                </TwitterAcnt>
                                <LoginBtnBottomBar>
                                    
                                </LoginBtnBottomBar>
                            </SnsBox>) :<>"??"</>}
                          
                        </SocialLogin>
                    </LoginBox>
                    
                    <LinkText>
                        <Link to="/signUp">아직 계정이 없으시다면 . . .</Link>
                    </LinkText>
                </LoginFullBox>
            </AllBox>
            </div>
            <Outlet/>
        </>
    );
};

export default Login;