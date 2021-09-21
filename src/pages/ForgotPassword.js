import React from 'react';
import {Link} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

function ForgotPassword(){
    return(
        <div className="login-form w-full h-full relative">
          <LandingPage/>
          <div className="h-full w-full bg-black absolute top-0 z-30 opacity-70"></div>
          <div className="h-full w-full z-40 absolute top-0 flex justify-center items-center">
          <div className="modal w-96 h-96 px-4">
                    <div className="modal-header w-full h-7 bg-secondary text-lightGray flex items-center justify-end">
                        <Link to={'/'}>
                            <i className="fa fa-close cursor-pointer mr-2 text-lg transisiton ease-in-out duration-150 hover:text-gray-400"></i>
                        </Link>
                    </div>
                    <div className="modal-body w-full bg-lightGray relative">
                        <form autocomplete={'off'}>
                            <div className="w-full h-auto flex justify-center">
                                <div className="w-20 h-20 rounded-full bg-gray-300 absolute -top-14 grid place-items-center">
                                    <i className="fa fa-lock text-5xl text-gray-800"></i>
                                </div>
                            </div>
                            <div className=" flex flex-col justify-center items-center">
                              <h1 className="text-xl text-gray-600 font-semibold mt-10">Recover Account</h1>
                              <label className="mt-4 w-72 text-gray-600 text-center text-sm">Enter the email or phone number associated with your account.</label>
                              <small className="mt-4 text-gray-500 w-72 text-center">We will email or send sms the link to reset your password.</small>
                              <input type="email" name="username" className="w-60 px-4 py-2 outline-none bg-gray-300 mt-6 text-gray-700 text-sm" placeholder="Enter email address"/>
                              <div className="buttons w-full grid place-content-center gap-2 mt-7 mb-12 text-lightGray text-sm">
                                  <button className="bg-secondary p-2 w-60 transisiton ease-in-out duration-200 hover:bg-primary">Send Code via Email</button>
                                  <button className="bg-lightRed p-2 w-60 mt-1 transisiton ease-in-out duration-200 hover:bg-darkRed">Send Code via SMS</button>
                              </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
          </div>
        </div>
    )
}

export default ForgotPassword