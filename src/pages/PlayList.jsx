import React from 'react';

import '../css/PlayList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart,
    faPlay,
    faPlus,
    faDownload,
    faVideo,
    faAlignJustify,
} from '@fortawesome/free-solid-svg-icons';

const PlayList = () => {

    return (
        <>
        <div className ="container show-fl">
                <div className='row'>
                    <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>

                        <div className='PlayListDiv'>
                            <p className='PlayListMainTitle'>Awww PlayList</p>
                            <div className='PlayListBar'>
                                <input type='checkbox' />
                                <p className='Rank'>순위</p>
                                <p className='Album'>곡/앨범</p>
                                <p className='Title'>제목</p>
                                <p className='Artist'>아티스트</p>
                                <p className='Listen'>듣기</p>
                                <p className='PlayLi'>재생목록</p>
                                <p className='MyLi'>내 리스트</p>
                                <p className='Like'>좋아요</p>
                            </div>

                            <div className='PlayListMusicBar'>
                                <input type='checkbox' />
                                <p>1</p>
                                <div className='AlbumPhoto'></div>
                                <div className='AlbumTitle'>
                                    <p className='AlbumBigTitle'>Big TItle</p>
                                    <p className='AlbumSmallTitle'>sub title</p>
                                </div>
                                <div className='ArtistName'>Name</div>
                                
                                    <FontAwesomeIcon icon={faPlay} />
                                    <FontAwesomeIcon icon={faPlus} />
                                    <FontAwesomeIcon icon={faDownload} />
                                    <FontAwesomeIcon icon={faVideo} />
                                
                            </div>


                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayList;