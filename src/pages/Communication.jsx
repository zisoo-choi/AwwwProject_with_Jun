import React ,{useState}from 'react';
import {Routes,Route, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import MusicTalkModal from '../Modal/MusicTalkModal';

import '../css/Communication.css';
import Answer from './Answer';

import {
    CommunicationBox
} from '../styledComponent';

function Communication() {
    const navigate= useNavigate();
    const goAnswer=() =>{
        navigate("/Answer");
    };
    const[musictalkModal,setMusictalkModal]=useState(false)
    return (
        <>
        <Routes>
         <Route path='/Answer' exact element={<Answer/>}></Route>
         </Routes>

        <MusicTalkModal show={musictalkModal} onHide={()=>setMusictalkModal(false)}/>
        <CommunicationBox>
        <div className ="container show-fl">
                <div className='row'>
                    <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>

            <div className='MusicTalkDiv'>
                <p className='MusicTalkTitle'>Music Talk</p>
                <div className='MusicTalkTextAlign'>
                    <div className='SmallBox'>
                        <div className='QuestionBox'>
                            <div className='UserImg'></div>
                            <div className='QuestionTalk' onClick={goAnswer}>플레이리스트 추천해주세요 !!</div>
                        </div>

                        <div className='QuestionBox'>
                            <div className='UserImg'></div>
                            <div className='QuestionTalk'>R & B 노래 추천해주세요 !!</div>
                        </div>

                        <div className='QuestionBox'>
                            <div className='UserImg'></div>
                            <div className='QuestionTalk'>지금 드라마에 나오는 곡 뭔가요 ?</div>
                        </div>
                    </div>

                    <button type='button' className='WriteBtn'>
                        <FontAwesomeIcon icon={faPen} onClick={()=>setMusictalkModal(true)} className='WriteIcon'/>
                    </button>
                </div>
            </div>
            </div>
            </div>
            </div>
        </CommunicationBox>
        </>
    );
}

export default Communication;