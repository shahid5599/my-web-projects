import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Sparkles, ArrowUpRight, Cloud, Bot, Car, Trophy, Hash } from 'lucide-react';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const ProjectArt = ({ type, gradient }) => {
        return (
            <div className={`w-full h-56 relative overflow-hidden bg-gradient-to-br ${gradient} p-6 group-hover:scale-105 transition-transform duration-700`}>
                {/* Abstract Grid Overlay */}
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}
                />

                {/* Glowing Orbs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-colors duration-500" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-3xl" />

                {/* Central Icon Representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {type === 'weather' && (
                        <div className="relative">
                            <Cloud size={80} className="text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] opacity-90" />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="absolute -top-2 -right-2 text-yellow-300 drop-shadow-lg"
                            >
                                <Sparkles size={40} fill="currentColor" />
                            </motion.div>
                        </div>
                    )}
                    {type === 'ai' && (
                        <div className="relative">
                            <Bot size={80} className="text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] opacity-90" />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-20px] border-2 border-white/30 rounded-full border-dashed"
                            />
                        </div>
                    )}
                    {type === 'car' && (
                        <motion.div whileHover={{ x: 20 }} className="relative">
                            <Car size={80} className="text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] opacity-90" />
                            <div className="absolute top-1/2 -right-12 space-y-1">
                                <div className="w-8 h-1 bg-white/50 rounded-full" />
                                <div className="w-12 h-1 bg-white/30 rounded-full" />
                            </div>
                        </motion.div>
                    )}
                    {type === 'pingpong' && (
                        <div className="relative w-32 h-20 border-2 border-white/30 rounded-lg flex items-center justify-center">
                            <div className="absolute w-[2px] h-full bg-white/20 dashed" />
                            <Trophy size={48} className="text-white drop-shadow-lg relative z-10" />
                            <motion.div
                                animate={{ x: [-30, 30], y: [-15, 15] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                                className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"
                            />
                        </div>
                    )}
                    {type === 'number' && (
                        <div className="relative flex gap-2">
                            {[7, 4, 2].map((num, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                                    className="w-16 h-20 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center"
                                >
                                    <span className="text-4xl font-bold text-white font-mono">{num}</span>
                                </motion.div>
                            ))}
                        </div>
                    )}
                    {type === 'calculator' && (
                        <div className="grid grid-cols-3 gap-2 w-32">
                            {[1, 2, 3, 4, 1, 6, 7, 8, 9].map((_, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                                    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center border border-white/5"
                                >
                                    <div className="w-4 h-[2px] bg-white/40" />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const projects = [
        {
            title: 'Weather Dashboard',
            description: 'Real-time weather data visualization with dynamic backgrounds and forecast charts.',
            tags: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
            gradient: 'from-[#3b82f6] to-[#06b6d4]', // Blue to Cyan
            type: 'weather',
            link: '/projects/weather/index.html',
            status: 'Featured',
        },
        {
            title: 'AI Voice Assistant',
            description: 'Intelligent voice-controlled assistant capable of natural conversation and task automation.',
            tags: ['Python', 'OpenAI', 'Speech Rec', 'Neural Nets'],
            gradient: 'from-[#8b5cf6] to-[#c026d3]', // Purple to Fuchsia
            type: 'ai',
            link: '#',
            status: 'Coming Soon',
        },
        {
            title: 'Neon Racer',
            description: 'High-speed 2D racing game featuring physics-based controls and retro aesthetics.',
            tags: ['HTML5 Canvas', 'Physics Engine', 'Web Audio'],
            gradient: 'from-[#f59e0b] to-[#ef4444]', // Amber to Red
            type: 'car',
            link: '/projects/car-game/index.html',
        },
        {
            title: 'Retro Pong',
            description: 'Modern reimagining of the classic arcade game with AI opponents and particle effects.',
            tags: ['JavaScript', 'Game Loop', 'Particles'],
            gradient: 'from-[#10b981] to-[#3b82f6]', // Emerald to Blue
            type: 'pingpong',
            link: '/projects/pong-game/index.html',
        },
        {
            title: 'Logic Master',
            description: 'A collection of number-based puzzle games designed to test logic and memory.',
            tags: ['React', 'Algorithms', 'State Mgmt'],
            gradient: 'from-[#6366f1] to-[#8b5cf6]', // Indigo to Purple
            type: 'number',
            link: '/projects/guessing-game/game.html',
        },
        {
            title: 'Smart Calculator',
            description: 'A sleek, functional calculator with advanced mathematical operations and clean UI.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            gradient: 'from-[#ec4899] to-[#f43f5e]', // Pink to Rose
            type: 'calculator',
            link: '/projects/calculator/index.html',
        },
    ];

    return (
        <section id="projects" className="section relative">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block"
                    >
                        <div className="flex items-center gap-2 justify-center mb-4">
                            <div className="h-px w-8 bg-cyan-500/50" />
                            <span className="text-cyan-400 font-mono uppercase tracking-widest text-sm">Portfolio</span>
                            <div className="h-px w-8 bg-cyan-500/50" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                            Featured <span className="gradient-text">Creations</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const isComingSoon = project.status === 'Coming Soon';
                        const CardWrapper = isComingSoon ? 'div' : 'a';

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative h-full"
                            >
                                <CardWrapper
                                    href={isComingSoon ? undefined : project.link}
                                    target={isComingSoon ? undefined : "_blank"}
                                    rel={isComingSoon ? undefined : "noopener noreferrer"}
                                    className={`group block h-full relative rounded-2xl overflow-hidden glass-strong border-white/10 hover:border-cyan-500/30 transition-colors duration-500 ${isComingSoon ? 'cursor-not-allowed' : 'cursor-pointer'
                                        }`}
                                >
                                    <ProjectArt type={project.type} gradient={project.gradient} />

                                    {project.status && (
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${project.status === 'Coming Soon'
                                                ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                                                : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
                                                }`}>
                                                {project.status}
                                            </span>
                                        </div>
                                    )}

                                    <div className="p-8 relative z-10 bg-black/20 backdrop-blur-sm -mt-2">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <div
                                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                                            >
                                                <ArrowUpRight size={20} />
                                            </div>
                                        </div>

                                        <p className="text-gray-400 mb-6 leading-relaxed text-sm h-12 line-clamp-2">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="text-[10px] font-mono font-medium text-cyan-300 px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </CardWrapper>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
