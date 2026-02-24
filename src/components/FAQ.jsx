import React from 'react';

const FAQ = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-[#0f1623]" id="faq">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-display font-bold mb-12 text-center dark:text-white">Frequently Asked Questions</h2>
                <div className="space-y-4">

                    <details className="group bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                            <span className="font-medium text-lg dark:text-slate-200">Is LilSwap a separate lending protocol?</span>
                            <span className="transition group-open:rotate-180">
                                <span className="material-symbols-outlined text-slate-400">expand_more</span>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-border-light dark:border-border-dark pt-4">
                            No, LilSwap is simply an alternative, cost-efficient interface. You are interacting directly with Aave V3 smart contracts, just doing so through a highly optimized execution layer.
                        </div>
                    </details>

                    <details className="group bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                            <span className="font-medium text-lg dark:text-slate-200">Why are your fees lower than the official UI?</span>
                            <span className="transition group-open:rotate-180">
                                <span className="material-symbols-outlined text-slate-400">expand_more</span>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-border-light dark:border-border-dark pt-4">
                            Official adapters often charge hidden execution fees just to route your transactions. We eliminate those. For debt swaps, we charge absolutely 0% execution fees compared to the standard ~0.05%. For collateral swaps, our routing reduces the total fee impact down to 0.10%, instead of the typical ~0.30% charged elsewhere.
                        </div>
                    </details>

                    <details className="group bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                            <span className="font-medium text-lg dark:text-slate-200">Can I manage my existing Aave positions here?</span>
                            <span className="transition group-open:rotate-180">
                                <span className="material-symbols-outlined text-slate-400">expand_more</span>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-border-light dark:border-border-dark pt-4">
                            Yes! Since LilSwap connects directly to Aave V3, any position you opened through the official Aave interface will automatically be visible and manageable on our application.
                        </div>
                    </details>

                    <details className="group bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                            <span className="font-medium text-lg dark:text-slate-200">Does LilSwap ever hold my funds?</span>
                            <span className="transition group-open:rotate-180">
                                <span className="material-symbols-outlined text-slate-400">expand_more</span>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-border-light dark:border-border-dark pt-4">
                            No. LilSwap is strictly a non-custodial execution layer. Your assets always remain securely within the audited Aave V3 smart contracts—we never take ownership of your funds at any point.
                        </div>
                    </details>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
