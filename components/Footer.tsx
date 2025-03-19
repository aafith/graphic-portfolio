import Link from "next/link";
import { Separator } from "./ui/separator";
import { RiBehanceFill, RiDribbbleFill, RiFacebookFill, RiInstagramFill } from "@remixicon/react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-6 px-8 bg-gray-950 text-white">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 text-sm h-5">
                        <p className="text-sm sm:mr-4">
                            &copy; {currentYear} - All rights reserved.
                        </p>

                        <Separator orientation="vertical" />

                        <div className="flex justify-center items-center space-x-4 mt-2 sm:mt-0">
                            <RiFacebookFill className="w-6 h-6 cursor-pointer" />
                            <RiInstagramFill className="w-6 h-6 cursor-pointer" />
                            <RiDribbbleFill className="w-6 h-6 cursor-pointer" />
                            <RiBehanceFill className="w-6 h-6 cursor-pointer" />
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 sm:justify-end">
                        <Link href="#testimonials" className="hover:text-gray-200 text-sm">
                            Testimonials
                        </Link>
                        <Link href="#portfolio" className="hover:text-gray-200 text-sm">
                            Portfolio
                        </Link>
                        <Link href="#contact" className="hover:text-gray-200 text-sm">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
