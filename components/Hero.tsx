import { RiBehanceFill, RiDribbbleFill, RiFacebookFill, RiInstagramFill } from "@remixicon/react";
import { Button } from "./ui/button";
import Image from "next/image";

function Hero() {
    return (
        <section className="px-4 py-8 md:py-12 lg:py-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Text Content */}
                    <div className="flex flex-col text-center md:text-left items-center md:items-start gap-4 order-2 md:order-1">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl">Hello, I&apos;m</h1>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold">Lewis Nathaniel</h2>
                        <p className="text-sm md:text-lg lg:text-xl text-gray-600">Graphic Designer</p>
                        
                        {/* Social Links */}
                        <div className="flex items-center gap-2 py-5 justify-center md:justify-start">
                            <Button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-none">
                                <RiFacebookFill className="w-6 h-6" />
                            </Button>
                            <Button className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-none">
                                <RiInstagramFill className="w-6 h-6" />
                            </Button>
                            <Button className="w-10 h-10 bg-pink-400 hover:bg-pink-500 rounded-none">
                                <RiDribbbleFill className="w-6 h-6" />
                            </Button>
                            <Button className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-none">
                                <RiBehanceFill className="w-6 h-6" />
                            </Button>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                            <Button className="uppercase rounded-full w-full md:w-auto px-8 py-6">
                                Hire me
                            </Button>
                            <Button 
                                variant="outline" 
                                className="uppercase rounded-full w-full md:w-auto px-8 py-6 border-2"
                            >
                                See My resume
                            </Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full max-w-md md:max-w-none order-1 md:order-2">
                        <Image 
                            src="/avatar.jpg" 
                            alt="profile" 
                            width={600}
                            height={600}
                            className="w-full h-auto rounded-lg shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;