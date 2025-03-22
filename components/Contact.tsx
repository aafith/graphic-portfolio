"use client";

import { useState } from "react";
import { Button } from "./ui/button";

interface FormData {
    name: string;
    email: string;
    message: string;
}

function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = (): Partial<FormData> => {
        const newErrors: Partial<FormData> = {}; // changed to `const`
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section className="px-4 py-12" id="contact">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Contact Me</h2>
                <p className="text-center text-gray-600 mb-6">We&apos;d love to hear from you! Send us a message.</p> {/* Escaped single quote */}

                {submitted && <p className="text-green-600 text-center font-semibold">Message sent successfully!</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
                            placeholder="Your Name"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
                            placeholder="Your Email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
                            placeholder="Your Message"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    <Button
                        type="submit"
                        className="w-full text-white p-3 rounded font-semibold transition py-6"
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
