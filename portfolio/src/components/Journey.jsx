import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Code, Lightbulb, Trophy, Zap, Target, Calendar } from 'lucide-react';

const Journey = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const milestones = [
        {
            year: '2023',
            title: 'Started Web Development',
            description: 'Began learning HTML, CSS, and JavaScript fundamentals',
            icon: <Rocket size={24} />,
            color: 'from-cyan-500 to-blue-500',
        },
        {
            year: '2023',
            title: 'First Projects',
            description: 'Built interactive games including Ping Pong and Number Guessing',
            icon: <Code size={24} />,
            color: 'from-blue-500 to-purple-500',
        },
        {
            year: '2024',
            title: 'Advanced JavaScript',
            description: 'Mastered advanced concepts and created a 2D Car Game',
            icon: <Zap size={24} />,
            color: 'from-purple-500 to-pink-500',
        },
        {
            year: '2024',
            title: 'React & Modern Frameworks',
            description: 'Learned React and built dynamic, component-based applications',
            icon: <Target size={24} />,
            color: 'from-pink-500 to-orange-500',
        },
        {
            year: '2024',
            title: 'API Integration',
            description: 'Developed Weather Website with real-time API data integration',
            icon: <Lightbulb size={24} />,
            color: 'from-orange-500 to-yellow-500',
        },
        {
            year: '2025',
            title: 'AI Assistant Development',
            description: 'Currently building an intelligent AI assistant with Python',
            icon: <Trophy size={24} />,
            color: 'from-yellow-500 to-cyan-500',
        },
    ];

    return (
        <section id="journey" className="section relative overflow-hidden bg-gradient-to-b from-slate-950/50 to-transparent">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="inline-block mb-4"
                    >
                        <Calendar className="text-cyan-400 mx-auto" size={32} />
                    </motion.div>
                    <h2 className="gradient-text mb-6">My Journey</h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        A timeline of growth, learning, and achievement in web development
                    </motion.p>
                </motion.div>

                {/* Timeline */}
                <div ref={ref} className="max-w-4xl mx-auto relative">
                    {/* Vertical Line with draw animation */}
                    <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-20"
                        initial={{ height: 0 }}
                        animate={isInView ? { height: '100%' } : { height: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Milestones */}
                    <div className="space-y-16">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.15,
                                    ease: [0.6, 0.05, 0.01, 0.9]
                                }}
                                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}
                            >
                                {/* Content Card */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        x: index % 2 === 0 ? 15 : -15,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="flex-1 glass-strong p-6 rounded-2xl relative group cursor-pointer"
                                >
                                    {/* Animated Gradient Border on hover */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-r ${milestone.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-sm`}
                                        whileHover={{ scale: 1.05 }}
                                    />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <motion.div
                                                className={`p-3 bg-gradient-to-r ${milestone.color} rounded-lg`}
                                                whileHover={{
                                                    rotate: [0, -15, 15, 0],
                                                    scale: 1.2,
                                                    transition: { duration: 0.5 }
                                                }}
                                            >
                                                {milestone.icon}
                                            </motion.div>
                                            <motion.span
                                                className="text-cyan-400 font-bold text-xl"
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                                            >
                                                {milestone.year}
                                            </motion.span>
                                        </div>
                                        <motion.h3
                                            className="text-xl font-bold text-white mb-2"
                                            whileHover={{ x: 5, color: '#00d4ff' }}
                                        >
                                            {milestone.title}
                                        </motion.h3>
                                        <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                                    </div>

                                    {/* Corner glow effect */}
                                    <motion.div
                                        className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} w-24 h-24 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500`}
                                    />
                                </motion.div>

                                {/* Center Dot with pulse */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    className="relative z-10"
                                >
                                    <motion.div
                                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${milestone.color} shadow-lg`}
                                        whileHover={{ scale: 1.5 }}
                                    >
                                        {/* Continuous pulse ring */}
                                        <motion.div
                                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${milestone.color}`}
                                            animate={{
                                                scale: [1, 2, 2],
                                                opacity: [0.8, 0, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeOut",
                                            }}
                                        />
                                    </motion.div>
                                </motion.div>

                                {/* Spacer for alternating layout */}
                                <div className="flex-1"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Continue Arrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center mt-16"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full cursor-pointer"
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <span className="text-gray-400">Journey continues...</span>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-cyan-400 text-xl"
                            >
                                ↓
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Animated Background Decorations */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05],
                    x: [0, 50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.1, 0.05],
                    x: [0, -50, 0],
                }}
                transition={{ duration: 18, repeat: Infinity }}
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
            />
        </section>
    );
};

export default Journey;
