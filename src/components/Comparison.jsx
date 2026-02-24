import React from 'react';

const Comparison = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-[#0f1623]" id="comparison">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white">Why Choose LilSwap?</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">See how we stack up against standard official interfaces.</p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-border-light dark:border-border-dark shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                            <thead className="bg-white dark:bg-card-dark text-slate-900 dark:text-white border-b border-border-light dark:border-border-dark">
                                <tr>
                                    <th className="px-6 py-6 font-display font-bold text-lg w-1/3">Feature</th>
                                    <th className="px-6 py-6 font-display font-bold text-lg w-1/3 text-center opacity-60">Official Interface</th>
                                    <th className="px-6 py-6 font-display font-bold text-lg w-1/3 text-center text-primary bg-primary/5">LilSwap</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light dark:border-border-dark bg-white dark:bg-card-dark">
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">Speed &amp; Reliability</td>
                                    <td className="px-6 py-5 text-center">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="material-symbols-outlined text-red-500 text-2xl">warning</span>
                                            <span className="text-xs font-medium text-slate-500">Too many steps &amp; Adapter delays</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center bg-primary/5">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="material-symbols-outlined text-green-500 text-2xl">check_circle</span>
                                            <span className="text-xs font-bold text-slate-900 dark:text-white">Direct &amp; Instant Execution</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">Debt Swap Fees</td>
                                    <td className="px-6 py-5 text-center">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="material-symbols-outlined text-red-500 text-2xl">payments</span>
                                            <span className="text-xs font-medium text-slate-500">Adapter Fees (~0.05%)</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center bg-primary/5">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="material-symbols-outlined text-green-500 text-2xl">money_off</span>
                                            <span className="text-xs font-bold text-slate-900 dark:text-white">0% Execution Fee (Gas Only)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">
                                        Collateral Swap Fees
                                        <span className="ml-2 text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded align-middle">soon</span>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="material-symbols-outlined text-red-500 text-2xl">payments</span>
                                            <span className="text-xs font-medium text-slate-500">Protocol + Adapter Fees (~0.30%)</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center bg-primary/5">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="material-symbols-outlined text-green-500 text-2xl">check_circle</span>
                                            <span className="text-xs font-bold text-slate-900 dark:text-white">67% Lower (~0.10%)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">Execution Type</td>
                                    <td className="px-6 py-5 text-center">
                                        <div className="flex flex-col items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 mb-1">
                                                <rect x="16" y="16" width="6" height="6" rx="1" />
                                                <rect x="2" y="16" width="6" height="6" rx="1" />
                                                <rect x="9" y="2" width="6" height="6" rx="1" />
                                                <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                                                <path d="M12 12V8" />
                                            </svg>
                                            <span className="text-xs font-medium text-slate-500">Adapter Dependent</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center bg-primary/5">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="material-symbols-outlined text-green-500 text-2xl">check_circle</span>
                                            <span className="text-xs font-bold text-slate-900 dark:text-white">Direct Smart Contract</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
