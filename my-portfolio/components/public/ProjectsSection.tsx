'use client';

import React from 'react';
import { Folder, ExternalLink, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';
import { ExtendedProject } from '@/types';

interface ProjectsSectionProps {
    projects: ExtendedProject[];
    expandedProjectId: string | null;
    setExpandedProjectId: (id: string | null) => void;
    isDarkMode: boolean;
}

export default function ProjectsSection({
    projects,
    expandedProjectId,
    setExpandedProjectId,
    isDarkMode
}: ProjectsSectionProps) {
    return (
        <section id="projects" className="space-y-6 sm:space-y-8 pt-6 sm:pt-10">
            <div>
                <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                    <Folder className="text-[#59B292] shrink-0" /> Project Case Studies
                </h2>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mt-1`}>Detailed engineering breakdowns showcasing problem-solving and measured output.</p>
            </div>

            <div className="space-y-6">
                {projects.map((proj) => {
                    const isExpanded = expandedProjectId === proj.id;
                    return (
                        <div
                            key={proj.id}
                            className={`p-5 sm:p-8 rounded-2xl border transition-all ${isDarkMode ? 'bg-[#121212] border-[#222222]' : 'bg-gray-50 border-gray-200'}`}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                <div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-xl sm:text-2xl font-bold">{proj.title}</h3>
                                        <span className={`text-xs px-2.5 py-1 rounded-md font-mono ${isDarkMode ? 'bg-[#222222] text-[#59B292]' : 'bg-gray-200 text-emerald-700'}`}>{proj.category}</span>
                                    </div>
                                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mt-2 sm:mt-1`}>{proj.summary}</p>
                                </div>

                                <div className="flex items-center gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-none border-[#222222]/20">
                                    {proj.liveUrl && (
                                        <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-[#59B292] hover:underline flex items-center gap-1">
                                            Live Preview <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    {proj.githubUrl && (
                                        <a href={proj.githubUrl} target="_blank" rel="noreferrer" className={`text-xs font-bold flex items-center gap-1 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                                            Source <svg className="w-3.5 h-3.5 fill-current inline" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {proj.tags.map((t, idx) => (
                                    <span key={idx} className={`text-xs px-2.5 py-1 rounded-md font-medium border ${isDarkMode ? 'bg-black border-[#222222] text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}>{t}</span>
                                ))}
                            </div>

                            {proj.problemStatement && (
                                <div className="border-t pt-4 border-[#222222]/30 space-y-4">
                                    <button
                                        onClick={() => setExpandedProjectId(isExpanded ? null : proj.id)}
                                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#59B292] hover:underline"
                                    >
                                        <Sparkles className="w-4 h-4 shrink-0" />
                                        <span className="truncate">{isExpanded ? "Hide Case Study Breakdown" : "Inspect Case Study Breakdown"}</span>
                                        {isExpanded ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
                                    </button>

                                    {isExpanded && (
                                        <div className={`p-4 sm:p-5 rounded-xl space-y-4 border text-sm ${isDarkMode ? 'bg-black/50 border-[#222222]' : 'bg-white border-gray-200'}`}>
                                            <div>
                                                <p className="font-bold text-xs uppercase tracking-wider text-[#59B292] mb-1">Problem Statement</p>
                                                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{proj.problemStatement}</p>
                                            </div>

                                            {proj.solutionHighlights && (
                                                <div>
                                                    <p className="font-bold text-xs uppercase tracking-wider text-[#59B292] mb-1">Technical Highlights</p>
                                                    <ul className="list-disc list-inside space-y-1 text-xs text-gray-400">
                                                        {proj.solutionHighlights.map((hl, i) => (
                                                            <li key={i} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{hl}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {proj.measuredImpact && (
                                                <div className="p-3 rounded-lg bg-[#59B292]/10 border border-[#59B292]/30 text-xs">
                                                    <span className="font-bold text-[#59B292] uppercase block sm:inline sm:mr-2">Measured Impact:</span>
                                                    <span className={isDarkMode ? 'text-gray-200' : 'text-gray-800'}>{proj.measuredImpact}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}