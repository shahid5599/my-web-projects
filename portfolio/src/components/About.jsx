import { motion } from 'framer-motion';
import { Heart, Code, Lightbulb, Award, Cpu, Globe, Zap } from 'lucide-react';

const About = () => {
    // ... highlights data remains ...
    const highlights = [
        {
            icon: <Code size={24} />,
            title: 'Modern Development',
            description: 'Building responsive web applications',
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Creative Solutions',
            description: 'Solving complex problems efficiently',
        },
        {
            icon: <Heart size={24} />,
            title: 'User Focused',
            description: 'Creating intuitive user experiences',
        },
    ];

    return (
        <section id="about" className="section relative overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="flex justify-center mb-6">
                        <Award className="text-cyan-400" size={40} />
                    </div>
                    <h2 className="gradient-text text-4xl font-bold mb-4">About Me</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left: Abstract Composition instead of Avatar */}
                    <div className="relative flex justify-center items-center h-[400px]">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute w-80 h-80 border border-white/10 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute w-60 h-60 border border-cyan-500/20 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: 180 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute w-40 h-40 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full backdrop-blur-3xl"
                        />

                        {/* Central Tech Stack Visualization */}
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <motion.div whileHover={{ scale: 1.1 }} className="glass p-4 rounded-xl flex items-center justify-center">
                                <Cpu size={32} className="text-cyan-400" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="glass p-4 rounded-xl flex items-center justify-center">
                                <Globe size={32} className="text-purple-400" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="glass p-4 rounded-xl flex items-center justify-center">
                                <Zap size={32} className="text-pink-400" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="glass p-4 rounded-xl flex items-center justify-center">
                                <Code size={32} className="text-blue-400" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold font-heading">
                                Crafting meaningful <span className="gradient-text">digital experiences</span>
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                I specialize in building scalable frontend architectures and integrating AI capabilities into web applications. My approach combines technical precision with creative problem-solving.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors"
                                >
                                    <div className="p-2 bg-white/5 rounded-lg text-cyan-400">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
