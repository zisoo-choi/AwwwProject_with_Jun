import React from 'react';
import {useNavigate} from 'react-router-dom';

import '../css/Communication.css';

import {
    CommunicationBox,
    CommunicationHeader,
    CommunicationTitle,
    CommunicationSubTitle,
    CommunicationMain,
    QuestionDiv,
    Q,
    QuestionTitle,
    ReplCnt,
    HeaderLogo
} from '../styledComponent';

function Communication() {
    const navigate= useNavigate();
    const goMoveCommunication=() =>{
        navigate("/MusicTalk1");
    };

    

    return (
        <>
        <CommunicationBox>
            Music Talk

            <CommunicationMain>
                <QuestionDiv>
                    <Q>Q </Q>
                    <QuestionTitle onClick={goMoveCommunication}>놀면 뭐하니에서</QuestionTitle>
                    <hr className='hr-dotted'/>
                    <ReplCnt> 4A </ReplCnt>
                </QuestionDiv>

                <QuestionDiv>
                    <Q>Q </Q>
                    <QuestionTitle>아이폰 광고에서</QuestionTitle>
                    <hr className='hr-dotted'/>
                    <ReplCnt> 5A </ReplCnt>
                </QuestionDiv>

                <QuestionDiv>
                    <Q>Q </Q>
                    <QuestionTitle>R & B 노래 추천</QuestionTitle>
                    <hr className='hr-dotted'/>
                    <ReplCnt> 20A </ReplCnt>
                </QuestionDiv>

                <QuestionDiv>
                    <Q>Q </Q>
                    <QuestionTitle>하이틴 플리 추천</QuestionTitle>
                    <hr className='hr-dotted'/>
                    <ReplCnt> 40A </ReplCnt>
                </QuestionDiv>

            </CommunicationMain>
        </CommunicationBox>
        </>
    );
}

export default Communication;