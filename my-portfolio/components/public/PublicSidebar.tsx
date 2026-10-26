'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { User, Folder, Cpu, FileText, MessageSquare, Sun, Moon, Lock, ChevronLeft, ChevronRight } from 'lucide-react';

interface PublicSidebarProps {
    sidebarCollapsed: boolean;
    setSidebarCollapsed: (collapsed: boolean) => void;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    isDarkMode: boolean;
    setIsDarkMode: (dark: boolean) => void;
}

export default function PublicSidebar({
    sidebarCollapsed,
    setSidebarCollapsed,
    activeTab,
    setActiveTab,
    isDarkMode,
    setIsDarkMode,
}: PublicSidebarProps) {
    const router = useRouter();
    const navItems = [
        { id: 'about', label: 'About', icon: User },
        { id: 'projects', label: 'Projects', icon: Folder },
        { id: 'skills', label: 'Tech Stack', icon: Cpu },
        { id: 'cv', label: 'CV Inspector', icon: FileText },
        { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    ];

    return (
        <aside className={`hidden lg:flex fixed top-0 left-0 h-full transition-all duration-300 ease-in-out z-40 flex-col border-r overflow-hidden whitespace-nowrap ${isDarkMode ? 'bg-[#121212] border-[#222222]' : 'bg-gray-100 border-gray-200'} ${sidebarCollapsed ? 'w-20' : 'w-64'}`}>
            <div className={`p-4 border-b flex items-center justify-between min-w-[5rem] ${isDarkMode ? 'border-[#222222]' : 'border-gray-200'}`}>
                {!sidebarCollapsed && (
                    <div className="flex items-center gap-2 overflow-hidden">
                        <div className="w-3 h-3 rounded-full bg-[#59B292] shrink-0"></div>
                        <span className="font-bold tracking-wider text-sm uppercase truncate">Portfolio</span>
                    </div>
                )}
                <button
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    className={`p-2 rounded-lg transition shrink-0 ${isDarkMode ? 'hover:bg-[#222222] text-gray-400 hover:text-white' : 'hover:bg-gray-200 text-gray-600 hover:text-black'}`}
                >
                    {sidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
            </div>

            <nav className="p-3 space-y-1.5 overflow-hidden">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setActiveTab(item.id)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${isActive ? 'bg-[#59B292] text-black font-semibold' : isDarkMode ? 'text-gray-400 hover:bg-[#222222] hover:text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-black'}`}
                        >
                            <Icon className="w-5 h-5 shrink-0" />
                            <span className={`transition-opacity duration-200 ${sidebarCollapsed ? 'opacity-0' : 'opacity-100'}`}>{item.label}</span>
                        </a>
                    );
                })}
            </nav>

            <div className={`p-3 border-t space-y-1.5 mt-auto overflow-hidden ${isDarkMode ? 'border-[#222222]' : 'border-gray-200'}`}>

                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition text-sm font-medium ${isDarkMode ? 'bg-[#222222] text-yellow-400 hover:bg-[#333]' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                    {isDarkMode ? <Sun className="w-5 h-5 shrink-0" /> : <Moon className="w-5 h-5 shrink-0" />}
                    <span className={`transition-opacity duration-200 ${sidebarCollapsed ? 'opacity-0' : 'opacity-100'}`}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
            </div>
        </aside>
    );
}