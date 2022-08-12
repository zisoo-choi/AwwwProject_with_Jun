import React,{useState} from 'react';
import '../css/Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom';


const Header = () => {
    const navigate= useNavigate();
    const goHome=() =>{
        navigate('/')
    };
    const goLogin=() =>{
        navigate("/Login");
    };
    const goSiginUp=() =>{
        navigate("/SignUp");
    };
    
    const goMusicTalk=() =>{
        navigate("/MusicTalk");
    };
    const goPlayList=() =>{
        navigate("/PlayList");
    };

    const goMyPage=() => {
        navigate("/MyPage");
    };

    
   
   
    return (
        <>
        
            <div className ="container show-fl">
                <div className='row'>
                    <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>
                        <div className='HeaderDiv'>

                            <div className='HeaderLogoAndSearch'>
                                <div className='HeaderLogo' onClick={goHome}>Aw</div>
                                
                                <div className='HeaderTopBar'>
                                    <div className='HeaderThreeBtn'>
                                        <button className='HeaderBtn MusicTalkBtn' type="button" onClick={goMusicTalk}><pre>Music Talk</pre></button>
                                        <button className='HeaderBtn PlayListBtn' type="button" onClick={goPlayList}><pre>Play List</pre></button>
                                        <button className='HeaderBtn MyPageBtn' type="button" onClick={goMyPage}><pre>My Page</pre></button>
                                    </div>
                                    <div className='HeaderSearch'>
                                        <input type="text" placeholder='검색어를 입력하세요.'></input>
                                        <button type='button' className='SearchBarBtn'>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className='HeaderSearchIcon'/>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='HeaderLoginAndSighUpBtn'>
                                <button className='HeaderLoginBtn' type="button" onClick={goLogin}>Login</button>
                                <button className='HeaderLoginBtn' type="button" onClick={goSiginUp}>SignUp</button>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;