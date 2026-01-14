import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(true);
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Github size={20} />, link: 'https://github.com', label: 'GitHub' },
        { icon: <Linkedin size={20} />, link: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: <Mail size={20} />, link: 'mailto:shahid@example.com', label: 'Email' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative overflow-hidden border-t border-white/10">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/50"></div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h3
                            className="text-2xl font-bold gradient-text mb-3"
                            whileHover={{ scale: 1.05 }}
                        >
                            Shahid
                        </motion.h3>
                        <p className="text-gray-400 mb-4">
                            Frontend Developer & AI Assistant Builder
                        </p>
                        <p className="text-gray-500 text-sm">
                            Building modern web experiences and intelligent solutions.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <motion.a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 inline-block"
                                        whileHover={{ x: 5, color: '#00d4ff' }}
                                    >
                                        {link.name}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: "spring" }}
                                    whileHover={{
                                        scale: 1.2,
                                        y: -8,
                                        rotate: [0, -10, 10, 0],
                                        transition: { duration: 0.3 }
                                    }}
                                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors glow relative group"
                                >
                                    {social.icon}
                                    {/* Hover ring */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover:opacity-100"
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.3, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                        <p className="text-gray-500 text-sm mt-4">
                            Let's connect and create something amazing!
                        </p>
                    </motion.div>
                </div>

                {/* Animated Divider */}
                <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {currentYear} Shahid. All rights reserved.
                    </p>
                    <motion.p
                        className="text-gray-500 text-sm flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        Made with{' '}
                        <motion.span
                            animate={{
                                scale: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Heart size={16} className="text-red-500" fill="currentColor" />
                        </motion.span>
                        {' '}using React & Framer Motion
                    </motion.p>
                </motion.div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0, 212, 255, 0.4)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg z-50 cursor-pointer"
                >
                    <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowUp size={24} />
                    </motion.div>
                </motion.button>
            )}

            {/* Background Decoration */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
            />
        </footer>
    );
};

export default Footer;
