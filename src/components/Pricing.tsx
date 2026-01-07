import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, features, isHighlighted = false, buttonText, description }: {
    title: string;
    price: string;
    features: string[];
    isHighlighted?: boolean;
    buttonText: string;
    description: string;
}) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`relative p-8 rounded-3xl border ${isHighlighted
            ? 'bg-theme-bg border-theme-primary/30 shadow-2xl glass'
            : 'bg-theme-bg-secondary/50 border-theme-border glass-subtle'
            } flex flex-col`}
    >
        {isHighlighted && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-theme-primary to-theme-accent text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                Most Popular
            </div>
        )}

        <div className="mb-8">
            <h3 className="text-xl font-display font-semibold text-theme-text mb-2">{title}</h3>
            <p className="text-sm text-theme-text-muted h-10">{description}</p>
        </div>

        <div className="mb-8">
            <div className="flex items-baseline gap-1">
                <span className="text-4xl font-display font-bold text-theme-text">{price}</span>
            </div>
        </div>

        <div className="space-y-4 mb-8 flex-1">
            {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${isHighlighted ? 'bg-theme-primary/20 text-theme-primary' : 'bg-theme-border text-theme-text-muted'}`}>
                        <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-theme-text-muted leading-relaxed">{feature}</span>
                </div>
            ))}
        </div>

        <button className={`w-full py-3 rounded-xl font-semibold transition-all ${isHighlighted
            ? 'bg-gradient-to-r from-theme-primary to-theme-accent text-white hover:opacity-90 shadow-lg hover:shadow-theme-primary/25'
            : 'bg-theme-surface border border-theme-border text-theme-text hover:bg-theme-border'
            }`}>
            {buttonText}
        </button>
    </motion.div>
);

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Simple, transparent pricing</h2>
                    <p className="text-xl text-theme-text-muted max-w-2xl mx-auto">
                        We only make money when you find the perfect match. No hidden fees, no subscriptions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Candidate Pricing */}
                    <PricingCard
                        title="For Talent"
                        price="Free"
                        description="Always free for candidates. We're here to champion your career, not charge for it."
                        features={[
                            "Unlimited profile visibility",
                            "AI Career Coach access",
                            "Salary transparency on every role",
                            "Direct matching with top companies",
                            "Privacy-first profile controls"
                        ]}
                        buttonText="Create Profile"
                    />

                    {/* Employer Pricing */}
                    <PricingCard
                        title="For Companies"
                        price="1 Month Salary"
                        description="One simple fee per successful hire. Includes our 100% satisfaction guarantee."
                        isHighlighted={true}
                        features={[
                            "Unlimited role postings",
                            "AI-verified candidate matches",
                            " Automated scheduling & screening",
                            "3-Month Guarantee: Free replacement or refund if they leave",
                            "Dedicated Account Manager"
                        ]}
                        buttonText="Start Hiring"
                    />
                </div>
            </div>
        </section>
    );
};
