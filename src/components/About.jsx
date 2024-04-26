import React from "react";
import { TiTick } from "react-icons/ti";

const About = () => {
    return (
        <section id='about' className='font-playfair'>
            <div className='px-2 min-h-screen pt-[70px] w-full'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold pt-6 text-[#364D55]'>
                    About Me
                </h1>

                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:gap-10'>
                    <div>
                        <h3 className='text-2xl md:text-3xl lg:text-3xl font-semibold pt-6 text-[#364D55]'>
                            Who Am I
                        </h3>
                        <p className='text-slate-700 mt-2'>
                            Hello there! I'm{" "}
                            <span className='font-semibold'> Aghoghovwia Andrew</span>, a seasoned
                            web developer with{" "}
                            <span className='font-semibold'> over seven years</span> of hands-on
                            experience in crafting intuitive and dynamic frontend and fullstack web
                            applications.
                        </p>
                        <p className='text-slate-700 mt-2'>
                            From conceptualization to deployment, I thrive on bringing ideas to life
                            through clean, efficient code and user-centric design. My journey began
                            with a passion for problem-solving and a curiosity for the ever-evolving
                            landscape of web technologies. Over the years, I've honed my skills in
                            crafting seamless user experiences and scalable solutions that drive
                            meaningful results.
                        </p>
                        <p className='text-slate-700 mt-2'>
                            My toolbox includes a wide array of technologies, with a strong emphasis
                            on:
                            <ul>
                                <li className='flex items-start gap-x-2 md:gap-x-4 mt-2'>
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
                                <li className='flex items-start gap-x-2 md:gap-x-4 mt-2'>
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
                                <li className='flex items-start gap-x-2 md:gap-x-4 mt-2'>
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

                        <p className='text-slate-700 mt-2'>
                            Beyond technical prowess, I'm deeply committed to collaboration and
                            continuous learning. I thrive in dynamic, cross-functional teams where
                            knowledge sharing and innovation are encouraged. Whether it's diving
                            into the latest industry trends or mentoring aspiring developers, I'm
                            always eager to expand my horizons and give back to the community.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-2xl md:text-3xl lg:text-3xl font-semibold pt-6 text-[#364D55]'>
                            Skills
                        </h3>
                        <p>Some of my top Skills include:</p>
                        <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-6 gap-4'>
                            <div className='px-6 py-3 border shadow-md rounded-md flex justify-center items-center font-semibold'>
                                HTML
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
