import React, { useState, useRef, useEffect } from "react";
import Title from "./ReusableComponents/Title";
import Image from "next/image";
import CountdownTimer from "./ReusableComponents/CountdownTimer";
import { productCollections } from "@/lib/data";

const ProductCollections = () => {
    const [activeTab, setActiveTab] = useState("All Products");
    const [highlightedIndex, setHighlightedIndex] = useState(0); // Index of the highlighted product
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Refs for each product card
    const scrollContainerRef = useRef<HTMLDivElement | null>(null); // Ref for the scroll container

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollContainerRef.current) return;

            const container = scrollContainerRef.current;
            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;

            let minDistance = Infinity;
            let closestIndex = 0;

            cardRefs.current.forEach((cardRef, index) => {
                if (cardRef) {
                    const cardRect = cardRef.getBoundingClientRect();
                    const cardCenter = cardRect.left + cardRect.width / 2;

                    const distance = Math.abs(containerCenter - cardCenter);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                }
            });

            setHighlightedIndex(closestIndex);
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            // Trigger the handler to set the initial highlighted index
            handleScroll();
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    // Filter products based on active tab
    const filteredProducts =
        activeTab === "All Products"
            ? productCollections
            : productCollections.filter((product) => product.category === activeTab);

    return (
        <div className="w-full max-w-screen-2xl mx-auto py-12">
            {/* Title */}
            <Title badge="Product Collections" heading="Our Product Collections" />

            {/* Tabs */}
            <div className="flex items-center justify-center space-x-4">
                {["All Products", "Chunky Blankets"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-4 rounded-full font-medium ${activeTab === tab
                                ? "bg-[#244927] text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Product Cards */}
            <div
                className="mt-12 h-[90vh] overflow-x-auto scrollbar-hidden relative"
                ref={scrollContainerRef}
            >
                {/* Add padding to ensure space for scaling */}
                <div className="flex space-x-4 w-max mx-20 py-10">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            ref={(el) => {
                                cardRefs.current[index] = el; // Assign each card to its ref
                            }}
                            className={`min-w-[380px] rounded-2xl overflow-hidden relative bg-white flex flex-col transform transition-transform ${highlightedIndex === index
                                    ? "scale-105 shadow-xl z-10"
                                    : "scale-90"
                                }`}
                            style={{
                                transition: "transform 0.3s ease-in-out",
                            }}
                        >
                            {/* Discount Badge */}
                            {product.discount_badge && (
                                <span className="absolute top-4 left-3 bg-[#244927] text-white text-xs font-bold py-2 px-2 rounded-2xl">
                                    {product.discount_badge}% OFF
                                </span>
                            )}

                            <div className="bg-gray-300 rounded-lg">
                                {/* Product Image */}
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={350}
                                    height={350}
                                    className="w-[300px] h-[320px] mx-auto rounded-t-lg pb-4 mt-4 -mb-6 px-4"
                                />

                                {/* Countdown Timer or Placeholder */}
                                <div
                                    className={`text-black h-16 text-center rounded-b-lg flex items-center justify-center ${product.flash_timer
                                            ? "bg-yellow-500"
                                            : "bg-gray-300"
                                        }`}
                                >
                                    {product.flash_timer ? (
                                        <CountdownTimer time={product.flash_timer} />
                                    ) : (
                                        <span className="invisible">Placeholder</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col h-full">
                                {/* Product Info */}
                                <div className="p-4 flex-1">
                                    <p className="text-sm text-gray-500">{product.category}</p>
                                    <h3 className="text-lg font-medium text-gray-900 mt-1">
                                        {product.title}
                                    </h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="text-lg font-bold text-[#244927]">
                                            ${product.discount_price.toFixed(2)}
                                        </div>
                                        <div className="text-sm text-gray-500 line-through">
                                            ${product.price.toFixed(2)}
                                        </div>
                                    </div>
                                </div>

                                {/* Shop Now Button */}
                                <div className="flex items-center justify-center px-4 py-2 pb-4">
                                    <a
                                        href={product.link}
                                        className="bg-[#244927] text-white py-4 px-6 rounded-full flex items-center justify-center hover:bg-[#1e3f21] transition-colors"
                                    >
                                        Shop Now <span className="ml-2">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCollections;