"use client";

import { useEffect } from "react";
import Lenis from 'lenis'

const LenisProvider = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // Adjust smoothness
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null; // This component doesn't render anything
};

export default LenisProvider;
