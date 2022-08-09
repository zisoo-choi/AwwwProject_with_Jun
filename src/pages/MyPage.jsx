import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import '../css/MyPage.css';

const MyPage = () => {
    return (
        <>
        <div className ="container show-fl">
            <div className='row'>
                <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>
                    <div className='MyPageDiv'>

                        <div className='Profile'>
                        <p className='UserName'>Welcome User !</p>
                            <div className='UserPhoto'></div>
                        </div>

                        <div className='PlayListCreateBtn'>
                            <p className='MyPlayListText'>UserName 님의 PlayList</p>
                            <button type='button' className='WriteBtn2'>
                                <FontAwesomeIcon icon={faPen} className='WriteIcon'/>
                            </button>
                        </div>

                        <div className='MyPlayListDiv'>
                        
                            <div className='PlayListInBox'>
                                <div className='PlayListCollection'>
                                    <div className='One'>
                                        <div className='MyPlayList A'></div>
                                        <div className='MyPlayList B'></div>
                                    </div>
                                    <div className='Two'>
                                        <div className='MyPlayList C'></div>
                                        <div className='MyPlayList D'></div>
                                    </div>  
                                </div>

                                <div className='PlayListCollection'></div>
                                <div className='PlayListCollection'></div>
                                <div className='PlayListCollection'></div>

                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        </>
    );
};

export default MyPage;