import React from 'react';

const Roadmap = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-[#0f1623]" id="roadmap">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white">Product Roadmap</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Our vision for the future of LilSwap protocol development.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -translate-y-1/2 z-0 rounded-full"></div>

                    <div className="relative z-10 bg-white dark:bg-card-dark rounded-2xl p-8 border border-border-light dark:border-border-dark shadow-lg flex flex-col h-full opacity-100 ring-2 ring-primary/30">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0">
                            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-primary/30 uppercase tracking-wide">Live Now</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-primary/40 mx-auto md:mx-0">1</div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">Phase 1</h3>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Foundations & Debt Swaps</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            Establishing core debt swap features and deploying across major L2 networks for maximum accessibility.
                        </p>
                    </div>

                    <div className="relative z-10 bg-white dark:bg-card-dark rounded-2xl p-8 border border-border-light dark:border-border-dark shadow-lg flex flex-col h-full opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center font-bold text-lg mb-6 mx-auto md:mx-0">2</div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">Phase 2</h3>
                        <h4 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-4">Collateral Swaps</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            Implementation of collateral swapping with highly optimized fees compared to standard protocol routes.
                        </p>
                    </div>

                    <div className="relative z-10 bg-white dark:bg-card-dark rounded-2xl p-8 border border-border-light dark:border-border-dark shadow-lg flex flex-col h-full opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center font-bold text-lg mb-6 mx-auto md:mx-0">3</div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">Phase 3</h3>
                        <h4 className="text-sm font-semibold text-accent-orange uppercase tracking-wider mb-4">MEV Protection</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            Integration with CoW Protocol and specialized infrastructure for secure, MEV-protected proxy execution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
