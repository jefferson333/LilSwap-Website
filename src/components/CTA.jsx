import React from 'react';

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary opacity-5 dark:opacity-10 pointer-events-none"></div>
            <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white">Ready to optimize your yield?</h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">Start managing your lending positions with zero execution fees and maximum efficiency.</p>
                <a href="https://app.lilswap.xyz" className="inline-block bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300">
                    Swap Now
                </a>
            </div>
        </section>
    );
};

export default CTA;
