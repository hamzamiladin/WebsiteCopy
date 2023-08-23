import {useState} from "react";
import {close, menu, mainlogo,log, facebook, instagram, linkedin} from "../assets";
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [toggle, setToggle] = useState(false);

    return <nav className="w-full flex py-6 items-center navbar justify-between">
        <div className="pl-[35px] mt-6">
        {/* Logo */}
        <img src={log} alt="logo" className="w-[100px] h-[100px] sm:w-[180px] sm:h-[165px]" />
        </div>
        <div className="flex items-center space-x-10 ">
            <ul className="list-none sm:flex hidden justify-center items-center space-x-6">
                {navLinks.map((nav) => <li key={nav.id}
                                           className="font-poppins font-normal cursor-pointer text-[20px] text-white">
                    <a href={'#${nav.id}'}>{nav.title}</a>
                </li>)}

                <div
                    className="relative sm:flex hidden cursor-pointer font-normal font-poppins text-white text-[20px]"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    CONTACT
                    {dropdownOpen &&
                        <ul className=" absolute left-0  w-40 bg-primary text-white rounded-b-2xl shadow-lg font-poppins font-normal">
                            <li><a href="#telegram" className="block px-4 py-2 hover:bg-gray-400">Telegram</a></li>
                            <li><a href="#whatsapp" className="block px-4 py-2 hover:bg-gray-400">WhatsApp</a></li>
                        </ul>}
                </div>
            </ul>

            <div className="sm:flex hidden flex items-center space-x-10">
                <a href="#social1"><img src={linkedin} alt="LinkedIn" className="w-4 h-4"/></a>
                <a href="#social2"><img src={facebook} alt="Facebook" className="w-4 h-4"/></a>
                <a href="#social3"><img src={instagram} alt="Instagram" className="w-4 h-4"/></a>
                <a href="#donate"
                   className="ml-10 bg-white text-primary px-6 py-2 rounded-2xl hover:bg-gray-400 scale-125 font-bold">Donate</a>
            </div>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center pr-8">
            <img src={toggle ? close : menu} alt="menu" className="w'[20px] h-[20px] object-contain"
                 onClick={() => setToggle((prev) => !prev)}/>
        </div>

        <div
            className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav) => <li key={nav.id}
                                           className="font-poppins font-normal cursor-pointer text-[16px] text-white">
                    <a href={'#${nav.id}'}>{nav.title}</a>
                </li>)}
            </ul>
        </div>
    </nav>
}

export default Navbar;
