import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
    userType: 'candidate' | 'employer';
}

export const HeroSection = ({ userType }: HeroSectionProps) => {
    const content = {
        candidate: {
            headline: "Find the job that fits",
            headlineAccent: "YOU",
            subline: "not the other way around",
            description: "Stop scrolling through endless listings. Our AI matches you with roles that align with your career goals, values, and the company culture you actually want.",
            cta: "Start Your Journey",
            ctaSecondary: "See How It Works",
            highlights: [
                "Matched to your preferences",
                "Conversational, personal touch",
                "Zero filter fatigue",
            ],
        },
        employer: {
            headline: "Hire faster.",
            headlineAccent: "Smarter.",
            subline: "Zero guesswork.",
            description: "Access pre-vetted, top-tier candidates in 72 hours. No more manual filtering, no more unqualified applications. Just perfect matches, delivered.",
            cta: "Start Hiring Now",
            ctaSecondary: "Book a Demo",
            highlights: [
                "72h to first shortlist",
                "Pre-vetted talent pool",
                "Personalized outreach at scale",
            ],
        }
    };

    const currentContent = content[userType];

    return (
        <section className="relative w-full min-h-[75vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 pb-24 overflow-hidden">

            {/* Animated background gradient */}
            <div className="absolute inset-0 hero-gradient pointer-events-none" />

            {/* Floating orbs */}
            <div
                className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08] pointer-events-none transition-colors duration-1000 ${userType === 'candidate' ? 'bg-theme-primary' : 'bg-theme-primary'
                    }`}
            />
            <div
                className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.05] pointer-events-none transition-colors duration-1000 ${userType === 'candidate' ? 'bg-theme-accent' : 'bg-theme-accent'
                    }`}
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={userType}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 max-w-7xl mx-auto w-full"
                >
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                        {/* Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="mb-8"
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-balance">
                                {currentContent.headline}
                                <br className="hidden md:block" />
                                <span className="gradient-text mx-2">{currentContent.headlineAccent}</span>
                                {userType === 'candidate' && (
                                    <span className="text-theme-text-muted font-normal text-4xl md:text-5xl lg:text-6xl text-balance block mt-2">
                                        {currentContent.subline}
                                    </span>
                                )}
                                {userType === 'employer' && (
                                    <span className="text-theme-text block mt-2">
                                        {currentContent.subline}
                                    </span>
                                )}
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="text-lg md:text-xl text-theme-text-muted max-w-2xl leading-relaxed mb-10 text-balance"
                        >
                            {currentContent.description}
                        </motion.p>

                        {/* Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10"
                        >
                            {currentContent.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-theme-accent" />
                                    <span className="text-theme-text font-medium">{highlight}</span>
                                </div>
                            ))}
                        </motion.div>


                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-transform hover:-translate-y-0.5 active:translate-y-0">
                                {/* Button gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-theme-primary to-theme-accent opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-r from-theme-accent to-theme-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Button glow */}
                                <div className="absolute inset-0 rounded-full glow-primary opacity-50 group-hover:opacity-100 transition-opacity" />

                                <span className="relative z-10 flex items-center gap-2 text-white">
                                    {currentContent.cta}
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <button className="group px-8 py-4 rounded-full font-medium text-lg border border-theme-border bg-theme-surface/30 hover:bg-theme-surface/60 transition-all hover:-translate-y-0.5">
                                <span className="flex items-center gap-2">
                                    {currentContent.ctaSecondary}
                                </span>
                            </button>
                        </motion.div>

                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Scroll indicator removed as requested */}
        </section>
    );
};
