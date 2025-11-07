import { motion } from "motion/react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import { encodeCategoryForURL } from "../utils/categoryUrl";

const Services = () => {
    const serviceData = [
        {
            title: "Full-Stack Development",
            description:
                "We build complete, scalable applications from frontend to backend using React, Next.js, Vue, Node.js, and modern databases — delivering end-to-end solutions.",
            icon: assets.ads_icon,
        },
        {
            title: "Web Application",
            description:
                "We create powerful web applications with responsive design, real-time features, and seamless user experiences across all devices and browsers.",
            icon: assets.ads_icon,
        },
        {
            title: "Mobile App Development",
            description:
                "We develop native and cross-platform mobile applications using React Native and Flutter, delivering high-performance apps for iOS and Android.",
            icon: assets.ads_icon,
        },
        {
            title: "Blockchain Solutions",
            description:
                "We engineer secure blockchain applications, smart contracts, and DeFi platforms using Solidity, Truffle, and Web3 technologies.",
            icon: assets.ads_icon,
        },
        {
            title: "AI Automation",
            description:
                "We build intelligent automation systems using n8n, Python, and AI APIs to streamline workflows, process data, and enhance productivity.",
            icon: assets.ads_icon,
        },
        {
            title: "AI Agent / Chatbot",
            description:
                "We develop conversational AI agents and chatbots using OpenAI, LangChain, and advanced NLP to provide intelligent, context-aware interactions.",
            icon: assets.ads_icon,
        },
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
            id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <img src={assets.bgImage2} alt="Service Background" className="absolute -top-110 -left-70 -z-1 dark:hidden" />

            <Title title='Our Stacks' desc='End-to-end digital solutions powered by adaptive AI agents, secure blockchain architecture, and seamless cross-platform applications.' />

            <div className="flex flex-col md:grid grid-cols-2">
                {
                    serviceData.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))
                }
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link 
                    to="/stacks"
                    className="px-8 py-3 bg-primary text-white rounded-full hover:scale-105 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                    Explore All Technology Stacks
                    <img src={assets.arrow_icon} width={14} alt="arrow" />
                </Link>
            </div>
            
            {/* Category Showcase */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {[
                    { name: 'Full-Stack', icon: '🚀', gradient: 'from-blue-600 via-purple-600 to-pink-600', path: '/category/Full-Stack' },
                    { name: 'Web Application', icon: '🌐', gradient: 'from-cyan-500 via-blue-500 to-indigo-600', path: '/category/Web Application' },
                    { name: 'Mobile App', icon: '📱', gradient: 'from-green-500 via-emerald-500 to-teal-600', path: '/category/Mobile App' },
                    { name: 'Blockchain', icon: '⛓️', gradient: 'from-yellow-500 via-orange-500 to-red-600', path: '/category/Blockchain' },
                    { name: 'AI Automation', icon: '🤖', gradient: 'from-purple-500 via-pink-500 to-rose-600', path: '/category/AI Automation' },
                    { name: 'AI Agent / Chatbot', icon: '💬', gradient: 'from-indigo-500 via-purple-500 to-violet-600', path: `/category/${encodeCategoryForURL('AI Agent / Chatbot')}` }
                ].map((cat, index) => (
                    <motion.div
                        key={cat.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <Link to={cat.path}>
                            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.gradient} p-8 h-full min-h-[200px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 group`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="text-5xl mb-4">{cat.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                                </div>
                                <div className="relative z-10 flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
                                    <span className="text-sm font-semibold">Explore</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Services