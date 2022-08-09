import React from 'react';

import PlayList from './pages/PlayList';
import MyPage from './pages/MyPage';

import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import{Routes,Route} from 'react-router-dom';

import Communication from './pages/Communication';


const App = () => {
  return (
    <div>
      <Header/>
        
      <Routes>
        <Route path='/'  exact element={<Home/>}></Route>
        <Route path='/MusicTalk'  element={<Communication/>}></Route>
        
        <Route path='/PlayList'  element={<PlayList/>}></Route>
        <Route path='/MyPage'  element={<MyPage/>}></Route>

        <Route path='/Login' element={<Login/>}> </Route>
        <Route path='/SignUp' element={<SignUp/>}> </Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;