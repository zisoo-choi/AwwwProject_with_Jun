/*
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

*/

import React ,{useState}from 'react';

import '../css/PlayList.css';

import MusicTalkModal from '../Modal/MusicTalkModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart,
    faPlay,
    faPlus,
    faDownload,
    faVideo,
    faAlignJustify,
    faPen
} from '@fortawesome/free-solid-svg-icons';
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

const PlayList = () => {
const[musictalkModal,setMusictalkModal]=useState(false)

    return (
        <>
        <MusicTalkModal show={musictalkModal} onHide={()=>setMusictalkModal(false)}/>
        <div className ="container show-fl">
                <div className='row'>
                    <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>

                    <div className='PlayListFooterBtn'>
                        <div className='PlayListDiv'>
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
                        
                            <div className='PlyBtn'>
                                <button type='button' className='WriteBtn2'>
                                    <FontAwesomeIcon icon={faPen} onClick={()=>setMusictalkModal(true)} className='WriteIcon'/>
                                </button>
                            </div>

                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayList;