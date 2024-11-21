import React from 'react';
import Image from 'next/image';
import { totalStock } from '@/lib/data';

const TotalStock = () => {
    return (
        <div className="w-full h-full max-w-7xl mx-auto px-6 py-12 flex items-center justify-center gap-6">
            {/* Left Column - Larger Card */}
            <div className="w-[45%] h-[600px] flex items-center p-6 border rounded-2xl shadow-lg bg-gray-200">
                {/* Left Section - Details */}
                <div className="w-1/2 h-full py-12 flex flex-col">
                    {/* Total Items */}
                    <div className="mb-3">
                        <span className="bg-white text-black text-[15px] font-medium px-4 py-3 rounded-full">
                            <span className='text-yellow-600 font-bold font-outfit'>{totalStock[0].totalItems}+</span> Items
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl font-raleway font-bold text-gray-900 mt-2 mb-4">{totalStock[0].title}</h2>

                    {/* Description */}
                    <p className="text-sm font-poppins tracking-widest text-[#767676] mb-3">{totalStock[0].description}</p>

                    {/* List of Items */}
                    <ul className="text-sm text-gray-800 space-y-1">
                        {totalStock[0].list.map((listItem, index) => (
                            <li key={index} className="list-inside capitalize font-poppins tracking-widest text-[#767676]">
                                {listItem}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section - Image */}
                <div className="w-1/2 h-full flex justify-center items-center">
                    <Image
                        src={totalStock[0].image}
                        alt={totalStock[0].title}
                        width={200}
                        height={200}
                        className="w-full h-[80%] object-cover"
                    />
                </div>
            </div>

            {/* Right Column - Two Smaller Cards */}
            <div className="w-[55%] h-[600px] flex flex-col gap-6">
                {/* Top Smaller Card */}
                <div className="h-[50%] flex items-center pl-6 border rounded-2xl shadow-lg bg-gray-200">
                    {/* Left Section - Details */}
                    <div className="w-1/2 flex flex-col">
                        {/* Total Items */}
                        <div className="mb-3 mt-6 ">
                            <span className="bg-white text-black text-[15px] font-medium px-4 py-3 rounded-full">
                                <span className='text-yellow-600 font-bold font-outfit'>{totalStock[1].totalItems}+</span> Items
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl font-raleway font-bold text-gray-900 mt-2 mb-4">{totalStock[1].title}</h2>

                        {/* List of Items */}
                        <ul className="text-sm text-gray-800 space-y-1">
                            {totalStock[1].list.map((listItem, index) => (
                                <li key={index} className="list-inside capitalize font-poppins tracking-widest text-[#767676]">
                                    {listItem}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section - Image */}
                    <div className="w-1/2 flex justify-center items-center">
                        <Image
                            src={totalStock[1].image}
                            alt={totalStock[1].title}
                            className="w-full h-[80%]  object-cover"
                        />
                    </div>
                </div>

                {/* Bottom Smaller Card */}
                <div className="h-[50%] flex items-center px-6 border rounded-2xl shadow-lg bg-gray-200">
                    {/* Left Section - Details */}
                    <div className="w-1/2 flex flex-col">
                        {/* Total Items */}
                        <div className="mb-3">
                            <span className="bg-white text-black text-[15px] font-medium px-4 py-3 rounded-full">
                                <span className='text-yellow-600 font-bold font-outfit'>{totalStock[2].totalItems}+</span> Items
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl font-raleway font-bold text-gray-900 mt-2 mb-4">{totalStock[2].title}</h2>

                        {/* List of Items */}
                        <ul className="text-sm text-gray-800 space-y-1">
                            {totalStock[2].list.map((listItem, index) => (
                                <li key={index} className="list-inside capitalize font-poppins tracking-widest text-[#767676]">
                                    {listItem}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section - Image */}
                    <div className="w-1/2 h-full pb-12 flex justify-center items-center">
                        <Image
                            src={totalStock[2].image}
                            alt={totalStock[2].title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalStock;