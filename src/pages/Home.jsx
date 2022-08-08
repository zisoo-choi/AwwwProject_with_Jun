import React from 'react';
import { HomeBox1 ,HomePhoto,HomePhoto1,HomePhotoBox,
    HomePhoto2,
    HeaderSearch,
    FullView,
    Header2, 
    LogoDiv2,
    RankMain,
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
    RankAdd,} from '../StyledComponent';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faHeart,
    faPlay,
    faPlus,
    faDownload,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const img={
        height: "40vh",  
        width: "20vw",
    }
    const imgs={
        height: "25vh",  
        width: "10vw",
    }
    return (
        <>
        <div className ="container show-fl">
            <div className='row'>
                <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>
            <HomeBox1>
                <HomePhoto1>
                    <img src="/img/태연.jpg" style={img}   /> 
                    
                </HomePhoto1>
               
                <div>
                <HomePhoto>    
                    <img src="/img/태연.jpg" style={imgs}  /> 
                </HomePhoto>
                <HomePhoto>    
                    <img src="/img/태연.jpg" style={imgs} /> 
                </HomePhoto>
                </div>
                <div >
                <HomePhoto2>    
                    <img src="/img/태연.jpg" style={imgs} /> 
                </HomePhoto2>
                <HomePhoto2>    
                    <img src="/img/태연.jpg" style={imgs} /> 
                </HomePhoto2>
                </div>
                
                
            </HomeBox1>
          
        <FullView>
                    <Header2>
                        <LogoDiv2>
                            <div >
                                <HeaderTitle>TOP100</HeaderTitle>
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
                </FullView>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;