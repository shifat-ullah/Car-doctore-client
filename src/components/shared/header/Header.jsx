import { useContext, useState } from "react";
import { BriefcaseIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo.svg'
import { Authcontext } from "../../../providers/Authproviders";
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const {user,logout}=useContext(Authcontext);


    const hendlelogout=()=>{
        logout()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    return (
        <nav className="bg-base-200 px-3  ">
            <div className=" ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" href="#" className="text-white font-bold text-xl">
                            <img className="w-12 h-12" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link to="/" href="#" className="text-black">
                            Home
                        </Link>
                        <Link to="/about" className="text-black">
                            About
                        </Link>
                        <Link to="/services" className="text-black">
                            Services
                        </Link>
                        <Link to="/contact" className="text-black">
                            Contact
                        </Link>

                        { user?.email?
                        < >
                        <button onClick={hendlelogout}>Log Out</button>
                        <Link to="/bookingcard">My bookings</Link>  
                       </>  
                        :
                        <Link to="/login" className="text-black">
                            log in
                        </Link>
                        
                        }
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link to="#" className="text-black">
                            <BriefcaseIcon className="h-4 w-4 mt-2 text-blue-500" />

                        </Link>
                        <Link to="#" className="text-black">
                            <MagnifyingGlassIcon className="h-4 w-4 mt-2 text-blue-500" />

                        </Link>
                       

                        <button className="btn-outline border mt-1 rounded px-1 btn-warning">Warning</button>



                    </div>
                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button className="text-black" onClick={toggleMobileMenu}>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu (hidden by default) */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-blue-600`}>
                <div className="px-2 py-3 space-y-2">
                    <a href="#" className="block text-white">
                        Home
                    </a>
                    <a href="#" className="block text-white">
                        About
                    </a>
                    <a href="#" className="block text-white">
                        Services
                    </a>
                    <a href="#" className="block text-white">
                        Contact
                    </a>

                    <Link to="#" className="text-black">
                        <BriefcaseIcon className="h-4 w-4 mt-2 text-blue-500" />

                    </Link>
                    <Link to="#" className="text-black">
                        <MagnifyingGlassIcon className="h-4 w-4 mt-2 text-blue-500" />

                    </Link>

                    <button className="btn-outline border mt-1 rounded px-1 btn-warning">Warning</button>

                </div>
            </div>


        </nav>
    );
};









export default Header;