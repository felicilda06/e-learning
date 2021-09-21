import React from 'react';
import {Link} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';


function TrialAccount(){
    return(
        <div className="trial w-full h-full relative">
            <LandingPage/>
            <div className="h-full w-full bg-black absolute top-0 z-30 opacity-70"></div>
            <div className="h-full w-full z-40 absolute top-0 flex justify-center items-center">
                <div className="modal w-96 h-96 px-3">
                    <div className="modal-header w-full h-7 bg-secondary text-lightGray flex items-center justify-end">
                        <Link to={'/'}>
                            <i className="fa fa-close cursor-pointer mr-2 text-lg transisiton ease-in-out duration-150 hover:text-gray-400"></i>
                        </Link>
                    </div>
                    <div className="modal-body w-full bg-lightGray">
                        <form autocomplete={'off'}>
                            <h1 className="text-center py-5 text-lg text-gray-700">Start Free Trial</h1>
                            <div className="form-inputs w-full text-sm flex justify-center items-center flex-col gap-4 pb-6 text-gray-700">
                                <input type="text" name="school_id" className="w-60 px-4 py-2 outline-none bg-gray-300" placeholder="School ID"/>
                                <input type="text" name="school_name" className="w-60 px-4 py-2 outline-none  bg-gray-300" placeholder="Name of School"/>
                                <input type="text" name="school_adress" className="w-60 px-4 py-2 outline-none  bg-gray-300" placeholder="Address of School"/>
                                <select className="w-60 px-4 py-2 outline-none bg-gray-300" name="school_type">
                                    <option value="" className="bg-white">Type of School</option>
                                    <option value="primary" className="bg-white">Primary</option>
                                    <option value="secondary" className="bg-white">Secondary</option>
                                </select>
                                <input type="text" name="school_principal" className="w-60 px-4 py-2 outline-none  bg-gray-300" placeholder="Name of Principal"/>
                            </div>
                            <div className="w-full flex justify-center pb-12">
                                <button type="submit" className="w-60 p-2 bg-secondary text-lightGray text-sm outline-none border-none transisiton ease-in-out duration-200 hover:bg-primary">Redeem trial</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrialAccount;