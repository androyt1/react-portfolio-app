import React from "react";

const Skill = ({ children }) => {
    return (
        <div className='px-6 py-3  shadow-md rounded-md  font-semibold shadow-[#7BA2AD] flex justify-between items-center'>
            {children}
        </div>
    );
};

export default Skill;
