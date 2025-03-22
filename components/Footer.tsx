import Link from "next/link";
import { Separator } from "./ui/separator";
import { RiBehanceFill, RiDribbbleFill, RiFacebookFill, RiInstagramFill } from "@remixicon/react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-6 px-6 bg-gray-950 text-white">
            <div className="container mx-auto max-w-6xl flex flex-col items-center sm:flex-row justify-between space-y-6 sm:space-y-0">
                
                {/* Left Section: Copyright & Social Icons */}
                <div className="flex flex-col items-center sm:flex-row sm:space-x-6 text-sm">
                    <p className="text-sm text-center sm:text-left">
                        &copy; {currentYear} - All rights reserved.
                    </p>

                    <div className="hidden sm:block h-5">
                        <Separator orientation="vertical" />
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center items-center space-x-4">
                        <a href="#" aria-label="Facebook" className="hover:text-gray-400 transition">
                            <RiFacebookFill className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-gray-400 transition">
                            <RiInstagramFill className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Dribbble" className="hover:text-gray-400 transition">
                            <RiDribbbleFill className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Behance" className="hover:text-gray-400 transition">
                            <RiBehanceFill className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Right Section: Navigation Links */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-center sm:text-left">
                    <Link href="#testimonials" className="hover:text-gray-200 transition">
                        Testimonials
                    </Link>
                    <Link href="#portfolio" className="hover:text-gray-200 transition">
                        Portfolio
                    </Link>
                    <Link href="#contact" className="hover:text-gray-200 transition">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
