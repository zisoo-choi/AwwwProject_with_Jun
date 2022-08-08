import React from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import{Routes,Route} from 'react-router-dom';


const App = () => {
  return (
    <div>
        <Header/>
        <Home />
      <Routes>
        <Route path='/Login' element={<Login/>}> </Route>
        <Route path='/SignUp' element={<SignUp/>}> </Route>
      </Routes>
        <Footer />
    
      

    </div>
  );
};

export default App;