import React from 'react';
import { useTranslation } from 'react-i18next';

const LogosSection = () => {
    const { t } = useTranslation();
    return (
        <section className="py-12 bg-slate-50/50 dark:bg-background-dark/50 border-y border-border-light dark:border-border-dark backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-10">{t('logosSection.title')}</h3>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                    {/* Main Markets */}
                    {[
                        { name: 'Ethereum', icon: '/icons/networks/ethereum.svg' },
                        { name: 'Base', icon: '/icons/networks/base.svg' },
                        { name: 'Polygon', icon: '/icons/networks/polygon.svg' },
                        { name: 'BNB Chain', icon: '/icons/networks/binance.svg' },
                    ].map((network) => (
                        <div key={network.name} className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center p-1 shadow-md border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-all duration-300">
                                <img src={network.icon} alt={network.name} className="w-7 h-7 object-contain" />
                            </div>
                            <span className="font-display font-semibold text-lg text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{network.name}</span>
                        </div>
                    ))}

                    {/* And more coming */}
                    <div className="flex items-center gap-4 bg-slate-100/50 dark:bg-white/5 pl-4 pr-6 py-2.5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 ml-2">
                        <div className="flex -space-x-4">
                            <div title="Arbitrum" className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 p-1.5 shadow-md border border-slate-100 dark:border-slate-700 relative z-10">
                                <img src="/icons/networks/arbitrum.svg" alt="Arbitrum" className="w-full h-full object-contain" />
                            </div>
                            <div title="Avalanche" className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 p-1.5 shadow-md border border-slate-100 dark:border-slate-700 relative z-20">
                                <img src="/icons/networks/avalanche.svg" alt="Avalanche" className="w-full h-full object-contain" />
                            </div>
                            <div title="Gnosis" className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 p-1.5 shadow-md border border-slate-100 dark:border-slate-700 relative z-30">
                                <img src="/icons/networks/gnosis.svg" alt="Gnosis" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white shadow-md border-2 border-white dark:border-slate-900 relative z-40">
                                <span className="material-symbols-outlined text-lg font-bold">add</span>
                            </div>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">{t('logosSection.moreComing')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogosSection;
