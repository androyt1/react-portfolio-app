import React from "react";

const ExperienceItem = ({ company, year, title, jobRoles }) => {
    return (
        <div
            className='flex flex-col justify-start items-center text-[16px] md:text-[18px]  '
            data-aos='slide-up'>
            {/* <div className='h-3 w-3 rounded-full bg-slate-700 text-white'></div> */}
            <div className='h-10 md:h-20 w-[2px] bg-slate-400'></div>
            <div className='border shadow-md p-2 md:p-4 roundedd-md bg-slate-500/10'>
                <div className='flex justify-between items-center border-b-2 border-b-slate-400/50 p-2 bg-white'>
                    <h4 className='font-semibold'>{company}</h4>
                    <span className=''>{year}</span>
                </div>
                <p className='font-semibold list-outside pt-2'>{title}:</p>
                <ul className='  list-disc '>
                    {jobRoles.map((role) => (
                        <li className='list-item list-inside'>{role}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceItem;
