import React, { useState } from 'react';
import {Link} from 'react-router-dom';


function Header(){
    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
    return(
        <div className="header">
            <nav className="w-full h-14 bg-secondary border-b-2 border-gray-500 shadow-xl text-lightGray z-30 flex justify-between flex-col fixed lg:flex-row md:flex-row">
              <div className="title mt-3 ml-4">
                <Link to={'/'}>
                  <i className="fa fa-graduation-cap"></i>
                  <div className="title inline-block">
                    <h1 className="inline-block font-lobster text-xl">&nbsp;Edu</h1>
                    <h1 className="inline-block font-lobster text-xl">&nbsp;Car</h1>
                  </div>
                </Link>
                <i className="fa fa-bars text-lg absolute right-6 top-3 cursor-pointer block lg:hidden md:hidden" onClick={toggle}></i>
              </div>
              <ul className={isOpen ?'bg-secondary mt-2 text-sm flex flex-col lg:flex-row md:flex-row':' hidden mt-2 text-sm lg:flex md:flex'}>
               <Link to={'/login'}>
                  <li className="mr-4 py-2 pl-4 w-full cursor-pointer transisiton ease-in-out duration-300 hover:bg-primary lg:pl-0 lg:hover:bg-secondary md:pl-0 md:hover:bg-secondary">
                    LOGIN
                  </li>
                </Link>
                <Link to={'/sign-up'}>
                  <li className="mr-6 py-2 pl-4 w-full cursor-pointer transisiton ease-in-out duration-300 hover:bg-primary lg:pl-0 lg:hover:bg-secondary md:pl-0 md:hover:bg-secondary">
                    REGISTER
                  </li>
                </Link>
              </ul>
            </nav>    
        </div>
    )
}

export default Header;