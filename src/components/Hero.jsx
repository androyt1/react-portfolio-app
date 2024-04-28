import React from "react";
import Button from "./Layouts/Button";

const Hero = () => {
    return (
        <section>
            <div
                className=' min-h-[calc(100vh-64px)] grid grid-cols-1 md:grid-cols-2 font-poppins overflow-hidden md:bg-slate-200'
                id='#top'>
                <div className='flex flex-col justify-center items-start pl-2 md:px-8 order-2 md:order-1'>
                    {/* <h1 className='text-4xl' data-aos='slide-down' data-aos-delay='1200'>
                        👋{" "}
                    </h1> */}
                    <h1
                        className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold uppercase text-[#364d55] mt-8 md:mt-10'
                        data-aos='fade-up'>
                        Andrew
                        <br /> Aghoghovwia
                    </h1>
                    <p
                        className='mt-4 lg:mt-8 text-slate-500 font-normal text-base lg:text-xl'
                        data-aos='fade-up'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br /> Totam repudiandae expedita ipsam quibusdam eligendi
                    </p>
                    <div
                        className='flex flex-row justify-start items-center mt-6 md:mt-10 w-full gap-x-4 md:gap-x-8'
                        data-aos='fade-up'>
                        {/* <button className='px-8 py-2 border bg-[#121318] text-slate-50 w-[90%] md:w-[40%] rounded-lg '>
                            Download Cv
                        </button>
                        <button className='px-8 py-2 border bg-[#7BA2AD] text-slate-50 w-[90%] md:w-[40%] rounded-lg '>
                            Projects
                        </button> */}

                        <Button text='Download Cv' />

                        <Button text='Projects' />
                    </div>
                </div>
                <div className=' h-full flex flex-col items-start  justify-start relative overflow-hidden order-1 md:order-2 bg-white'>
                    <div
                        className=' absolute right-0 top-1  w-[10%]  bg-[#7BA2AD]  h-full  flex justify-center items-center z-40 '
                        data-aos-delay='1800'>
                        <h1 className='rotate-90 text-xl  font-normal'>+4478021460751</h1>
                    </div>
                    <img
                        src='/androy.png'
                        alt=''
                        className='w-[90%] h-auto object-cover z-20'
                        data-aos='fade-left'
                    />
                    <div className='absolute bottom-0 left-0 w-full  h-[5%] bg-[#7BA2AD]'></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
