"use client";
import React, { useState } from 'react';
import Navigation from '@/components/admin/siteadmin/StructureComponents/Navigation';
import { motion } from 'framer-motion';

const SiteAdminPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar state
    const [currentPage, setCurrentPage] = useState('Dashboard'); // Track current page

    return (
        <main className="w-full min-h-screen h-fit flex flex-row relative bg-black">
            {/* Sidebar */}
            <Navigation
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                setCurrentPage={setCurrentPage} // Pass the updater function to Navigation
            />

            {/* Main Content */}
            <motion.section
                animate={{
                    marginLeft: isSidebarOpen ? '16rem' : '5.5rem', // Adjust margin based on sidebar state
                }}
                transition={{
                    type: 'spring',
                    damping: 15,
                    stiffness: 100,
                }}
                className="flex flex-col p-10 w-full min-h-screen h-fit gap-5"
            >
                <h1 className="text-4xl text-neutral-200">{currentPage}</h1> {/* Dynamic page title */}
                <div className="w-full h-80 border border-neutral-500/50 bg-neutral-800/20 rounded" />
                <div className="flex flex-row gap-5 w-full">
                    <div className="w-1/2 h-60 border border-neutral-500/50 bg-neutral-800/20 rounded" />
                    <div className="w-1/2 h-60 border border-neutral-500/50 bg-neutral-800/20 rounded" />
                </div>
            </motion.section>
        </main>
    );
};

export default SiteAdminPage;