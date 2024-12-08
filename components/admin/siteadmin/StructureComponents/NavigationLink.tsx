import React from 'react';
import { motion } from 'framer-motion';

interface NavigationLinkProps {
    children: React.ReactNode;
    name: string;
    isOpen: boolean;
    onClick?: () => void; // New onClick prop
}

const NavigationLink = ({ children, name, isOpen, onClick }: NavigationLinkProps) => {
    return (
        <motion.a
            href="#"
            onClick={onClick}
            className="relative flex cursor-pointer p-2 rounded-lg stroke-[1.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-white place-items-center gap-3 transition-colors duration-100"
        >
            {/* Hover effect for collapsed sidebar */}
            {!isOpen && (
                <motion.div
                    initial={{
                        opacity: 0, scale: 0.9, backgroundColor: "rgba(101, 163, 13, 0.7)", // Lime green background
                    }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-lime-700/50 rounded-lg -z-10"
                />
            )}

            {/* Animated icon */}
            <motion.div
                initial={{ scale: 1 }}
                animate={{
                    scale: isOpen ? 1 : 0.8,
                    opacity: isOpen ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
            >
                {children}
            </motion.div>

            {/* Animated text */}
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    width: isOpen ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="text-inherit font-poppins whitespace-nowrap tracking-wide">{name}</p>
            </motion.div>
        </motion.a>
    );
};

export default NavigationLink;