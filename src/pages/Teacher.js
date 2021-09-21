import {Link} from 'react-router-dom';
import React,{ useState } from 'react';
import LandingPage from '../pages/LandingPage';

function Teacher(){
    const [isOpen, setIsOpen] = useState(false)

    const toggleChat = ()=>{
        setIsOpen(!isOpen);
    }
    return(
       <div className="teacher-sign-up w-full h-full relative">
        <LandingPage/>
        <div className="h-full w-full bg-black absolute top-0 z-30 opacity-70"></div>
            <div className="h-full w-full z-40 absolute top-0 flex justify-center items-center">
            <form autocomplete={'off'}>
                <div className="modal w-auto h-calc1 bg-lightGray relative">
                        <div className="modal-header w-full h-7 bg-secondary">
                            <Link to={'/'}>
                                <i className="fa fa-close cursor-pointer float-right mr-2 text-lg text-lightGray transisiton ease-in-out duration-150 hover:text-gray-400"></i>
                            </Link>
                        </div>
                        <div className="modal-body flex relative px-20">
                            <div className={isOpen? "hidden" : "personal_info w-full h-full"}>
                                <div className="absolute left-5 mt-8">
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 bg-secondary grid place-items-center rounded-full">
                                            <label className="text-xs text-lightGray">1</label>
                                        </div>
                                        <h1 className="ml-2 text-gray-800 text-sm">Personal Information</h1>
                                    </div>
                                </div>
                                <div className="form-inputs w-full mt-20 text-sm flex justify-center items-center flex-col gap-4 pb-6 text-gray-700">
                                        <input type="text" name="school_id" className="w-60 px-4 py-2 outline-none bg-gray-300" placeholder="Teacher's ID"/>
                                        <input type="text" name="school_name" className="w-60 px-4 py-2 outline-none  bg-gray-300" placeholder="Teacher's Name"/>
                                        <input type="text" name="school_adress" className="w-60 px-4 py-2 outline-none  bg-gray-300" placeholder="Contact No."/>
                                        <select className="w-60 px-4 py-2 outline-none bg-gray-300" name="school_type">
                                            <option value="" className="bg-white">Type of School</option>
                                            <option value="primary" className="bg-white">Primary</option>
                                            <option value="secondary" className="bg-white">Secondary</option>
                                        </select>
                                        <select className="w-60 px-4 py-2 outline-none bg-gray-300" name="school_type">
                                            <option value="" className="bg-white">School</option>
                                            <option value="primary" className="bg-white">TOCS-SSES</option>
                                        </select>
                                        <input type="text" name="school_principal" className="w-60 px-4 py-2 outline-none  bg-gray-300" placeholder="School ID"/>
                                        <label onClick={toggleChat} className="w-60 p-2 bg-secondary text-lightGray text-sm outline-none text-center cursor-pointer transisiton ease-in-out duration-200 hover:bg-primary">Next</label>
                                    </div>
                            </div>
                            <div className={isOpen? "account_info w-full h-full": "hidden"}>
                                <div className="absolute left-5 mt-8">
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 bg-secondary grid place-items-center rounded-full">
                                            <label className="text-xs text-lightGray">2</label>
                                        </div>
                                        <h1 className="ml-2 text-gray-800 text-sm">Account Information</h1>
                                    </div>
                                </div>
                                <div className="form-inputs w-full mt-20 text-sm flex justify-center items-center flex-col gap-4 pb-6 text-gray-700">
                                        <input type="text" name="school_id" className="w-60 px-4 py-2 outline-none bg-gray-300" placeholder="Username"/>
                                        <input type="text" name="school_name" className="w-60 px-4 py-2 outline-none  bg-gray-300" placeholder="Email address"/>
                                        <input type="password" name="school_adress" className="w-60 px-4 py-2 outline-none  bg-gray-300" placeholder="Password"/>
                                        <input type="password" name="school_principal" className="w-60 px-4 py-2 outline-none  bg-gray-300" placeholder="Confirm password"/>
                                        <button type="submit" className="w-60 p-2 mt-4 bg-secondary text-lightGray text-sm outline-none border-none transisiton ease-in-out duration-200 hover:bg-primary">Register</button>
                                        <label onClick={toggleChat} className="w-60 p-2 bg-secondary text-lightGray text-sm outline-none cursor-pointer text-center transisiton ease-in-out duration-200 hover:bg-primary">Go back</label>
                                    </div>
                            </div>
                        </div>
                    </div>
            </form>
            
            </div>
       </div>
    )
}

export default Teacher;