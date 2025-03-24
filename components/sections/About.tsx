import Image from "next/image";
import { Button } from "../ui/button";

function About() {
    return (
        <section className="px-4 py-8 md:py-12 lg:py-24" id="about">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Image */}
                    <div className="flex-1 w-full max-w-md md:max-w-none order-1 md:order-1">
                        <Image
                            src="/avatar.jpg"
                            alt="profile"
                            width={600}
                            height={600}
                            className="w-full h-auto rounded-lg shadow-xl"
                            priority
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col text-center md:text-left items-center md:items-start gap-4 order-2 md:order-2">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">About Me</h1>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-gray-400">Who am I</h2>
                        <div className="max-w-2xl mx-auto text-center md:text-left">
                            <p className="text-base md:text-lg">
                                I&apos;m a passionate graphic designer with over 6 years of experience in creating visually stunning designs.
                                I specialize in branding, digital illustration, and user interface design, and I strive to create impactful
                                experiences that resonate with audiences.
                            </p>
                            <p className="mt-4 text-base md:text-lg">
                                Design for me is not just about making things look good — it&apos;s about solving problems and communicating
                                messages through visuals. I believe in the power of simplicity, consistency, and clarity to drive effective
                                design solutions.
                            </p>

                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                            <Button className="rounded w-full md:w-auto px-8 py-6">
                                Hire me
                            </Button>
                            <Button
                                variant="outline"
                                className="rounded w-full md:w-auto px-8 py-6 border-2"
                            >
                                See My resume
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;