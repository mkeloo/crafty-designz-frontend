import React from 'react';

const FooterBottom = () => {
    // Get the year dynamically
    const currentYear = new Date().getFullYear();
    // bg-[#E4A220]

    return (
        <div className=" bg-yellow-500 w-full h-16 flex items-center justify-center">
            <div className='max-w-screen-2xl mx-auto w-full text-black text-sm font-noto font-medium px-10 flex items-center justify-between tracking-wider '>
                <div>
                    Copyright <span className='text-lg'>&copy;</span> {currentYear} CrafteDesignz Inc.
                </div>
                <div className="flex items-center justify-center space-x-10">
                    <a href="/terms-and-conditions" className="">
                        Terms & Conditions
                    </a>
                    <a href="/privacy-policy" className="">
                        Privacy Policy
                    </a>
                    <a href="/cookies-policy" className="">
                        Cookies Policy
                    </a>
                    <a href="/sitemap" className="">
                        Sitemap
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;