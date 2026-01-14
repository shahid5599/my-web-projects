import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
    const contactMethods = [
        {
            icon: <Mail size={24} />,
            label: 'Email',
            value: 'shahid@example.com',
            link: 'mailto:shahid@example.com',
            color: 'from-cyan-500 to-blue-500',
        },
        {
            icon: <Github size={24} />,
            label: 'GitHub',
            value: 'github.com/shahid',
            link: 'https://github.com',
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: <Linkedin size={24} />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/shahid',
            link: 'https://linkedin.com',
            color: 'from-blue-500 to-cyan-500',
        },
    ];

    return (
        <section id="contact" className="section relative overflow-hidden">
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
                        <MessageCircle className="text-cyan-400 mx-auto" size={32} />
                    </motion.div>
                    <h2 className="gradient-text mb-6">Get In Touch</h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </motion.p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                            className="space-y-6"
                        >
                            <motion.div
                                className="glass-strong p-8 rounded-2xl"
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    I'm currently open to new opportunities, collaborations, and interesting projects.
                                    Whether you have a question or just want to say hi, feel free to reach out!
                                </p>

                                {/* Location with pulse */}
                                <motion.div
                                    className="flex items-center gap-3 text-gray-400 mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <MapPin size={20} className="text-cyan-400" />
                                    </motion.div>
                                    <span>Available for remote work</span>
                                </motion.div>

                                {/* Contact Methods with stagger */}
                                <div className="space-y-4">
                                    {contactMethods.map((method, index) => (
                                        <motion.a
                                            key={index}
                                            href={method.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, x: -30, scale: 0.9 }}
                                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.6,
                                                delay: index * 0.15,
                                                ease: [0.6, 0.05, 0.01, 0.9]
                                            }}
                                            whileHover={{ x: 15, scale: 1.03 }}
                                            className="glass p-4 rounded-xl flex items-center gap-4 group block"
                                        >
                                            <motion.div
                                                className={`p-3 bg-gradient-to-r ${method.color} rounded-lg`}
                                                whileHover={{
                                                    rotate: [0, -15, 15, 0],
                                                    scale: 1.15,
                                                    transition: { duration: 0.5 }
                                                }}
                                            >
                                                {method.icon}
                                            </motion.div>
                                            <div>
                                                <p className="text-gray-400 text-sm">{method.label}</p>
                                                <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                                    {method.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right: CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                            className="flex items-center"
                        >
                            <motion.div
                                className="glass-strong p-8 rounded-2xl w-full relative overflow-hidden group"
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                {/* Animated Background */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    animate={{
                                        backgroundPosition: ['0% 0%', '100% 100%'],
                                    }}
                                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                                />

                                <div className="relative z-10">
                                    <div className="text-center mb-8">
                                        <motion.div
                                            animate={{
                                                rotate: [0, 10, -10, 0],
                                                y: [0, -10, 0],
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            className="inline-block mb-6"
                                        >
                                            <motion.div
                                                className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center relative"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <Send size={40} className="text-white" />
                                                {/* Rotating ring */}
                                                <motion.div
                                                    className="absolute inset-0 rounded-full border-4 border-cyan-400/30"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                                />
                                            </motion.div>
                                        </motion.div>

                                        <h3 className="text-3xl font-bold text-white mb-4">
                                            Ready to Start?
                                        </h3>
                                        <p className="text-gray-300 mb-8 leading-relaxed">
                                            Let's build something amazing together. Drop me a message and I'll get back to you as soon as possible!
                                        </p>
                                    </div>

                                    <motion.a
                                        href="mailto:shahid@example.com"
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-primary w-full flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                                    >
                                        <span className="relative z-10">Send Message</span>
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="relative z-10"
                                        >
                                            <Mail size={20} />
                                        </motion.div>
                                        {/* Button glow */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover/btn:opacity-30 blur-xl"
                                            whileHover={{ scale: 1.5 }}
                                        />
                                    </motion.a>

                                    {/* Social Links */}
                                    <div className="flex justify-center gap-4 mt-6">
                                        {[
                                            { icon: <Github size={20} />, link: 'https://github.com' },
                                            { icon: <Linkedin size={20} />, link: 'https://linkedin.com' },
                                        ].map((social, index) => (
                                            <motion.a
                                                key={index}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                                                whileHover={{ scale: 1.3, y: -8, rotate: [0, -10, 10, 0] }}
                                                className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors"
                                            >
                                                {social.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Animated Background Decorations */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.15, 0.1],
                    x: [0, 50, 0],
                }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1],
                    x: [0, -50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            />
        </section>
    );
};

export default Contact;
