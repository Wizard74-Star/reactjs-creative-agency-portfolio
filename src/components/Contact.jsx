import { motion } from "motion/react";
import Title from "./Title";

const Contact = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
            id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title 
                title="Contact Us" 
                desc="Get in touch with our team for inquiries, partnerships, or project discussions."
            />
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false, margin: "-50px" }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10 max-w-2xl w-full border border-gray-200 dark:border-gray-700"
            >
                <div className="flex flex-col items-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: false, margin: "-50px" }}
                        className="w-20 h-20 rounded-full bg-gradient-to-r from-[#5044E5] to-[#4d8cea] flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                    >
                        G
                    </motion.div>
                    
                    <div className="text-center space-y-4">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: false, margin: "-50px" }}
                            className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white"
                        >
                            Griffin Alejandro
                        </motion.h3>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: false, margin: "-50px" }}
                            className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-medium mb-2"
                        >
                            Chief Technology Officer (CTO)
                        </motion.p>
                        
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            viewport={{ once: false, margin: "-50px" }}
                            href="mailto:dan.pro.01037@gmail.com"
                            className="inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-gray-700 dark:text-white hover:text-[#5044E5] dark:hover:text-[#4d8cea] transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            dan.pro.01037@gmail.com
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Contact

