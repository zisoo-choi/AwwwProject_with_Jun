import React from 'react';
import '../css/MoveCommunication.css';
import '../css/Communication.css';

import {
    CommunicationTitle,
    CommunicationSubTitle,
    CommunicationMain,
    Q,
    MoveCommunicationBox,
    MoveCommunicationHeader,
    QuestionTextDiv,
    CommunicationQuestion,
    AnswerTextDiv,
} from '../styledComponent';




function MoveCommunication() {
  
    return (
        <>
            <MoveCommunicationBox>
                Music Talk

                <CommunicationMain>
                    <QuestionTextDiv>
                        <Q>Q </Q>
                        <CommunicationQuestion>
                            놀면 뭐하니에 나온 노래 추천 <br />
                            놀면 뭐하니 플레이리스트 추천해주세요 !!
                        </CommunicationQuestion>
                    </QuestionTextDiv>
                    <hr className='hr-solid'/>
                    <AnswerTextDiv>
                        <Q>A </Q>
                        <input type='text' placeholder='답변을 입력해주세요.' className='CommunicationAnswer'/>
                    </AnswerTextDiv>
                </CommunicationMain>
            </MoveCommunicationBox>
        </>
    );
}

export default MoveCommunication