import React from 'react';

function Footer(){
    return(
        <div className="footer w-full h-40 bg-primary text-lightGray">
            {/* <i className="fa fa-graduation-cap ml-4 mt-5 lg:ml-20 md:ml-20"></i><h1 className="inline-block text-md font-light">&nbsp;E-Learning Management System</h1> */}
            <div className="flex justify-between items-center px-8 lg:px-44 md:px-44">
                <div className="footer-left-content my-6">
                    <div className="contact-1 flex items-center text-xs mb-2">
                        <i className="fa fa-phone mr-2"></i><h3>0926-476-9986</h3>
                    </div>
                    <div className="contact-1 flex items-center text-xs mb-2">
                        <i className="fa fa-fax mr-2"></i><h3>(03) 967-1234</h3>
                    </div>
                    <div className="contact-1 flex items-center text-xs ">
                        <i className="fa fa-map-marker mr-2"></i><h3>Sogod, Southern Leyte</h3>
                    </div>
                </div>
                <div className="footer-right-content mt-4">
                    <div className="contact-1 flex items-center text-xs mb-2">
                        <i className="fa fa-envelope mr-2"></i><h3>hmp@gmail.com</h3>
                    </div>
                    <div className="contact-1 flex items-center text-xs">
                        <i className="fa fa-facebook mr-2"></i><h3>hmpFacebook.com</h3>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center text-xs mt-5">
                <span>Copyright &copy; All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer;