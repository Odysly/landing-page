import { HeroSection } from '../components/HeroSection';
import { TrustedCompanies } from '../components/TrustedCompanies';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { Testimonials } from '../components/Testimonials';
import { CandidateLifecycle } from '../components/CandidateLifecycle';
import { motion, useScroll, useSpring } from 'framer-motion';

export const Home = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="w-full bg-theme-bg transition-colors duration-700">
            {/* progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-theme-primary to-theme-accent transform origin-left z-[100]"
                style={{ scaleX }}
            />

            <main>
                {/* SECTION 1: CANDIDATE (Default Theme) */}
                <section id="candidate-section" className="relative">
                    {/* Noise overlay only on dark section if desired, or global */}
                    <div className="noise-overlay" />

                    {/* Full Width Hero */}
                    <HeroSection userType="candidate" />

                    {/* Full Width Companies */}
                    <TrustedCompanies userType="candidate" />

                    {/* Centered Lifecycle Section */}
                    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-32 pt-10">
                        <div className="max-w-2xl mx-auto">
                            <CandidateLifecycle />
                        </div>
                    </div>
                </section>

                {/* SECTION 2: EMPLOYER (Cream Theme) */}
                <section id="employer-section" className="theme-employer relative bg-theme-bg text-theme-text transition-colors duration-700">
                    <div>
                        <HeroSection userType="employer" />
                        <TrustedCompanies userType="employer" />
                        <FeatureShowcase userType="employer" />
                        <Testimonials />
                    </div>
                </section>
            </main>
        </div>
    );
};
