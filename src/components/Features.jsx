import React from 'react';

const Features = () => {
    return (
        <section className="py-24 relative overflow-hidden" id="features">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white">DeFi Made Cost-Efficient</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
                    <div className="md:col-span-2 row-span-2 bg-white dark:bg-card-dark rounded-3xl p-8 border border-border-light dark:border-border-dark relative overflow-hidden group hover:border-primary/50 transition-colors duration-300 shadow-lg">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary text-2xl">bolt</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 dark:text-white">Built for Maximum Fee Efficiency</h3>
                                <p className="text-slate-600 dark:text-slate-400 max-w-md mb-4">
                                    A simple, straight-to-the-point interface optimized for executing your lending positions without the heavy tax. We focus on lightweight logic so you pay less at checkout.
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 max-w-md">
                                    Only pay network gas—no added adapter fees for debt shifting. Execute pure 0% fee debt swaps directly via our dashboard.
                                </p>
                            </div>

                            <div className="mt-8 flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-sm border border-slate-100 dark:border-slate-700">
                                    <img src="/icons/networks/ethereum.svg" alt="Ethereum" className="w-full h-full object-contain" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-sm border border-slate-100 dark:border-slate-700">
                                    <img src="/icons/networks/base.svg" alt="Base" className="w-full h-full object-contain" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-sm border border-slate-100 dark:border-slate-700">
                                    <img src="/icons/networks/polygon.svg" alt="Polygon" className="w-full h-full object-contain" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-sm border border-slate-100 dark:border-slate-700">
                                    <img src="/icons/networks/binance.svg" alt="BNB Chain" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-card-dark rounded-3xl p-8 border border-border-light dark:border-border-dark group hover:border-accent-orange/50 transition-colors duration-300 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-accent-orange text-2xl">dns</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">Direct Protocol Access</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Interact directly with underlying smart contracts. No middlemen, no delays, pure efficient execution.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-card-dark rounded-3xl p-8 border border-border-light dark:border-border-dark group hover:border-accent-cyan/50 transition-colors duration-300 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="w-12 h-12 bg-accent-cyan/10 rounded-xl flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-accent-cyan text-2xl">percent</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">Low-Cost Collateral Swaps</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Upcoming feature offering up to 67% lower fees than standard adapters for all your collateral management needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
