"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { RiStarFill } from "@remixicon/react";
import Image from "next/image";

const testimonials = [
    { id: 1, name: "John Doe", review: "Amazing service! Highly recommended.", rating: 5, image: "/user1.jpg" },
    { id: 2, name: "Jane Smith", review: "Their creativity and efficiency. Highly recommended.", rating: 4, image: "/user2.jpg" },
    { id: 3, name: "Michael Brown", review: "They transformed my ideas into reality!", rating: 5, image: "/user3.jpg" },
    { id: 4, name: "Sarah Wilson", review: "Professional and friendly team! Highly recommended.", rating: 5, image: "/user4.jpg" },
    { id: 5, name: "David Miller", review: "Absolutely loved their work! Highly recommended.", rating: 5, image: "/user5.jpg" },
];

function Testimonials() {
    return (
        <section className="px-4 py-12" id="testimonials">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
                <p className="text-gray-600 mt-2">Real reviews from our happy clients!</p>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 4000 }}
                loop
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="w-full max-w-4xl mx-auto"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="bg-white p-6 rounded-xl border text-center">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={64}
                                height={64}
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                            <div className="flex justify-center mt-2">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <RiStarFill key={i} className="text-yellow-500 w-5 h-5" />
                                ))}
                            </div>
                            <p className="text-gray-600 mt-3">{testimonial.review}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Testimonials;
