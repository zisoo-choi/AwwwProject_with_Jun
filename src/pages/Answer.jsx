
import React ,{useState}from 'react';
import {Routes,Route, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faComment,faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import MusicTalkModal from '../Modal/MusicTalkModal';
import Communication from '../pages/Communication';

import '../css/Communication.css';
import '../css/Answer.css';

import {
    CommunicationBox
} from '../styledComponent';

const Answer = () => {
    const navigate= useNavigate();
    const goMusicTalk=() =>{
        navigate("/MusicTalk");
    };
    return (
        <>
        <Routes>
         <Route path='/MusicTalk' exact element={<Communication/>}></Route>
         </Routes>
        
        <CommunicationBox>
        <div className ="container show-fl">
                <div className='row'>
                    <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>

            <div className='MusicTalkDiv'>
                <p className='MusicTalkTitle' onClick={goMusicTalk}>Music Talk</p>
                <div >
                    <div className='SmallBox'>
                    <div className='AnswerTitle'>
                        <div>
                        <h2><strong>Title</strong></h2>
                        </div>
                    <div>
                    <div>
                    <p >contents</p>
                    </div>
                    <div className='AnswerIcon'>
                    <div >
                    <FontAwesomeIcon icon={faHeart} />
                    999
                    </div>
                    <div className='Comment'>
                    <FontAwesomeIcon icon={faComment} />
                    999
                    </div>
                    </div>
                    </div>
                    <hr/>
                   <div>
                    댓글
                    </div>    
                    </div>   

                       
                 <div className='AnswerBar'> 
                
                 <div className='center'>
                <div className='AnswerCenter'>
                    <input  placeholder='댓글을 입력하세요'></input>
                    <FontAwesomeIcon className="Fly"icon={faPaperPlane} />
                </div>
                
                </div>
                
                </div>
                
                </div>  
            </div>
            
            </div>
            
            </div>
            
            </div>
            
            </div>
        </CommunicationBox>
        </>
    );
};

export default Answer;