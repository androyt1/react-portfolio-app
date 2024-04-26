import React from "react";

const Hero = () => {
    return (
        <section>
            <div
                className=' min-h-[calc(100vh-64px)] grid grid-cols-1 md:grid-cols-2 font-playfair overflow-hidden md:bg-slate-200'
                id='#top'>
                <div
                    className='flex flex-col justify-center items-start pl-2 md:px-8 order-2 md:order-1'
                    data-aos='slide-right'>
                    {/* <h1 className='text-4xl' data-aos='slide-down' data-aos-delay='1200'>
                        👋{" "}
                    </h1> */}
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-[#364d55] '>
                        Andrew
                        <br /> Aghoghovwia
                    </h1>
                    <p className='mt-2 md:mt-4 text-slate-500 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br /> Totam repudiandae expedita ipsam quibusdam eligendi
                    </p>
                    <div className='flex flex-col md:flex-row justify-start items-center mt-4 md:mt-8 w-full gap-2'>
                        <button className='px-8 py-2 border bg-[#121318] text-slate-50 w-[90%] md:w-[40%] rounded-lg'>
                            Download Cv
                        </button>
                        <button className='px-8 py-2 border bg-[#7BA2AD] text-slate-50 w-[90%] md:w-[40%] rounded-lg'>
                            Projects
                        </button>
                    </div>
                </div>
                <div className=' h-full flex justify-start  items-center relative overflow-hidden order-1 md:order-2 bg-white'>
                    <div
                        className='absolute right-0 top-0 w-[20%] bg-[#7BA2AD]  h-full  flex justify-center items-center z-40 '
                        data-aos='slide-up'
                        data-aos-delay='1800'>
                        <h1 className='rotate-90 text-3xl lg:text-5xl font-semibold'>
                            +4478021460751
                        </h1>
                    </div>
                    <img
                        src='/androy.png'
                        alt=''
                        className='w-[90%] h-auto object-cover z-20'
                        data-aos='slide-left'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
