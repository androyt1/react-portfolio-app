import React from "react";

const MobileNav = ({ isOpen, close }) => {
    return (
        <nav
            className={`fixed top-[64px] h-full w-full left-0 bottom-0 transition-transform duration-500 ease-linear bg-[#7BA2AD] z-50  ${
                isOpen ? "translate-y-0" : " translate-y-[1200px]"
            }`}>
            <ul className='h-full w-full flex flex-col  gap-y-10 justify-start items-center  pt-20 text-slate-800 font-serif text-xl'>
                <li>
                    <a href='#about' onClick={close}>
                        About
                    </a>
                </li>
                <li>
                    <a href='#experience' onClick={close}>
                        Experience
                    </a>
                </li>
                <li>
                    <a href='#projects' onClick={close}>
                        Projects
                    </a>
                </li>
                <li>
                    <a href='#contact' onClick={close}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MobileNav;
