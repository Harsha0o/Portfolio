'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function ContactSection() {
    const [mounted, setMounted] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Check if response has content
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Server returned an invalid response. Please try again later.');
            }

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset to idle after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');

            // Reset error after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section className="section-container" id="contact">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={mounted && inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-yellow-400 font-semibold mb-4 uppercase tracking-wider text-sm"
                    >
                        Get In Touch
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        Let's Work <span className="gradient-text">Together</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={mounted && inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 text-lg max-w-3xl mx-auto"
                    >
                        Have a project in mind or want to discuss opportunities? I'd love to hear from you!
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={mounted && inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        {/* Client-only render to prevent hydration mismatch from extensions */}
                        {mounted ? (
                            <form onSubmit={handleSubmit} className="card space-y-6 relative overflow-hidden">
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 bg-[#0a0e27]/95 flex flex-col items-center justify-center z-10 text-center p-6"
                                    >
                                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                                            <i className="ri-check-line text-green-500 text-3xl"></i>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                                    </motion.div>
                                )}

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 bg-[#0a0e27]/95 flex flex-col items-center justify-center z-10 text-center p-6"
                                    >
                                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                                            <i className="ri-close-line text-red-500 text-3xl"></i>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h3>
                                        <p className="text-gray-400">{errorMessage}</p>
                                    </motion.div>
                                )}

                                <div>
                                    <label htmlFor="name" className="block text-white font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white font-medium mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white font-medium mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`btn-primary w-full justify-center ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {status === 'submitting' ? (
                                        <span className="flex items-center">
                                            <i className="ri-loader-4-line animate-spin mr-2"></i>
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            <i className="ri-send-plane-line"></i>
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        ) : (
                            <div className="card h-[500px] flex items-center justify-center">
                                <div className="animate-pulse text-gray-500">Loading form...</div>
                            </div>
                        )}
                    </motion.div>

                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={mounted && inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="space-y-6"
                    >
                        {[
                            {
                                icon: 'ri-mail-line',
                                title: 'Email',
                                value: 'harshavardhanyempally302@gmail.com',
                                href: 'mailto:harshavardhanyempally302@gmail.com',
                                color: 'from-yellow-500 to-yellow-600',
                            },
                            {
                                icon: 'ri-phone-line',
                                title: 'Phone',
                                value: '+91 95421 95741',
                                href: 'tel:+919542195741',
                                color: 'from-green-500 to-green-600',
                            },
                            {
                                icon: 'ri-linkedin-line',
                                title: 'LinkedIn',
                                value: 'Harsha Vardhan Yempally',
                                href: 'https://www.linkedin.com/in/harsha-vardhan-yempally',
                                color: 'from-blue-500 to-blue-600',
                            },
                            {
                                icon: 'ri-github-line',
                                title: 'GitHub',
                                value: '@Harsha0o',
                                href: 'https://github.com/Harsha0o',
                                color: 'from-gray-600 to-gray-700',
                            },
                        ].map((contact, index) => (
                            <motion.a
                                key={index}
                                href={contact.href}
                                target={contact.href.startsWith('http') ? '_blank' : undefined}
                                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="card flex items-center group cursor-pointer"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform`}>
                                    <i className={`${contact.icon} text-white text-3xl`}></i>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold mb-1">{contact.title}</h3>
                                    <p className="text-gray-400 text-sm group-hover:text-yellow-400 transition-colors break-all">
                                        {contact.value}
                                    </p>
                                </div>
                                <i className="ri-arrow-right-line text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-2 transition-all"></i>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

