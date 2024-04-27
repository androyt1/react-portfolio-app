import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import MobileNav from "./MobileNav";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className='h-16  flex items-center justify-between px-2 sticky top-0 z-50 bg-[#7BA2AD] font-poppins'>
                <div>
                    <a
                        href='#top'
                        className='font-semibold text-2xl font-sacramento'
                        onClick={closeNav}>
                        Androyt1
                    </a>
                </div>
                <nav className='hidden md:flex items-center'>
                    <ul className='flex items-center gap-x-4 justify-end'>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#experience'>Experience</a>
                        </li>
                        <li>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className='md:hidden'>
                    {isOpen ? (
                        <AiOutlineClose className='text-slate-600' onClick={toggle} size={30} />
                    ) : (
                        <IoIosMenu className='text-slate-600' onClick={toggle} size={30} />
                    )}
                </div>
            </header>
            <MobileNav isOpen={isOpen} close={closeNav} />
        </>
    );
};

export default Navbar;
