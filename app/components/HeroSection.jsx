"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700">
                        Hello I'm{" "}
                    </span>
                    <br/>
                    <TypeAnimation
                    sequence={[
                        'Mauro',
                        1000, 
                        'Java Developer',
                        1000,
                        'MERN Stack Developer',
                        1000,
                        'Mobile Developer',
                        1000
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <div>
                <button className="sm:w-fit px-6 py-3 rounded-full mr-4 text-white bg-gradient-to-r from-purple-700 to-blue-900 hover:from-purple-600 hover:to-blue-800">
                    Hire me
                </button>
                <button className="sm:w-fit px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">
                    Download CV
                </button>
                </div>
            </div>

            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className='rounded-full overflow-hidden bg-[#68686818] relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>
                    <Image
                        src="/images/scott.png"
                        width={300}
                        height={300}
                        alt="Hero Image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
