"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import portfolioData from "@/data/portfolioData";
import Image from "next/image";
import { Button } from "../ui/button";

function Portfolio() {
    const [selectedTab, setSelectedTab] = useState("all");
    const [visibleCount, setVisibleCount] = useState(9);

    // Filter portfolio items based on selected tab (category)
    const filteredPortfolio =
        selectedTab === "all"
            ? portfolioData
            : portfolioData.filter((project) => project.category === selectedTab);

    // Slice the filtered portfolio
    const visiblePortfolio = filteredPortfolio.slice(0, visibleCount);

    // Function to handle "Load More" button click
    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 9);
    };

    return (
        <section className="px-4 py-8 md:py-8 lg:py-8" id="portfolio">
            <Tabs value={selectedTab} onValueChange={(value) => setSelectedTab(value)} className="w-full">
                <div className="flex justify-center items-center py-8 px-5 flex-wrap gap-4">
                    <TabsList className="flex flex-wrap justify-center space-x-2 md:space-x-4 rounded-full px-5">
                        <TabsTrigger value="all" className="rounded-full py-2">All</TabsTrigger>
                        <TabsTrigger value="logo" className="rounded-full py-2">Logo</TabsTrigger>
                        <TabsTrigger value="branding" className="rounded-full py-2">Branding</TabsTrigger>
                        <TabsTrigger value="poster" className="rounded-full py-2">Posters</TabsTrigger>
                    </TabsList>
                </div>

                {/* Display filtered and visible content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visiblePortfolio.length > 0 ? (
                        visiblePortfolio.map((project) => (
                            <div key={project.id} className="border p-4 rounded-md">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={1080}
                                    height={1080}
                                    className="w-full h-78 object-cove6r rounded-md mb-4 hover:scale-105 duration-300 transition-all"
                                />
                                <p className="text-gray-500 uppercase text-sm">{project.category}</p>
                                <h3 className="font-bold">{project.title}</h3>
                            </div>
                        ))
                    ) : (
                        <p>No projects found in this category.</p>
                    )}
                </div>

                {/* "Load More" Button */}
                {visiblePortfolio.length < filteredPortfolio.length && (
                    <div className="flex justify-center mt-8">
                        <Button onClick={handleLoadMore} variant="outline" className="rounded">Load More Work</Button>
                    </div>
                )}
            </Tabs>
        </section>
    );
}

export default Portfolio;
