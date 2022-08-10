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
                    <div className='HeaderTitleTopTen'>TOP100</div>

                                <div className='RankTitle'>
                                    <input type='checkbox' className='RankFirstCheckBox'></input>
                                    <div className='Ranking'>순위</div>
                                    <div className='SongTitle'>곡정보</div>
                                    <div className='Album'>앨범</div>
                                    <div className='Like'>좋아요</div>
                                    <div className='Litening'>듣기</div>
                                    <div className='Add'>담기</div>
                                    <div className='Download'>다운</div>
                                    <div className='MusicVideo'>뮤비</div>
                                    
                                </div>

                                <div className='RankBox'>
                                    <div className='MusicRank'>
                                        <input type='checkbox'></input>
                                        <div className='RankingNum OneTitle'>1</div>
                                        <div className='PhotoAndTitle'>
                                            <div className='PhotoDiv'></div>
                                            <div className='TopTenTitle'>
                                                <div className ='MusicMainNameRank'>Music Title</div>
                                                <div className ='MusicSubNameRank'>Music Sub Title</div>    
                                            </div>
                                        </div>
                                        <div className='RankAlbumName'>홍길동 1집</div>
                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faHeart} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlay} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlus} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faDownload} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faVideo} />
                                        </button>
                                    </div>
                                </div>


                                <div className='RankBox'>
                                    <div className='MusicRank'>
                                        <input type='checkbox'></input>
                                        <div className='RankingNum OneTitle'>2</div>
                                        <div className='PhotoAndTitle'>
                                            <div className='PhotoDiv'></div>
                                            <div className='TopTenTitle'>
                                                <div className ='MusicMainNameRank'>Music Title</div>
                                                <div className ='MusicSubNameRank'>Music Sub Title</div>    
                                            </div>
                                        </div>
                                        <div className='RankAlbumName'>홍길동 1집</div>
                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faHeart} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlay} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlus} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faDownload} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faVideo} />
                                        </button>
                                    </div>
                                </div>



                                <div className='RankBox'>
                                    <div className='MusicRank'>
                                        <input type='checkbox'></input>
                                        <div className='RankingNum OneTitle'>3</div>
                                        <div className='PhotoAndTitle'>
                                            <div className='PhotoDiv'></div>
                                            <div className='TopTenTitle'>
                                                <div className ='MusicMainNameRank'>Music Title</div>
                                                <div className ='MusicSubNameRank'>Music Sub Title</div>    
                                            </div>
                                        </div>
                                        <div className='RankAlbumName'>홍길동 1집</div>
                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faHeart} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlay} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlus} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faDownload} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faVideo} />
                                        </button>
                                    </div>
                                </div>



                                <div className='RankBox'>
                                    <div className='MusicRank'>
                                        <input type='checkbox'></input>
                                        <div className='RankingNum OneTitle'>4</div>
                                        <div className='PhotoAndTitle'>
                                            <div className='PhotoDiv'></div>
                                            <div className='TopTenTitle'>
                                                <div className ='MusicMainNameRank'>Music Title</div>
                                                <div className ='MusicSubNameRank'>Music Sub Title</div>    
                                            </div>
                                        </div>
                                        <div className='RankAlbumName'>홍길동 1집</div>
                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faHeart} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlay} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlus} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faDownload} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faVideo} />
                                        </button>
                                    </div>
                                </div>



                                <div className='RankBox'>
                                    <div className='MusicRank'>
                                        <input type='checkbox'></input>
                                        <div className='RankingNum OneTitle'>5</div>
                                        <div className='PhotoAndTitle'>
                                            <div className='PhotoDiv'></div>
                                            <div className='TopTenTitle'>
                                                <div className ='MusicMainNameRank'>Music Title</div>
                                                <div className ='MusicSubNameRank'>Music Sub Title</div>    
                                            </div>
                                        </div>
                                        <div className='RankAlbumName'>홍길동 1집</div>
                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faHeart} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlay} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlus} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faDownload} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faVideo} />
                                        </button>
                                    </div>
                                </div>




                                <div className='RankBox'>
                                    <div className='MusicRank'>
                                        <input type='checkbox'></input>
                                        <div className='RankingNum OneTitle'>6</div>
                                        <div className='PhotoAndTitle'>
                                            <div className='PhotoDiv'></div>
                                            <div className='TopTenTitle'>
                                                <div className ='MusicMainNameRank'>Music Title</div>
                                                <div className ='MusicSubNameRank'>Music Sub Title</div>    
                                            </div>
                                        </div>
                                        <div className='RankAlbumName'>홍길동 1집</div>
                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faHeart} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlay} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlus} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faDownload} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faVideo} />
                                        </button>
                                    </div>
                                </div>



                                <div className='RankBox'>
                                    <div className='MusicRank'>
                                        <input type='checkbox'></input>
                                        <div className='RankingNum OneTitle'>7</div>
                                        <div className='PhotoAndTitle'>
                                            <div className='PhotoDiv'></div>
                                            <div className='TopTenTitle'>
                                                <div className ='MusicMainNameRank'>Music Title</div>
                                                <div className ='MusicSubNameRank'>Music Sub Title</div>    
                                            </div>
                                        </div>
                                        <div className='RankAlbumName'>홍길동 1집</div>
                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faHeart} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlay} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlus} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faDownload} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faVideo} />
                                        </button>
                                    </div>
                                </div>




                                <div className='RankBox'>
                                    <div className='MusicRank'>
                                        <input type='checkbox'></input>
                                        <div className='RankingNum OneTitle'>8</div>
                                        <div className='PhotoAndTitle'>
                                            <div className='PhotoDiv'></div>
                                            <div className='TopTenTitle'>
                                                <div className ='MusicMainNameRank'>Music Title</div>
                                                <div className ='MusicSubNameRank'>Music Sub Title</div>    
                                            </div>
                                        </div>
                                        <div className='RankAlbumName'>홍길동 1집</div>
                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faHeart} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlay} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlus} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faDownload} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faVideo} />
                                        </button>
                                    </div>
                                </div>





                                <div className='RankBox'>
                                    <div className='MusicRank'>
                                        <input type='checkbox'></input>
                                        <div className='RankingNum OneTitle'>9</div>
                                        <div className='PhotoAndTitle'>
                                            <div className='PhotoDiv'></div>
                                            <div className='TopTenTitle'>
                                                <div className ='MusicMainNameRank'>Music Title</div>
                                                <div className ='MusicSubNameRank'>Music Sub Title</div>    
                                            </div>
                                        </div>
                                        <div className='RankAlbumName'>홍길동 1집</div>
                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faHeart} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlay} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlus} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faDownload} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faVideo} />
                                        </button>
                                    </div>
                                </div>







                                <div className='RankBox'>
                                    <div className='MusicRank'>
                                        <input type='checkbox'></input>
                                        <div className='RankingNum TwoTitle'>10</div>
                                        <div className='PhotoAndTitle'>
                                            <div className='PhotoDiv'></div>
                                            <div className='TopTenTitle'>
                                                <div className ='MusicMainNameRank'>Music Title</div>
                                                <div className ='MusicSubNameRank'>Music Sub Title</div>    
                                            </div>
                                        </div>
                                        <div className='RankAlbumName'>홍길동 1집</div>
                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faHeart} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlay} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faPlus} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faDownload} />
                                        </button>

                                        <button type='button' className='PlyBtns'>
                                            <FontAwesomeIcon className='IconMargin' icon={faVideo} />
                                        </button>
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