import {Link} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

function Register(){
    return(
        <div className="register-form w-full h-full relative">
          <LandingPage/>
          <div className="h-full w-full bg-black absolute top-0 z-30 opacity-70"></div>
          <div className="h-full w-full z-40 absolute top-0 flex justify-center items-center">
                <div className="modal w-96 h-96 px-3">
                    <div className="modal-header w-full h-7 bg-secondary text-lightGray flex items-center justify-end">
                        <Link to={'/'}>
                            <i className="fa fa-close cursor-pointer mr-2 text-lg transisiton ease-in-out duration-150 hover:text-gray-400"></i>
                        </Link>
                    </div>
                    <div className="sign-ups w-auto h-64 bg-lightGray flex flex-col items-center text-gray-700">
                        <h1 className="text-xl mt-10">Create Account</h1>
                        <div className="button-sign-up w-full flex flex-col justify-center items-center text-sm mt-8">
                          <Link to={'/sign-up-teacher'}>
                           <button className="p-2 mb-4 border-2 border-secondary w-60 transisiton ease-in-out duration-200 hover:bg-secondary hover:text-lightGray">Sign-up as Teacher</button>
                          </Link>
                          <button className="p-2 border-2 border-secondary w-60 transisiton ease-in-out duration-200 hover:bg-secondary hover:text-lightGray">Sign-up as Student</button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Register;