import React from 'react';

const Hero = () => {
    return (
        <header className="relative pt-32 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-50 pointer-events-none"></div>
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Fee-Optimized Interface
                </div>

                <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight">
                    Cost-Efficient <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan text-glow">Aave Position Manager</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    The smart alternative for managing Aave v3 lending positions. Swap debt with 0% execution fees and save up to 67% on collateral swaps compared to official interfaces.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://app.lilswap.xyz" className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 text-sm sm:text-base flex items-center justify-center gap-2 active:scale-95">
                        <span className="inline">Access App</span>
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </a>
                    <button disabled className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 px-8 py-3.5 rounded-xl font-bold transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-not-allowed">
                        <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-base">description</span>
                        <span className="inline flex items-center gap-2">Docs <span className="text-[10px] uppercase bg-slate-200 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded font-bold">Soon</span></span>
                    </button>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-border-light dark:border-border-dark pt-8">
                    <div>
                        <div className="text-3xl font-display font-bold text-accent-cyan">67%</div>
                        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">Max Savings</div>
                    </div>
                    <div>
                        <div className="text-3xl font-display font-bold text-primary">0%</div>
                        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">Execution Fee</div>
                    </div>
                    <div>
                        <div className="text-3xl font-display font-bold text-blue-500">Direct</div>
                        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">Smart Contract Call</div>
                    </div>
                    <div>
                        <div className="text-3xl font-display font-bold text-emerald-400">Instant</div>
                        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">Settlement</div>
                    </div>
                </div>

                <div className="mt-8 max-w-xl mx-auto text-center bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-5 text-sm text-slate-600 dark:text-slate-400 shadow-sm">
                    <p className="mb-2"><span className="font-bold text-primary">How it works:</span> LilSwap acts as a lean execution layer directly on top of Aave.</p>
                    <p>Since we only execute transactions against existing smart contracts, your funds remain securely in Aave—we just provide a cheaper, more efficient route to manage them.</p>
                </div>
            </div>
        </header>
    );
};

export default Hero;
