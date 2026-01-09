import { motion } from 'framer-motion';

export const CandidateInbox = () => {
    return (
        <div className="h-full bg-[#121217] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col relative shadow-2xl shadow-black/50">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-theme-accent/10 rounded-full blur-[80px] -z-10" />

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-display font-bold text-white">Inbox</h3>
                <div className="px-3 py-1 bg-theme-bg-secondary rounded-full border border-theme-border/50">
                    <span className="text-xs font-mono text-theme-accent">2 new</span>
                </div>
            </div>

            <p className="text-sm text-theme-text-muted mb-6">Your Curated Matches</p>

            <div className="space-y-4 flex-1">
                {/* Active Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative group bg-theme-bg/50 border border-theme-accent/50 rounded-2xl p-5 shadow-lg shadow-theme-accent/5"
                >
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#635BFF] rounded-lg flex items-center justify-center text-white font-bold">S</div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Stripe</h4>
                                <p className="text-white/60 text-xs">Staff Engineer</p>
                            </div>
                        </div>
                        <div className="text-theme-accent font-bold text-sm">96%</div>
                    </div>
                    <div className="flex gap-2 mt-4 ml-13">
                        <div className="px-2 py-1 rounded bg-[#635BFF]/10 text-[#635BFF] text-[10px] uppercase font-bold tracking-wider">Async</div>
                        <div className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] uppercase font-bold tracking-wider">Top 1% Salary</div>
                    </div>
                </motion.div>

                {/* Secondary Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-theme-bg/30 border border-theme-border/50 rounded-2xl p-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer flex justify-between items-center"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#FF5A5F] rounded-lg flex items-center justify-center text-white font-bold">A</div>
                        <div>
                            <h4 className="font-bold text-white text-sm">Airbnb</h4>
                            <p className="text-white/60 text-xs">Senior Frontend</p>
                        </div>
                    </div>
                    <div className="text-green-400 font-bold text-sm">94%</div>
                </motion.div>

                {/* Third Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-theme-bg/30 border border-theme-border/50 rounded-2xl p-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer flex justify-between items-center"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center font-bold">R</div>
                        <div>
                            <h4 className="font-bold text-white text-sm">Rippling</h4>
                            <p className="text-white/60 text-xs">Founding Engineer</p>
                        </div>
                    </div>
                    <div className="text-green-400/80 font-bold text-sm">91%</div>
                </motion.div>
            </div>
        </div>
    );
};
