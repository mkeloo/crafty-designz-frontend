import React from "react";
import Image from "next/image";
import Title from "./ReusableComponents/Title";
import { dealOfDay } from "@/lib/data";

const DealOfDay = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-12">
            <Title badge="Deals" heading="Deal Of The Day" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dealOfDay.map((deal) => (
                    <div
                        key={deal.id}
                        className={`relative flex items-center bg-gray-100 rounded-lg p-6 ${deal.id % 2 === 0 ? "bg-yellow-500" : "bg-gray-200"}`}
                    >
                        {/* Discount Percent Badge */}
                        <div
                            className="absolute top-6 left-4 rounded-full text-white text-[15px] font-bold flex justify-center items-center bg-red-500 shadow-lg"
                            style={{
                                "--pulse-color": "rgba(255, 0, 0, 0.5)", // Tailwind's red-500 in RGBA
                                "--duration": "1.5s",
                                width: "50px",
                                height: "50px",
                            } as React.CSSProperties}
                        >
                            <div className="relative z-10">{deal.discount}%</div>
                            <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 min-h-[230px] pt-4 pl-6 flex flex-col items-start justify-between">
                            <div>
                                <span className="text-lg font-medium text-gray-700">
                                    Flat {deal.discount}% Discount
                                </span>
                                <h2 className="text-4xl font-raleway font-bold text-gray-900 mt-2 mb-4">
                                    {deal.title}
                                </h2>
                                <p className="text-md font-normal text-gray-600 mb-4">{deal.description}</p>
                            </div>
                            <div className="flex items-center justify-start">
                                <a
                                    href={deal.link}
                                    className="bg-[#244927] text-white py-4 px-6 rounded-full flex items-center justify-center hover:bg-[#1e3f21] transition-colors mt-auto"
                                >
                                    Shop Now <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex-shrink-0 flex items-center">
                            <Image
                                src={deal.image}
                                alt={deal.title}
                                width={200}
                                height={200}
                                className="w-[270px] h-[370px] rounded-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DealOfDay;