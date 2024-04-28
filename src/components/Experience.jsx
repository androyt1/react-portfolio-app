import React from "react";
import ExperienceItem from "./Layouts/ExperienceItem";
import { experienceItems } from "../constants";

const Experience = () => {
    return (
        <section id='experience'>
            <div className='px-3 min-h-screen pt-[70px]'>
                <h3
                    className='text-2xl md:text-3xl lg:text-3xl font-semibold pt-6 text-[#364D55]'
                    data-aos='fade-up'>
                    My Experience
                </h3>

                <div
                    className='w-16 h-8 bg-slate-700 text-white mx-auto flex justify-center items-center rounded-md'
                    data-aos='fade-up'
                    data-aos-delay='500'>
                    Start
                </div>
                {experienceItems.map((item) => (
                    <ExperienceItem
                        key={item.id}
                        company={item.company}
                        year={item.year}
                        title={item.title}
                        jobRoles={item.jobRoles}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;
