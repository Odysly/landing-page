import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, MessageCircle, Target, Sparkles } from 'lucide-react';

interface HeroSectionProps {
    userType: 'candidate' | 'employer';
}

export const HeroSection = ({ userType }: HeroSectionProps) => {
    const content = {
        candidate: {
            badge: "For ambitious talent",
            headline: "Find the job that fits",
            headlineAccent: "YOU",
            subline: "— not the other way around",
            description: "Stop scrolling through endless listings. Our AI matches you with roles that align with your career goals, values, and the company culture you actually want.",
            cta: "Start Your Journey",
            ctaSecondary: "See How It Works",
            highlights: [
                { icon: Target, text: "Matched to your preferences" },
                { icon: MessageCircle, text: "Conversational, personal touch" },
                { icon: Zap, text: "Zero filter fatigue" },
            ],
        },
        employer: {
            badge: "For forward-thinking teams",
            headline: "Hire faster.",
            headlineAccent: "Smarter.",
            subline: "Zero guesswork.",
            description: "Access pre-vetted, top-tier candidates in 72 hours. No more manual filtering, no more unqualified applications. Just perfect matches, delivered.",
            cta: "Start Hiring Now",
            ctaSecondary: "Book a Demo",
            highlights: [
                { icon: Zap, text: "72h to first shortlist" },
                { icon: Target, text: "Pre-vetted talent pool" },
                { icon: MessageCircle, text: "Personalized outreach at scale" },
            ],
        }
    };

    const currentContent = content[userType];

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">

            {/* Animated background gradient */}
            <div className="absolute inset-0 hero-gradient pointer-events-none" />

            {/* Floating orbs */}
            {/* Floating orbs - Optimized to static to prevent lag */}
            <div
                className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 transition-colors duration-1000 ${userType === 'candidate' ? 'bg-theme-primary' : 'bg-theme-primary'
                    }`}
            />
            <div
                className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 transition-colors duration-1000 ${userType === 'candidate' ? 'bg-theme-accent' : 'bg-theme-accent'
                    }`}
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={userType}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 max-w-6xl mx-auto w-full"
                >
                    {/* Asymmetric layout */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                        {/* Left side - Content */}
                        <div className="lg:col-span-7 space-y-8">

                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
                            >
                                <Sparkles size={14} className="text-theme-primary" />
                                <span className="text-xs font-semibold uppercase tracking-widest text-theme-text-muted">
                                    {currentContent.badge}
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                                    {currentContent.headline}
                                    <br />
                                    <span className="gradient-text">{currentContent.headlineAccent}</span>
                                    {userType === 'candidate' && (
                                        <span className="text-theme-text-muted font-normal text-4xl md:text-5xl lg:text-6xl">
                                            {' '}{currentContent.subline}
                                        </span>
                                    )}
                                    {userType === 'employer' && (
                                        <span className="text-theme-text">
                                            {' '}{currentContent.subline}
                                        </span>
                                    )}
                                </h1>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 }}
                                className="text-lg md:text-xl text-theme-text-muted max-w-xl leading-relaxed"
                            >
                                {currentContent.description}
                            </motion.p>

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

                        {/* Right side - Highlights / Visual */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="space-y-4"
                            >
                                {currentContent.highlights.map((highlight, index) => (
                                    <motion.div
                                        key={highlight.text}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + (index * 0.1) }}
                                        className="group glass rounded-2xl p-6 hover:bg-theme-surface/40 transition-all duration-300 cursor-default"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-theme-primary/20 to-theme-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <highlight.icon size={24} className="text-theme-primary" />
                                            </div>
                                            <span className="text-lg font-medium">{highlight.text}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-theme-border flex justify-center pt-2"
                >
                    <motion.div className="w-1 h-2 bg-theme-primary rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};
