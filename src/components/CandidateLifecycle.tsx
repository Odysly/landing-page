import { motion } from 'framer-motion';

export const CandidateLifecycle = () => {
    const steps = [
        {
            title: "Sync & Forget",
            description: "Preferences calibrated via chat.",
            status: "completed",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            )
        },
        {
            title: "24/7 Background Scan",
            description: "Scanning 15,000+ startups daily. No noise.",
            status: "active",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            )
        },
        {
            title: "Curated Delivery",
            description: "You only receive 95%+ matches.",
            status: "pending",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            )
        }
    ];

    return (
        <div className="h-full bg-[#121217] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-center relative shadow-2xl shadow-black/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-theme-primary/10 rounded-full blur-[80px] -z-10" />

            <h3 className="text-xl font-display font-bold text-white mb-8">Autopilot Lifecycle</h3>

            <div className="space-y-8 relative">
                {/* Connecting Line - simplified for demo */}
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-theme-border/30" />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative flex gap-4"
                    >
                        {/* Status Icon */}
                        <div className={`
                            relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 border-theme-bg shadow-xl flex-shrink-0
                            ${step.status === 'active' ? 'bg-theme-accent text-white shadow-theme-accent/20' :
                                step.status === 'completed' ? 'bg-theme-primary text-white shadow-theme-primary/20' :
                                    'bg-theme-bg-secondary text-theme-text-muted border-theme-border'}
                        `}>
                            {step.status === 'active' ? (
                                <span className="relative flex h-5 w-5 items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    {step.icon}
                                </span>
                            ) : step.icon}
                        </div>

                        <div className="pt-2">
                            <h4 className={`font-semibold text-lg ${step.status === 'pending' ? 'text-theme-text-muted' : 'text-white'}`}>
                                {step.title}
                            </h4>
                            <p className="text-theme-text-muted text-sm mt-1 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
