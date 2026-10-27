'use client';

import React from 'react';
import { 
  Sun, Moon, ChevronLeft, ChevronRight,
  FolderGit2, Code2, FileText, Quote, Mail, User 
} from 'lucide-react';

interface PublicSidebarProps {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (val: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function PublicSidebar({ 
  sidebarCollapsed, 
  setSidebarCollapsed, 
  activeTab, 
  setActiveTab, 
  isDarkMode, 
  setIsDarkMode 
}: PublicSidebarProps) {
  const navItems = [
    { id: 'about', label: 'About', icon: <User className="w-4 h-4 shrink-0" /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4 shrink-0" /> },
    { id: 'skills', label: 'Skills', icon: <Code2 className="w-4 h-4 shrink-0" /> },
    { id: 'cv', label: 'CV Inspector', icon: <FileText className="w-4 h-4 shrink-0" /> },
    { id: 'testimonials', label: 'Testimonials', icon: <Quote className="w-4 h-4 shrink-0" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4 shrink-0" /> },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className={`
      hidden lg:flex fixed top-0 left-0 z-40 h-screen flex-col p-4 md:p-5 border-r transition-all duration-300 overflow-y-auto justify-between
      ${sidebarCollapsed ? 'w-20' : 'w-64'}
      ${isDarkMode ? 'bg-[#121212] border-[#222222] text-white' : 'bg-white border-gray-200 text-gray-900'}
    `}>
      {/* Navigation List */}
      <nav className="space-y-1.5 pt-2 flex-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              title={sidebarCollapsed ? item.label : undefined}
              className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center p-3' : 'gap-3 px-3.5 py-2.5'} rounded-xl text-xs font-medium transition-all ${
                isActive
                  ? 'bg-[#59B292] text-black font-semibold shadow-sm'
                  : isDarkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-white/5' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              {item.icon}
              {!sidebarCollapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Bottom Footer Actions (Theme & Collapse - Pantay ang porma sa mobile at desktop) */}
      <div className={`pt-4 border-t border-gray-200 dark:border-[#222222] flex items-center ${sidebarCollapsed ? 'flex-col gap-2' : 'gap-2'}`}>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2.5 rounded-xl border transition flex items-center justify-center ${
            sidebarCollapsed ? 'w-full' : 'flex-1'
          } ${
            isDarkMode 
              ? 'border-[#222222] text-yellow-400 hover:bg-white/5' 
              : 'border-gray-200 text-gray-700 hover:bg-gray-100'
          }`}
          title="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className={`flex p-2.5 rounded-xl border transition items-center justify-center ${
            sidebarCollapsed ? 'w-full' : 'flex-1'
          } ${
            isDarkMode 
              ? 'border-[#222222] text-gray-400 hover:text-white hover:bg-white/5' 
              : 'border-gray-200 text-gray-600 hover:text-black hover:bg-gray-100'
          }`}
          title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>
    </aside>
  );
}