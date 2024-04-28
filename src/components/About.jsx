import React from "react";
import { TiTick } from "react-icons/ti";
import Skill from "./Layouts/Skill";
import { FaHtml5 } from "react-icons/fa";

const About = () => {
    return (
        <section id='about' className='font-poppins text-base font-normal'>
            <div className='px-3 min-h-screen pt-[70px] w-full '>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:gap-20'>
                    <div>
                        <h3
                            className='text-2xl md:text-3xl lg:text-3xl font-semibold pt-6 text-[#364D55]'
                            data-aos='fade-up'>
                            Who I Am
                        </h3>
                        <p
                            className='text-slate-700  mt-6 md:mt-8'
                            data-aos='fade-up'
                            data-aos-delay='500'>
                            Hello there! I'm{" "}
                            <span className='font-semibold'> Aghoghovwia Andrew</span>, a seasoned
                            web developer with{" "}
                            <span className='font-semibold'> over seven years</span> of hands-on
                            experience in crafting intuitive and dynamic frontend and fullstack web
                            applications.
                        </p>
                        <p
                            className='text-slate-700 mt-6 md:mt-8'
                            data-aos='fade-up'
                            data-aos-delay='500'>
                            From conceptualization to deployment, I thrive on bringing ideas to life
                            through clean, efficient code and user-centric design. My journey began
                            with a passion for problem-solving and a curiosity for the ever-evolving
                            landscape of web technologies. Over the years, I've honed my skills in
                            crafting seamless user experiences and scalable solutions that drive
                            meaningful results.
                        </p>
                        <p
                            className='text-slate-700 mt-6 lg:mt-8'
                            data-aos='fade-up'
                            data-aos-delay='500'>
                            My toolbox includes a wide array of technologies, with a strong emphasis
                            on:
                            <ul
                                className='mt-6 lg:mt-8 space-y-8'
                                data-aos='fade-up'
                                data-aos-delay='500'>
                                <li className='flex items-start gap-x-2 md:gap-x-4 '>
                                    <div className='ml-1 lg:ml-3 flex items-start justify-start bg-slate-200'>
                                        <TiTick className='text-xl md:text-3xl' />
                                    </div>
                                    <div className='flex items-start justify-start'>
                                        <p>
                                            <span className='font-semibold'>
                                                Frontend Development
                                            </span>{" "}
                                            : Utilizing frameworks like React.js, I specialize in
                                            building responsive, interactive interfaces that
                                            captivate and engage users. Through meticulous attention
                                            to detail and a focus on performance optimization, I
                                            ensure that every pixel and interaction serves a
                                            purpose.
                                        </p>
                                    </div>
                                </li>
                                <li className='flex items-start gap-x-2 md:gap-x-4  '>
                                    <div className='ml-1 lg:ml-3 flex items-start justify-start bg-slate-200'>
                                        <TiTick className='text-xl md:text-3xl' />
                                    </div>
                                    <div className='flex items-start justify-start'>
                                        <p>
                                            <span className='font-semibold'>
                                                Backend Development
                                            </span>{" "}
                                            : Leveraging Node.js and Express.js, I architect robust
                                            server-side solutions that power the backbone of web
                                            applications. Whether it's crafting RESTful APIs or
                                            integrating with databases, I thrive on building
                                            scalable, maintainable backend systems that stand the
                                            test of time..
                                        </p>
                                    </div>
                                </li>
                                <li className='flex items-start gap-x-2 md:gap-x-4 '>
                                    <div className='ml-1 lg:ml-3 flex items-start justify-start bg-slate-200'>
                                        <TiTick className='text-xl md:text-3xl' />
                                    </div>
                                    <div className='flex items-start justify-start'>
                                        <p>
                                            <span className='font-semibold'>State Management</span>{" "}
                                            : With expertise in Redux and similar libraries, I
                                            orchestrate complex state management workflows to
                                            maintain consistency and coherence across applications
                                            of all sizes.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </p>

                        <p
                            className='text-slate-700 mt-6 lg:mt-8'
                            data-aos='fade-up'
                            data-aos-delay='500'>
                            Beyond technical prowess, I'm deeply committed to collaboration and
                            continuous learning. I thrive in dynamic, cross-functional teams where
                            knowledge sharing and innovation are encouraged. Whether it's diving
                            into the latest industry trends or mentoring aspiring developers, I'm
                            always eager to expand my horizons and give back to the community.
                        </p>
                    </div>
                    <div>
                        <img
                            src='/developer.svg'
                            alt=''
                            className='my-10'
                            data-aos='fade-left'
                            data-aos-delay='1000'
                        />
                        <h3
                            className='text-2xl md:text-3xl lg:text-3xl font-semibold pt-6 lg:pt-8 text-[#364D55]'
                            data-aos='fade-up'
                            data-aos-delay='500'>
                            Skills
                        </h3>
                        <p className='mt-4' data-aos='fade-up' data-aos-delay='500'>
                            Some of my top Skills include:
                        </p>
                        <div
                            className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-6 gap-4'
                            data-aos='fade-up'
                            data-aos-delay='500'>
                            <Skill>
                                HTML <FaHtml5 className='text-xl' />
                            </Skill>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                CSS
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                JavaScript
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                TYPESCRIPT
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                REACT
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                VUE
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                NODE
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                MONGODB
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                MYSQL
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                PROSQRESS
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                GIT
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                BOOTSTRAP
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                TAILWIND
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                FIGMA
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                DOCKER
                            </div>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                WEBPACK
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
