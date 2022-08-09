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
                            <div className='UserPhoto'></div>
                        </div>

                        <div className='PlayListCreateBtn'>
                            <button type='button' className='WriteBtn2'>
                                <FontAwesomeIcon icon={faPen} className='WriteIcon'/>
                            </button>
                        </div>

                        <div className='MyPlayListDiv'>
                            <div className='PlayListInBox'>
                                <div className='PlayListCollection'>
                                    <div className='One'>
                                        <div className='MyPlayList'></div>
                                        <div className='MyPlayList'></div>
                                    </div>
                                    <div className='Two'>
                                        <div className='MyPlayList'></div>
                                        <div className='MyPlayList'></div>
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