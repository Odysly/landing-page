import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { addToWaitlist } from '../lib/supabase';

interface WaitlistFormProps {
    className?: string;
}

export const WaitlistForm = ({ className = '' }: WaitlistFormProps) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            setErrorMessage('Please enter a valid email');
            return;
        }

        setStatus('loading');
        const result = await addToWaitlist(email);

        if (result.success) {
            setStatus('success');
            setEmail('');
        } else {
            setStatus('error');
            setErrorMessage(result.error || 'Something went wrong');
        }
    };

    return (
        <div className={className}>
            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex items-center gap-3 px-6 py-4 rounded-full bg-green-500/10 border border-green-500/30"
                    >
                        <Check className="text-green-500" size={20} />
                        <span className="text-green-500 font-medium">You're on the waitlist!</span>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="relative flex flex-col sm:flex-row gap-3"
                    >
                        <div className="relative flex-1">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (status === 'error') setStatus('idle');
                                }}
                                placeholder="Enter your email"
                                className={`w-full px-6 py-4 rounded-full bg-theme-surface/50 border ${status === 'error'
                                    ? 'border-red-500/50 focus:border-red-500'
                                    : 'border-theme-border focus:border-theme-primary'
                                    } backdrop-blur-sm text-theme-text placeholder:text-theme-text-muted focus:outline-none focus:ring-2 focus:ring-theme-primary/20 transition-all`}
                                disabled={status === 'loading'}
                            />
                            {status === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -bottom-6 left-6 text-sm text-red-500"
                                >
                                    {errorMessage}
                                </motion.p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {/* Button gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-theme-primary to-theme-accent opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-r from-theme-accent to-theme-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Button glow */}
                            <div className="absolute inset-0 rounded-full glow-primary opacity-50 group-hover:opacity-100 transition-opacity" />

                            <span className="relative z-10 flex items-center gap-2 text-white">
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Joining...
                                    </>
                                ) : (
                                    <>
                                        Join Waitlist
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </span>
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};
