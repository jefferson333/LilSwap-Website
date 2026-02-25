import React from 'react';
import { useTranslation } from 'react-i18next';

const LilLogo = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 1536 1536"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
    >
        <rect x="0" y="0" width="1536" height="1536" rx="350" ry="350" fill="#643ab6" />
        <g transform="translate(768 768) scale(1.45) translate(-768 -768)">
            <g transform="translate(0,1536) scale(0.1,-0.1)" fill="#FFFFFF" stroke="none">
                <path d="M8348 10928 l-3 -412 -128 -22 c-593 -105 -1070 -425 -1300 -872 -116 -226 -157 -400 -157 -670 0 -375 94 -643 315 -902 106 -124 324 -288 504 -380 177 -90 463 -174 861 -254 306 -61 697 -150 800 -182 116 -35 243 -90 317 -136 177 -111 271 -303 252 -513 -18 -202 -137 -363 -349 -470 -164 -82 -335 -117 -585 -117 -291 -1 -463 37 -690 150 -100 49 -180 109 -258 192 -73 77 -98 117 -80 128 84 55 340 249 335 253 -12 11 -138 54 -387 134 -245 78 -861 278 -1129 366 -82 27 -152 47 -154 44 -4 -4 9 -428 23 -725 3 -58 9 -249 15 -425 6 -176 13 -375 16 -442 l6 -121 56 42 c32 23 112 83 180 134 67 51 124 92 127 92 3 0 48 -45 101 -100 97 -100 232 -210 359 -292 197 -127 526 -244 858 -305 l97 -17 0 -413 0 -413 500 0 500 0 0 415 c0 228 3 415 8 415 21 0 200 32 283 50 252 57 521 173 713 309 184 129 353 317 454 501 133 246 186 461 186 760 0 315 -64 549 -216 782 -218 335 -659 588 -1248 717 -52 12 -176 39 -275 61 -550 121 -682 154 -850 215 -265 96 -396 211 -447 394 -50 180 3 363 147 506 87 87 165 133 303 178 371 122 832 75 1115 -114 69 -46 157 -127 157 -144 0 -11 -11 -22 -205 -185 -60 -51 -111 -96 -113 -99 -1 -4 30 -15 70 -24 77 -18 323 -85 718 -194 360 -99 428 -118 670 -187 124 -35 227 -62 229 -60 2 2 -1 50 -7 106 -41 364 -147 1398 -159 1546 -3 39 -10 72 -14 72 -4 0 -34 -22 -66 -48 -32 -26 -115 -94 -185 -150 l-127 -103 -98 81 c-240 199 -550 344 -873 409 -52 10 -112 22 -132 25 l-38 7 0 409 0 410 -500 0 -500 0 -2 -412z" />
                <path d="M4380 7390 l0 -3110 1805 0 1805 0 -2 262 -3 262 -65 18 c-191 55 -311 93 -379 123 -170 73 -313 148 -436 229 l-130 86 -702 0 -703 0 0 2620 0 2620 -595 0 -595 0 0 -3110z" />
            </g>
        </g>
    </svg>
);

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed w-full z-50 top-0 border-b border-border-light dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="flex items-center gap-2 min-w-0">
                        <div className="shrink-0 flex items-center justify-center">
                            <LilLogo className="w-10 h-10 sm:w-12 sm:h-12" />
                        </div>
                        <div className="min-w-0 flex flex-col justify-center">
                            <div className="flex items-center gap-2 leading-none">
                                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                                    LilSwap
                                </h1>
                                <span className="px-1 py-0 rounded text-primary text-[8px] font-bold border-2 border-primary/30 mt-0.5">BETA</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 leading-none">
                                <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] sm:tracking-[0.2em]">{t('navbar.subtitle')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => scrollTo('dashboard')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('navbar.features')}</button>
                        <button onClick={() => scrollTo('comparison')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('navbar.advantages')}</button>
                        <button onClick={() => scrollTo('savings')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('navbar.savings')}</button>
                        <button onClick={() => scrollTo('roadmap')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('navbar.roadmap')}</button>
                        <button onClick={() => scrollTo('faq')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('navbar.faq')}</button>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-1 sm:gap-2 mr-2">
                            <button onClick={() => changeLanguage('en')} className={`text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-1 rounded transition-colors ${i18n.resolvedLanguage === 'en' ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'}`}>EN</button>
                            <button onClick={() => changeLanguage('pt-BR')} className={`text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-1 rounded transition-colors ${i18n.resolvedLanguage === 'pt-BR' ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'}`}>PT</button>
                        </div>
                        <button
                            className="flex items-center justify-center w-10 h-10 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors rounded-full active:scale-90"
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                        >
                            <span className="material-symbols-outlined text-2xl flex items-center justify-center">
                                {!isDarkMode ? 'dark_mode' : 'light_mode'}
                            </span>
                        </button>
                        <a href="https://app.lilswap.xyz" className="bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-95">
                            {t('navbar.swapNow')}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
