import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import Footer from '../components/Footer';


function LandingPage(){
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = ()=>{
      setIsOpen(!isOpen);
  }
   return(
    <div className="h-full w-full">
        <div className="main-content w-full h-screen bg-cover bg-no-repeat relative" style={{backgroundImage : `url("/images/books1.jpg")`}}>
            <div className="overlay w-full h-full bg-black opacity-75 absolute">
            </div>
            <div className="content w-full h-full absolute top-0 z-10 text-lightGray flex justify-center flex-col px-10 lg:px-20 md:px-20">
                <h1 className="title text-lg font-semibold lg:text-4xl md:text-4xl">
                    The E-Learning Management System
                </h1>
                <p className="mt-2 text-justify text-sm lg:text-lg lg:mt-4 md:text-lg md:mt-4">
                    A learning system based on formalised teaching but with the help of electronic resources is known as E-learning. 
                    While teaching can be based in or out of the classrooms, the use of computers and the Internet forms 
                    the major component of E-learning.
                </p>
                <div className="buttons mt-8 flex flex-col items-center lg:flex-row md:flex-row gap-2">
                    <Link to={'/trial-account'}>
                        <button className="bg-lightRed animate-pulse py-2 px-3 text-xs rounded-full outline-none border-none transisiton ease-out duration-150 hover:bg-darkRed w-48 ">Get 1 month free trial</button>
                    </Link>
                    <button className="bg-secondary py-2 px-3 text-xs rounded-full outline-none border-none transisiton ease-out duration-150 hover:bg-primary w-48">Update school account</button>
                </div>
                </div>
                <div className="chat-box absolute right-6 bottom-0 z-30">
                      <div className={isOpen ? "bg-primary rounded-tl-lg rounded-tr-lg animate-none":"chat-header w-60 h-8 bg-primary rounded-tl-lg rounded-tr-lg animate-bounce"}>
                        <div className="chat-header-text flex justify-between items-center px-4 text-lightGray text-sm cursor-pointer" onClick={toggleChat}>
                          <span className="py-2">Chat with Us</span>
                          <i className="fa fa-cogs mt-2"></i>
                        </div>
                      </div>
                      <div className={isOpen ? "chat-body w-60 h-60 bg-gray-300":"hidden"}>
                         <div className="faq w-full h-48 text-xs text-gray-700 overscroll-y-auto overflow-x-hidden relative">
                            <div className="faq-questions w-full pt-3 absolute grid place-content-center">
                              <li className="w-52 h-6 list-none bg-white flex items-center justify-center rounded-full mb-4">Good day! How me I help you?</li>
                            </div>
                         </div>
                         <div className="chat-type relative mt-2 mx-1">
                            <div className="absolute flex w-full">
                              <textarea className="w-full resize-none outline-none h-8 overflow-hidden bg-white text-xs px-2 pt-1 rounded-l-md"></textarea>
                              <i className="fa fa-paper-plane text-sm text-primary cursor-pointer bg-white px-2 pt-2 rounded-r-md"></i>
                            </div>
                         </div>
                      </div>
                </div>
        </div>
        <div className="w-full h-auto py-10 relative">
          <div className="features w-full">
            <div className="w-full flex justify-center items-center px-4 gap-4 lg:gap-40 md:gap-20">
                <div className="flex justify-center flex-col items-center w-24 h-24 rounded-full bg-gray-300 text-gray-700 lg:w-40 lg:h-40 md:h-40 md:w-40">
                    <i className="fa fa-tasks text-lg lg:text-4xl md:text-4xl"></i>
                    <div className="text-xs lg:text-lg md:text-lg">
                      <p className="mt-1 text-center">Student</p>
                      <p className="text-center">Progress</p>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center w-24 h-24 rounded-full bg-gray-300 text-gray-700 lg:w-40 lg:h-40 md:h-40 md:w-40">
                    <i className="fa fa-book text-lg lg:text-4xl md:text-4xl"></i>
                    <div className="text-xs lg:text-lg md:text-lg">
                      <p className="mt-1 text-center">Learning</p>
                      <p className="text-center">Materials</p>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center w-24 h-24 rounded-full bg-gray-300 text-gray-700 lg:w-40 lg:h-40 md:h-40 md:w-40">
                    <i className="fa fa-search text-lg lg:text-4xl md:text-4xl"></i>
                    <div className="text-xs lg:text-lg md:text-lg">
                      <p className="mt-1 text-center">Student</p>
                      <p className="text-center">Overview</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
   )
}

export default LandingPage;