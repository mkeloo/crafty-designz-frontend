import React from "react";
import Image from "next/image";
import { shoppingBenefits } from "@/lib/data";

const ShoppingBenefits = () => {
    return (
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between space-x-8 py-12">
            {shoppingBenefits.map((benefit, index) => (
                <div
                    key={benefit.id}
                    className={`relative flex items-center space-x-4 text-left flex-1 ${index !== 0 ? "pl-8" : ""}`}
                >
                    {/* Divider for items 2 and 3 */}
                    {index !== 0 && (
                        <span className="absolute left-0 top-1/4 h-2/4 w-[2.5px] rounded-2xl bg-[#B6B6B6]"></span>
                    )}

                    {/* Icon with badge */}
                    <div className="relative flex-shrink-0">
                        <div className="relative z-0">
                            <Image
                                width={32}
                                height={32}
                                src={benefit.icon}
                                alt={benefit.title}
                                className="w-14 h-14"
                            />
                        </div>
                    </div>

                    {/* Title and Description */}
                    <div>
                        <h3 className="text-2xl font-inter font-medium text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-md text-gray-600">{benefit.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShoppingBenefits;