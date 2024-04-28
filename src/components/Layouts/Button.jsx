import React from "react";

const Button = ({ text }) => {
    return (
        <button className='relative inline-flex items-center px-8  lg:px-12 py-2  overflow-hidden  font-normal text-slate-600 border-2 border-[#7BA2AD] rounded-md hover:text-white group hover:bg-gray-50'>
            <span className='absolute left-0 block w-full h-0 transition-all bg-[#7BA2AD] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
            <span className='relative text-sm lg:text-base'>{text}</span>
        </button>
    );
};

export default Button;
