import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import assets from "../assets/assets";
import Title from "./Title";

const OurWork = () => {
    // Show featured projects or latest 6 projects
    const featuredProjects = projects.filter(p => p.featured).slice(0, 6);
    const displayProjects = featuredProjects.length >= 3 ? featuredProjects : projects.slice(0, 6);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
            id="our-work" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title title='Our Latest Work' desc='We turn ideas into reality — from landing pages to complex web applications.' />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {
                    displayProjects.map((work, index) => (
                        <motion.a
                            href={work.url || '#'}
                            target={work.url ? "_blank" : undefined}
                            rel={work.url ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false, margin: "-50px" }}
                            key={work.id} 
                            className="hover:scale-102 duration-500 transition-all cursor-pointer block"
                        >
                            <img src={work.image} className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-xl" alt="Work Image" />
                            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
                            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
                        </motion.a>
                    ))
                }
            </div>

            <Link 
                to="/projects"
                className="mt-8 px-8 py-3 bg-primary text-white rounded-full hover:scale-105 transition-all flex items-center gap-2"
            >
                View All Projects
                <img src={assets.arrow_icon} width={14} alt="arrow" />
            </Link>
        </motion.div>
    )
}

export default OurWork