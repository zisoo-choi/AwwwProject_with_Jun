import React from 'react';
import '../css/Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const header = () => {
    return (
        <>
            <div className ="container show-fl">
                <div className='row'>
                    <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>

                        <div className='HeaderDiv' >
                            <div className='HeaderLogo'>Aw</div>
                            
                            <div className='HeaderTopBar'>
                                <div className='HeaderButtonBar'>
                                    <button className='HeaderBtn' type="button">Music Talk</button>
                                    <button className='HeaderBtn' type="button">Play List</button>
                                    <button className='HeaderBtn' type="button">My Page</button>
                                </div>
                                <div className='HeaderSearch'>
                                    <input type="text" placeholder='검색어를 입력하세요 .'></input>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='HeaderSearchIcon'/>
                                </div>
                            
                                <div className='HeaderLoginAndSignUp'>
                                    <button className='HeaderBtn HeaderLoginBtn' type="button">Login</button>
                                    <button className='HeaderBtn HeaderLoginBtn' type="button">SignUp</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default header;