import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white p-4 z-50">
            <div className="container mx-auto max-w-6xl flex justify-between items-center">
                {/* Logo & Name */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="rounded-full w-12 h-12">
                        <Image
                            src="/avatar.jpg"
                            alt="profile"
                            width={100}
                            height={100}
                            className="w-full h-auto rounded-lg border"
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="font-semibold text-md">Lewis Nathaniel</h1>
                        <p className="text-sm text-gray-500">Graphic Designer</p>
                    </div>
                </Link>

                <div className="flex justify-center items-center gap-6">
                    <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
                        <li><Link href="#about" className="hover:font-semibold uppercase">About</Link></li>
                        <li><Link href="#portfolio" className="hover:font-semibold uppercase">Portfolio</Link></li>
                        <li><Link href="#testimonials" className="hover:font-semibold uppercase">Testimonials</Link></li>
                        <li><Link href="#contact" className="hover:font-semibold uppercase">Contact</Link></li>
                    </ul>

                    <Button variant="outline" className="uppercase rounded-full">Hire me</Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
