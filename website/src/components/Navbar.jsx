import { useState } from "react";
import { close, mainlogo, menu, facebook, instagram, linkedin } from "../assets";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={mainlogo} alt={"logo"} className="w-[350px] h-[200px] mr-12" />

            <div className="flex items-center space-x-10">
                <ul className="list-none sm:flex hidden justify-end items-center space-x-6">
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className="font-poppins font-normal cursor-pointer text-[16px] text-white">
                            <a href={'#${nav.id}'}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="relative cursor-pointer font-normal font-poppins text-white">
                    CONTACT
                    {dropdownOpen && (
                        <ul className="absolute top-full left-0 mt-2 w-40 bg-primary text-white rounded-b-2xl shadow-lg font-poppins font-normal">
                            <li><a href="#telegram" className="block px-4 py-2 hover:bg-gray-200">Telegram</a></li>
                            <li><a href="#whatsapp" className="block px-4 py-2 hover:bg-gray-200">WhatsApp</a></li>
                            <li><a href="#email" className="block px-4 py-2 hover:bg-gray-200">Email</a></li>
                        </ul>
                    )}
                </div>

                <a href="#social1"><img src={linkedin} alt="LinkedIn" className="w-4 h-4" /></a>
                <a href="#social2"><img src={facebook} alt="Facebook" className="w-4 h-4" /></a>
                <a href="#social3"><img src={instagram} alt="Instagram" className="w-4 h-4" /></a>
                <a href="#donate" className="bg-white text-primary px-6 py-2 ml-6 rounded-2xl hover:bg-gray-400">Donate</a>
            </div>
        </nav>
    )
}


export default Navbar;
