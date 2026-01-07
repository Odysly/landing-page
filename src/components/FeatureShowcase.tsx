import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Heart, Filter, MessageSquare,
    Clock, Shield, Megaphone
} from 'lucide-react';

interface FeatureShowcaseProps {
    userType: 'candidate' | 'employer';
}

interface Feature {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    description: string;
    stats?: { value: string; label: string };
}

const FeatureCard = ({
    feature,
    index
}: {
    feature: Feature;
    index: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="py-12 md:py-20 max-w-4xl mx-auto"
        >
            {/* Content side - Centered */}
            <div className="space-y-6 text-center flex flex-col items-center">
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-theme-primary/10 to-theme-accent/5 border border-theme-border flex items-center justify-center mb-4"
                >
                    <feature.icon size={32} className="text-theme-primary" />
                </motion.div>

                {/* Subtitle */}
                <p className="text-theme-accent font-semibold text-sm uppercase tracking-widest">
                    {feature.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-3xl lg:text-5xl font-display font-bold leading-tight max-w-2xl">
                    {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xl text-theme-text-muted leading-relaxed max-w-2xl">
                    {feature.description}
                </p>

                {/* Stats if available */}
                {feature.stats && (
                    <div className="pt-6">
                        <div className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-5">
                            <span className="text-5xl font-display font-bold gradient-text">
                                {feature.stats.value}
                            </span>
                            <span className="text-theme-text-muted text-sm max-w-24 text-left leading-tight">
                                {feature.stats.label}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export const FeatureShowcase = ({ userType }: FeatureShowcaseProps) => {
    const features: Record<'candidate' | 'employer', Feature[]> = {
        candidate: [
            {
                icon: Heart,
                subtitle: "Personalized matching",
                title: "Your preferences, our priority",
                description: "We don't just match keywords. Our AI understands your career goals, preferred company culture, work-life balance needs, and growth aspirations to find roles you'll actually love.",
                stats: { value: "94%", label: "match satisfaction rate" }
            },
            {
                icon: Filter,
                subtitle: "Smart curation",
                title: "No more filter fatigue",
                description: "Forget scrolling through hundreds of listings. We automatically surface the 10-15 roles that truly fit—so you can focus on preparing, not searching.",
            },
            {
                icon: MessageSquare,
                subtitle: "Human-like AI",
                title: "A personal recruiter in your pocket",
                description: "Our conversational AI feels like chatting with a career coach. Ask questions, get advice, refine your search—all through natural conversation, not endless forms.",
                stats: { value: "24/7", label: "always available" }
            }
        ],
        employer: [
            {
                icon: Clock,
                subtitle: "Speed to hire",
                title: "72 hours to your first shortlist",
                description: "While traditional recruiting takes weeks, our AI scans, screens, and delivers a curated list of qualified candidates before your morning coffee gets cold.",
                stats: { value: "72h", label: "average time to shortlist" }
            },
            {
                icon: Shield,
                subtitle: "Quality guaranteed",
                title: "Pre-vetted, top-tier talent",
                description: "Every candidate is screened for technical skills, cultural fit, and genuine interest. No more wading through unqualified applications—just ready-to-interview talent.",
                stats: { value: "Top 5%", label: "of applicants" }
            },
            {
                icon: Megaphone,
                subtitle: "Scaled personalization",
                title: "Outreach that actually works",
                description: "Our AI crafts personalized messages that resonate with passive candidates. It's the personal touch of a boutique recruiter, at the scale your growth demands.",
                stats: { value: "80%", label: "response rate" }
            }
        ]
    };

    const currentFeatures = features[userType];
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    return (
        <section ref={sectionRef} className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
            {/* Section background accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-theme-border to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                        {userType === 'candidate'
                            ? 'How we find your perfect fit'
                            : 'How we accelerate your hiring'
                        }
                    </h2>
                    <p className="text-xl text-theme-text-muted max-w-2xl mx-auto">
                        {userType === 'candidate'
                            ? 'Three pillars of a job search that actually works for you.'
                            : 'Three ways we transform your recruiting process.'
                        }
                    </p>
                </motion.div>

                {/* Features - Vertical layout with alternating sides */}
                <div className="">
                    {currentFeatures.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            feature={feature}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
