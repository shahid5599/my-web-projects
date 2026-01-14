import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Database, Terminal, Cpu, Globe, Server, Zap } from 'lucide-react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const skillCategories = [
        {
            category: 'Frontend',
            icon: <Palette size={24} />,
            skills: [
                { name: 'HTML', level: 95, icon: <Code2 size={20} /> },
                { name: 'CSS', level: 90, icon: <Palette size={20} /> },
                { name: 'JavaScript', level: 88, icon: <Terminal size={20} /> },
                { name: 'React', level: 85, icon: <Cpu size={20} /> },
            ],
            color: 'from-cyan-500 to-blue-500',
        },
        {
            category: 'Backend & Tools',
            icon: <Server size={24} />,
            skills: [
                { name: 'Python', level: 80, icon: <Database size={20} /> },
                { name: 'APIs', level: 82, icon: <Globe size={20} /> },
                { name: 'Linux', level: 75, icon: <Terminal size={20} /> },
            ],
            color: 'from-purple-500 to-pink-500',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
        },
    };

    return (
        <section id="skills" className="section relative overflow-hidden bg-gradient-to-b from-transparent to-slate-950/50">
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
                        initial={{ rotate: 0 }}
                        whileInView={{ rotate: 360 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="inline-block mb-4"
                    >
                        <Zap className="text-purple-400 mx-auto" size={32} />
                    </motion.div>
                    <h2 className="gradient-text mb-6">Skills & Technologies</h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        A comprehensive toolkit for building modern web applications and AI solutions
                    </motion.p>
                </motion.div>

                {/* Skills Grid */}
                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 60, rotateX: -15 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: catIndex * 0.2 }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                            className="glass-strong p-8 rounded-2xl"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-8">
                                <motion.div
                                    className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: [0, -10, 10, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    {category.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                            </div>

                            {/* Skills List */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="space-y-6"
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        variants={itemVariants}
                                        whileHover={{ x: 10 }}
                                    >
                                        {/* Skill Name */}
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <motion.span
                                                    className="text-cyan-400"
                                                    whileHover={{
                                                        scale: 1.3,
                                                        rotate: 360,
                                                        transition: { duration: 0.5 }
                                                    }}
                                                >
                                                    {skill.icon}
                                                </motion.span>
                                                <span className="text-white font-medium text-lg">{skill.name}</span>
                                            </div>
                                            <motion.span
                                                className="text-gray-400 text-sm font-semibold"
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: catIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                                            >
                                                {skill.level}%
                                            </motion.span>
                                        </div>

                                        {/* Progress Bar with smooth fill animation */}
                                        <div className="h-2.5 bg-white/5 rounded-full overflow-hidden relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 1.5,
                                                    delay: catIndex * 0.2 + skillIndex * 0.15,
                                                    ease: [0.6, 0.05, 0.01, 0.9]
                                                }}
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                                            >
                                                {/* Shimmer effect */}
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                    animate={{
                                                        x: ['-100%', '200%'],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                        delay: catIndex * 0.2 + skillIndex * 0.15 + 1,
                                                    }}
                                                />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 mb-6 text-lg">Also experienced with:</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Git', 'Responsive Design', 'Problem Solving', 'UI/UX', 'Debugging', 'Agile'].map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.08,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    y: -8,
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.3 }
                                }}
                                className="glass px-5 py-2.5 rounded-full text-sm text-gray-300 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Animated Background Decorations */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
            />
        </section>
    );
};

export default Skills;
