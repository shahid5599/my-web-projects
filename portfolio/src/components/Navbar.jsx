import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, User, Mail, Zap, Compass, Hexagon } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['home', 'projects', 'skills', 'about', 'journey', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', icon: <Home size={18} /> },
        { name: 'Projects', href: '#projects', icon: <Briefcase size={18} /> },
        { name: 'Skills', href: '#skills', icon: <Zap size={18} /> },
        { name: 'About', href: '#about', icon: <User size={18} /> },
        { name: 'Journey', href: '#journey', icon: <Compass size={18} /> },
        { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
            >
                <div className="pointer-events-auto">
                    <motion.div
                        className={`
              relative flex items-center gap-1 p-2 rounded-full border transition-all duration-500
              ${isScrolled
                                ? 'bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl scale-95'
                                : 'bg-black/60 backdrop-blur-md border-white/5 shadow-lg'
                            }
            `}
                        layout
                    >
                        {/* Abstract CSS Logo */}
                        <motion.a
                            href="#home"
                            onClick={(e) => scrollToSection(e, '#home')}
                            className="relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-white/5 border border-white/10 ml-1 group"
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Hexagon size={24} className="text-cyan-400 absolute" strokeWidth={1.5} />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                                <span className="font-heading font-bold text-white relative z-10 text-sm">S</span>
                            </div>
                        </motion.a>

                        <div className="hidden md:flex items-center mx-2">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className={`
                      relative px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                    `}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10 flex items-center gap-2">
                                            {isActive && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>{link.icon}</motion.span>}
                                            {link.name}
                                        </span>
                                    </motion.a>
                                );
                            })}
                        </div>

                        <motion.a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, '#contact')}
                            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white mr-1 hover:bg-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Mail size={20} />
                        </motion.a>

                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-white mr-1"
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </motion.div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed top-24 left-4 right-4 z-40 md:hidden"
                    >
                        <div className="bg-[#0f0f13]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden">
                            <div className="grid grid-cols-2 gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`
                       flex flex-col items-center justify-center p-4 rounded-2xl gap-2 transition-colors
                       ${activeSection === link.href.substring(1)
                                                ? 'bg-white/10 text-white border border-white/5'
                                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-transparent'
                                            }
                     `}
                                    >
                                        {link.icon}
                                        <span className="text-sm font-medium">{link.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
