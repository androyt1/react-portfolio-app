import React from "react";
import ExperienceItem from "./Layouts/ExperienceItem";
import { experienceItems } from "../constants";

const Experience = () => {
    return (
        <section id='experience'>
            <div className='px-3 min-h-screen pt-[70px]' data-aos='slide-up'>
                <h3
                    className='text-2xl md:text-3xl lg:text-3xl font-semibold pt-6 text-[#364D55]'
                    data-aos='slide-up'>
                    My Experience
                </h3>

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
