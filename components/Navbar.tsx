"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white p-4 z-50">
            <div className="container mx-auto max-w-6xl flex justify-between items-center">
                {/* Logo & Name */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="rounded-lg w-12 h-12 overflow-hidden border">
                        <Image
                            src="/avatar.jpg"
                            alt="profile"
                            width={100}
                            height={100}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="font-semibold text-md">Lewis Nathaniel</h1>
                        <p className="text-sm text-gray-500">Graphic Designer</p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex space-x-6 text-gray-700 font-medium text-sm">
                        <li><Link href="#about" className="hover:font-semibold">About</Link></li>
                        <li><Link href="#portfolio" className="hover:font-semibold">Portfolio</Link></li>
                        <li><Link href="#testimonials" className="hover:font-semibold">Testimonials</Link></li>
                        <li><Link href="#contact" className="hover:font-semibold">Contact</Link></li>
                    </ul>
                </div>

                <Button className="rounded hidden md:flex">Hire Me</Button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 focus:outline-none"
                >
                    {menuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4">
                    <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium text-sm">
                        <li><Link href="#about" onClick={() => setMenuOpen(false)} className="hover:font-semibold">About</Link></li>
                        <li><Link href="#portfolio" onClick={() => setMenuOpen(false)} className="hover:font-semibold">Portfolio</Link></li>
                        <li><Link href="#testimonials" onClick={() => setMenuOpen(false)} className="hover:font-semibold">Testimonials</Link></li>
                        <li><Link href="#contact" onClick={() => setMenuOpen(false)} className="hover:font-semibold">Contact</Link></li>
                    </ul>
                    <div className="mt-4 flex justify-center">
                        <Button className="rounded">Hire Me</Button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
