import React from 'react';

interface TitleProps {
    heading: string;
    badge?: string; // Optional badge text
}

const Title: React.FC<TitleProps> = ({ heading, badge }) => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            {/* Badge with Line */}
            {badge && (
                <div className="flex items-center">
                    {/* Line */}
                    <span className="w-6 h-1.5 bg-yellow-600 rounded-full mr-2"></span>
                    {/* Badge Text */}
                    <span className="text-2xl text-[#3c2a0d] font-bold">{badge}</span>
                </div>
            )}
            {/* Heading */}
            <h1 className="text-5xl text-[#244927] font-bold text-center mt-2 mb-10">{heading}</h1>
        </div>
    );
};

export default Title;