import React,{useState} from 'react';
import '../css/Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom';
import Musictalk from '../Modal/Musictalk';

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
<<<<<<< HEAD
    const goPlaylist=() =>{
        navigate("/MusicTalk");
    };
    const gotemp=() =>{
        navigate("/temp");
    };
    const[musictalkModal,setMusictalkModal]=useState(false)
=======

    const goPlayList=() =>{
        navigate("/PlayList");
    };

    const goMyPage=() => {
        navigate("/MyPage");
    };

>>>>>>> ee51d6372e5c670589ac3df53af6d5f8124fc5ab
    return (
        <>
        <Musictalk show={musictalkModal} onHide={()=>setMusictalkModal(false)}/>
            <div className ="container show-fl">
                <div className='row'>
                    <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>

                        <div className='HeaderDiv' >
                            <div className='HeaderLogo' onClick={goHome}>Aw</div>
                            
                            <div className='HeaderTopBar'>
                                <div className='HeaderButtonBar'>
                                    <button className='HeaderBtn' type="button" onClick={goMusicTalk}>Music Talk</button>
<<<<<<< HEAD
                                    <button className='HeaderBtn' type="button" onClick= {gotemp} >Play List </button>
                                    <button className='HeaderBtn' type="button" onClick={()=>setMusictalkModal(true)}>My Page</button>
=======
                                    <button className='HeaderBtn' type="button" onClick={goPlayList} >Play List</button>
                                    <button className='HeaderBtn' type="button" onClick={goMyPage}>My Page</button>
>>>>>>> ee51d6372e5c670589ac3df53af6d5f8124fc5ab
                                </div>
                                <div className='HeaderSearch'>
                                    <input type="text" placeholder='검색어를 입력하세요 .'></input>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='HeaderSearchIcon'/>
                                </div>
                            
                                <div className='HeaderLoginAndSignUp'>
                                    <button className='HeaderBtn HeaderLoginBtn' type="button" onClick={goLogin}>Login</button>
                                    <button className='HeaderBtn HeaderLoginBtn' type="button" onClick={goSiginUp}>SignUp</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;