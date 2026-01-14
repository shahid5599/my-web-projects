import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 100]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Ambient Background Elements with Parallax */}
            <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
            <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Available for work</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight leading-[1.1]">
                            Hello, I'm <br />
                            <span className="gradient-text">Shahid</span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                            Frontend Developer & AI Specialist transforming ideas into
                            <span className="text-white font-medium"> fluid</span>,
                            <span className="text-white font-medium"> alive</span>, and
                            <span className="text-white font-medium"> intelligent</span> digital experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.button
                                onClick={() => scrollToSection('#projects')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary group"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>

                            <motion.a
                                href="/resume.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium flex items-center gap-2 justify-center group"
                            >
                                <Download size={18} />
                                <span>Resume</span>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right: Floating Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative flex justify-center lg:justify-end"
                    >
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-64 h-64 md:w-96 md:h-96"
                        >
                            {/* Glow behind avatar */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-[60px] opacity-40 animate-pulse" />

                            {/* Avatar Image */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-black/50 backdrop-blur-sm">
                                <img
                                    src="/assets/avatar-3d.png"
                                    alt="Shahid"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating decorative elements */}
                            <motion.div
                                animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                className="absolute -top-4 -right-4 bg-[#1a1a1a] p-3 rounded-xl border border-white/10 shadow-xl"
                            >
                                <MousePointer2 className="text-cyan-400" size={24} />
                            </motion.div>

                            <motion.div
                                animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                                className="absolute -bottom-4 -left-4 bg-[#1a1a1a] p-3 rounded-xl border border-white/10 shadow-xl"
                            >
                                <span className="text-2xl">✨</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => scrollToSection('#projects')}
            >
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
