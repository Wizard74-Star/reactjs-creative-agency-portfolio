import { motion } from "motion/react";
import assets from "../assets/assets";
import Title from "./Title";

const OurWork = () => {
    const workData = [
        {
            title: 'Mobile App Marketing',
            description: 'Transforming bold ideas into powerful digital solutions that connect and convert.',
            image: assets.work_mobile_app
        },
        {
            title: 'Dashboard Management',
            description: 'Creating intuitive dashboards that help teams make smarter decisions faster.',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fitness App Promotion',
            description: 'Building performance-driven landing pages for high user engagement and retention.',
            image: assets.work_fitness_app
        },

    ]

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            id="our-work" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title title='Our Latest Work' desc='We turn ideas into reality — from landing pages to complex web applications.' />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {
                    workData.map((work, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            key={index} className="hover:scale-102 duration-500 transition-all cursor-pointer">
                            <img src={work.image} className="w-full rounded-xl" alt="Work Image" />
                            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
                            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default OurWork