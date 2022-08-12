import React from 'react';
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
import '../css/Login.css';
const SnsBtn = () => {
    return (
        <SocialLogin>
        <SocialCheck>
            <CheckBar>소셜 로그인</CheckBar>
            <input type="checkbox" />
        </SocialCheck>
        <SnsBox>
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
        </SnsBox>
    </SocialLogin>
    );
};

export default SnsBtn;