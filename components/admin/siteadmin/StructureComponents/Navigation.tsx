"use client";
import React, { useEffect, useState } from 'react';
import {
    ArrowRight,
    ChartArea,
    SquareStack,
    LayoutList,
    FileText,
    PackageSearch,
    Users,
} from 'lucide-react';
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import NavigationLink from './NavigationLink';
import ProjectLink from './ProjectLink';
import ProjectNavigation from './ProjectNavigation';

const containerVariants = {
    close: {
        width: '4.5rem',
        transition: {
            type: 'spring',
            damping: 15,
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
    open: {
        width: '16rem',
        transition: {
            type: 'spring',
            damping: 15,
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
};

const svgVariants = {
    close: {
        rotate: 360,
        transition: {
            type: 'spring',
            damping: 15,
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
    open: {
        rotate: 180,
        transition: {
            type: 'spring',
            damping: 15,
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
};

interface NavigationProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (val: boolean) => void;
    setCurrentPage: (page: string) => void; // Function to update current page
}

const Navigation = ({ isSidebarOpen, setIsSidebarOpen, setCurrentPage }: NavigationProps) => {
    const [isOpen, setIsOpen] = useState(isSidebarOpen); // Sync local state with parent
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const containerControls = useAnimationControls();
    const svgControls = useAnimationControls();

    useEffect(() => {
        if (isOpen) {
            containerControls.start('open');
            svgControls.start('open');
        } else {
            containerControls.start('close');
            svgControls.start('close');
        }
    }, [isOpen]);

    const handleOpenClose = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        setIsSidebarOpen(newState); // Sync with parent
        setSelectedProject(null); // Reset project-specific navigation
    };

    const handleNavigationClick = (page: string) => {
        if (!isOpen) {
            setIsOpen(true);
            setIsSidebarOpen(true); // Ensure parent state is updated
        }
        setCurrentPage(page); // Update the current page in the main content
        setSelectedProject(null); // Reset project-specific navigation
    };

    return (
        <>
            <motion.nav
                variants={containerVariants}
                animate={containerControls}
                initial="close"
                className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600"
            >
                <div className="w-full flex flex-row justify-between place-items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" />
                    <button
                        className="p-1 rounded-full flex"
                        onClick={handleOpenClose}
                    >
                        <motion.span
                            variants={svgVariants}
                            animate={svgControls}
                            initial="close"
                        >
                            <ArrowRight
                                strokeWidth={2}
                                className="w-6 h-6 stroke-neutral-200"
                            />
                        </motion.span>
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <NavigationLink
                        name="Dashboard"
                        isOpen={isOpen}
                        onClick={() => handleNavigationClick('Dashboard')}
                    >
                        <ChartArea
                            strokeWidth={2}
                            className="stroke-inherit stroke-[0.75] min-w-8 w-8"
                        />
                    </NavigationLink>
                    <NavigationLink
                        name="Projects"
                        isOpen={isOpen}
                        onClick={() => handleNavigationClick('Projects')}
                    >
                        <SquareStack
                            strokeWidth={2}
                            className="stroke-inherit stroke-[0.75] min-w-8 w-8"
                        />
                    </NavigationLink>
                    <NavigationLink
                        name="Tasks"
                        isOpen={isOpen}
                        onClick={() => handleNavigationClick('Tasks')}
                    >
                        <LayoutList
                            strokeWidth={2}
                            className="stroke-inherit stroke-[0.75] min-w-8 w-8"
                        />
                    </NavigationLink>
                    <NavigationLink
                        name="Reporting"
                        isOpen={isOpen}
                        onClick={() => handleNavigationClick('Reporting')}
                    >
                        <FileText
                            strokeWidth={2}
                            className="stroke-inherit stroke-[0.75] min-w-8 w-8"
                        />
                    </NavigationLink>
                    <NavigationLink
                        name="Inventory"
                        isOpen={isOpen}
                        onClick={() => handleNavigationClick('Inventory')}
                    >
                        <PackageSearch
                            strokeWidth={2}
                            className="stroke-inherit stroke-[0.75] min-w-8 w-8"
                        />
                    </NavigationLink>
                    <NavigationLink
                        name="Users"
                        isOpen={isOpen}
                        onClick={() => handleNavigationClick('Users')}
                    >
                        <Users
                            strokeWidth={2}
                            className="stroke-inherit stroke-[0.75] min-w-8 w-8"
                        />
                    </NavigationLink>
                </div>
                <div className="flex flex-col gap-3">
                    <ProjectLink
                        name="Virtual Reality"
                        setSelectedProject={setSelectedProject}
                        setIsOpen={setIsOpen} // Ensure the main sidebar opens
                        isOpen={isOpen}
                    >
                        <div className="min-w-4 mx-2 border-pink-600 border rounded-full aspect-square bg-pink-700" />
                    </ProjectLink>
                    <ProjectLink
                        name="Apple Vision Pro"
                        setSelectedProject={setSelectedProject}
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                    >
                        <div className="min-w-4 mx-2 border-indigo-600 border rounded-full aspect-square bg-indigo-700" />
                    </ProjectLink>
                    <ProjectLink
                        name="Augmented Reality"
                        setSelectedProject={setSelectedProject}
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                    >
                        <div className="min-w-4 mx-2 border-emerald-600 border rounded-full aspect-square bg-emerald-700" />
                    </ProjectLink>
                    <ProjectLink
                        name="AI Labs"
                        setSelectedProject={setSelectedProject}
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                    >
                        <div className="min-w-4 mx-2 border-lime-200 border rounded-full aspect-square bg-lime-500" />
                    </ProjectLink>
                </div>
            </motion.nav>
            <AnimatePresence>
                {selectedProject && (
                    <ProjectNavigation
                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                        isOpen={isOpen}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;