/*
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

                        <div>
                            <HomePhoto2>    
                                <img src="/img/태연.jpg" style={imgs} /> 
                            </HomePhoto2>

                            <HomePhoto2>    
                                <img src="/img/태연.jpg" style={imgs} /> 
                            </HomePhoto2>
                        </div>
                    </HomeBox1>
*/


import React from 'react';
import '../css/Home.css'
import '../css/MyPage.css';


import {
    HomeBox1,
    HomePhoto,
    HomePhoto1,
    HomePhoto2,
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
        width: "100%",
    }
    const imgs={
        height: "25vh",  
        width: "100%",
    }
    return (
        <>
        <div className ="container show-fl">
            <div className='row'>
                <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>
                    
                <div className='HomePageDiv'>
                        
                        <div className='HomeInBox'>
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




                    
                    
                    
          

                    <FullView>
                        <Header2>
                            <LogoDiv2>
                                <div >
                                    <HeaderTitle>TOP10</HeaderTitle>
                                </div>
                            </LogoDiv2>
                        </Header2>

                        <div className='RankTitle'>
                            <div>순위</div>
                            <div className='SongTitle'>곡정보</div>
                            <div className='Album'>앨범</div>
                            <div className='Like'>좋아요</div>
                            <div className='Litening'>듣기</div>
                            <div className='Add'>담기</div>
                            <div className='Download'>다운</div>
                            <div className='MusicVideo'>뮤비</div>
                        </div>


                        <div className='RankBox'>
                            <div className='OneMusic'>
                                <div className='MusicRank'>

                                    <input type='checkbox'></input>
                                    <RankingNum>1</RankingNum>
                                    <div className='PhotoDiv'></div>
                                    <div className='TopTenTitle'>
                                        <MusicMainNameRank>Music Title</MusicMainNameRank>
                                        <MusicSubNameRank>Music Sub Title</MusicSubNameRank>    
                                    </div>
                                    <RankingAlbum>홍길동 1집</RankingAlbum>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <FontAwesomeIcon icon={faPlay} />
                                    <FontAwesomeIcon icon={faPlus} />
                                    <FontAwesomeIcon icon={faDownload} />
                                    <FontAwesomeIcon icon={faVideo} />
                                    
                                </div>
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