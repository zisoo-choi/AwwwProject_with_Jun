import React ,{useState}from 'react';

import '../css/PlayList.css';
import {
    
    FullView,
    Header2, 
    LogoDiv2,
    HeaderTitle,
    RankPhotoBox,
    RankingNum,
    MusicRank,
    MusicPhotoRank,
    RankRepl,
    MusicMainNameRank,
    MusicSubNameRank,
    RankTitle,
    RankingBox,
    RankingAlbum,
    RankLike,
    RankAdd,

} from '../styledComponent';
import '../css/Communication.css';
import MusicTalkModal from '../Modal/MusicTalkModal';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome'
import {
    faHeart,
    faPlay,
    faPlus,
    faDownload,
    faVideo,
    faPen
    
} from '@fortawesome/free-solid-svg-icons';

const PlayList = () => {
    const[musictalkModal,setMusictalkModal]=useState(false)
    return (
        <>
<MusicTalkModal show={musictalkModal} onHide={()=>setMusictalkModal(false)}/>
        <div className ="container show-fl">
                <div className='row'>
                    <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>
                    <FullView>
                        <Header2>
                            <LogoDiv2>
                                <div >
                                    <HeaderTitle>play list</HeaderTitle>
                                </div>
                            </LogoDiv2>
                        </Header2>

                        <RankTitle>
                            <RankingBox/>
                            <span>순위</span>
                            <span className='SongTitle'>곡정보</span>
                            <span className='Album'>앨범</span>
                            <span className='Like'>좋아요</span>
                            <span className='Litening'>듣기</span>
                            <span className='Add'>담기</span>
                            <span className='Download'>다운</span>
                            <span className='MusicVideo'>뮤비</span>
                        </RankTitle>

                        <div>
                            <div>
                                <MusicRank>
                                    <RankPhotoBox>
                                        <RankingBox/>
                                        <RankingNum>1</RankingNum>
                                        <MusicPhotoRank />
                                            <div>
                                                <MusicMainNameRank>Music Title</MusicMainNameRank>
                                                <MusicSubNameRank>Music Sub Title</MusicSubNameRank>    
                                            </div>
                                    </RankPhotoBox>

                                    <RankingAlbum>홍길동 1집</RankingAlbum>

                                    <RankRepl>
                                        <FontAwesomeIcon icon={faHeart} />
                                            999
                                    </RankRepl>

                                    <RankLike>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </RankLike>
                                    <RankAdd>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </RankAdd>
                                    <RankAdd>
                                        <FontAwesomeIcon icon={faDownload} />
                                    </RankAdd>
                                    <RankAdd>
                                        <FontAwesomeIcon icon={faVideo} />
                                    </RankAdd>
                                </MusicRank>
                            </div>
                            
                            <div>
                                <MusicRank>
                                    <RankPhotoBox>
                                        <RankingBox/>
                                        <RankingNum>2</RankingNum>
                                        <MusicPhotoRank />
                                        <div>
                                            <MusicMainNameRank>Music Title</MusicMainNameRank>
                                            <MusicSubNameRank>Music Sub Title</MusicSubNameRank>
                                        </div>
                                    </RankPhotoBox>
                                    
                                    <RankingAlbum>홍길동 1집</RankingAlbum>
                                    <RankRepl>
                                        <FontAwesomeIcon icon={faHeart} />
                                            999
                                    </RankRepl>
                                    
                                    <RankLike>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </RankLike>
                                    <RankAdd>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </RankAdd>
                                    <RankAdd>
                                        <FontAwesomeIcon icon={faDownload}   />
                                    </RankAdd>
                                    <RankAdd>
                                        <FontAwesomeIcon icon={faVideo}   />
                                    </RankAdd>
                                </MusicRank>
                            </div>
                        </div>
                        <button type='button' className='WriteBtn'>
                        <FontAwesomeIcon icon={faPen} onClick={()=>setMusictalkModal(true)} className='WriteIcon'/>
                    </button>
                </FullView>
                       


                            
                        

                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayList;