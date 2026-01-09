import { HeroSection } from '../components/HeroSection';
import { TrustedCompanies } from '../components/TrustedCompanies';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { Testimonials } from '../components/Testimonials';
import { CandidateAgentDemo } from '../components/CandidateAgentDemo';
import { CandidateLifecycle } from '../components/CandidateLifecycle';
import { CandidateInbox } from '../components/CandidateInbox';
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

                    {/* Centered Dashboard Grid */}
                    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-60 pt-10">
                        {/* DASHBOARD GRID - Bento Layout */}
                        <div className="grid lg:grid-cols-12 gap-6 lg:h-[700px]">
                            {/* Main Agent Chat - Spans 7 columns */}
                            <div className="lg:col-span-7 h-[500px] md:h-[600px] lg:h-full">
                                <CandidateAgentDemo />
                            </div>

                            {/* Right Column - Spans 5 columns - Flex Column for Sidebar */}
                            <div className="lg:col-span-5 flex flex-col gap-6 lg:h-full">
                                <div className="min-h-[480px] md:min-h-[400px] lg:flex-1 lg:min-h-0">
                                    <CandidateLifecycle />
                                </div>
                                <div className="min-h-[520px] md:min-h-[450px] lg:flex-1 lg:min-h-0">
                                    <CandidateInbox />
                                </div>
                            </div>
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
