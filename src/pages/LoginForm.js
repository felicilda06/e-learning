import React from 'react';
import {Link} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';


function LoginForm(){
    return(
        <div className="login-form w-full h-full relative">
          <LandingPage/>
          <div className="h-full w-full bg-black absolute top-0 z-30 opacity-70"></div>
          <div className="h-full w-full z-40 absolute top-0 flex justify-center items-center">
                <div className="modal w-96 h-96 px-3">
                    <div className="modal-header w-full h-7 bg-secondary text-lightGray flex items-center justify-end">
                        <Link to={'/'}>
                            <i className="fa fa-close cursor-pointer mr-2 text-lg transisiton ease-in-out duration-150 hover:text-gray-400"></i>
                        </Link>
                    </div>
                    <div className="modal-body w-full bg-lightGray relative">
                        <form autocomplete={'off'}>
                            <div className="w-full h-16 flex justify-center">
                                <div className="w-20 h-20 rounded-full bg-gray-300 absolute -top-14 grid place-items-center">
                                    <i className="fa fa-user text-5xl text-gray-800"></i>
                                </div>
                            </div>
                            <div className="form-inputs w-full text-sm flex justify-center items-center flex-col gap-4 pb-6 text-gray-700">
                                <input type="email" name="username" className="w-60 px-4 py-2 outline-none bg-gray-300" placeholder="Username"/>
                                <input type="password" name="userpass" className="w-60 px-4 py-2 outline-none  bg-gray-300" placeholder="Password"/>
                                <div className="remember_me flex justify-center items-center mt-1">
                                    <input type="checkbox" name="remember_me" id="remember_me" className="w-4 h-4 mr-1 outline-none"/>
                                    <label for="remember_me">Remember me</label>
                                </div>
                                <div className="w-full flex justify-center mt-2">
                                    <button type="submit" className="w-60 p-2 bg-secondary text-lightGray text-sm outline-none border-none transisiton ease-in-out duration-200 hover:bg-primary">LOGIN</button>
                                </div>
                                <Link to={'/forgot-password'}>
                                    <label className="text-secondary cursor-pointer transisiton ease-in-out duration-200 hover:text-primary">Forgot Password?</label>
                                </Link>
                                <div className="mb-7">
                                    Don't have an account?<Link to={'/sign-up'}><label className="text-secondary ml-1 cursor-pointer transisiton ease-in-out duration-200 hover:text-primary">Sign-up here</label></Link>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;