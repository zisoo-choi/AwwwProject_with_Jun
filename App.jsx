import React from 'react';
import{Routes,Route} from 'react-router-dom'

import Playlist from './pagesJsx/Playlist';
import Login from './pagesJsx/Login';
import SignUp from './pagesJsx/SignUp';
import MyPage from './pagesJsx/MyPage';
import Communication from './pagesJsx/Communication';
import MoveCommunication from './pagesJsx/MoveCommunication';
import ShowPostList from './pagesJsx/ShowPostList';
import Rank from './pagesJsx/Rank';

function App() {
    return (
        <>
            <Routes> 
                    <Route path='/' element={<ShowPostList/>}> </Route>
                    <Route path='/Playlist' element={<Playlist/>}> </Route>
                    <Route path='/Rank' element={<Rank/>}> </Route>
                    <Route path='/Communication' element={<Communication/>}> </Route>
                    <Route path='/MyPage' element={<MyPage/>}> </Route>
                    <Route path='/Login' element={<Login/>}> </Route>
                    <Route path='/SignUp' element={<SignUp/>}>ddd </Route>
                    <Route path='/MoveCommunication' element={<MoveCommunication/>}> </Route>
            </Routes>
        </>
    );
};
export default App;