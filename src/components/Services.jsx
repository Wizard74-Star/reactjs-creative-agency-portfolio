import { motion } from "motion/react";
import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import Title from "./Title";

const Services = () => {
    const serviceData = [
        {
            title: "Custom Web Development",
            description:
                "We build fast, secure, and SEO-optimized websites using React.js, Next.js, and Tailwind CSS — designed for top performance and business growth.",
            icon: assets.ads_icon,
        },
        {
            title: "UI/UX Design Implementation",
            description:
                "We turn Figma and Sketch designs into interactive, responsive user interfaces that enhance engagement and deliver smooth digital experiences.",
            icon: assets.ads_icon,
        },
        {
            title: "Single Page Applications (SPA)",
            description:
                "We create lightning-fast SPAs using ReactJS for seamless navigation, dynamic rendering, and optimized performance across all modern devices.",
            icon: assets.ads_icon,
        },
        {
            title: "SEO Optimization & Strategy",
            description:
                "We craft on-page SEO strategies, meta tags, and content structures that help your website rank higher, reach audiences, and grow organically.",
            icon: assets.ads_icon,
        },
        {
            title: "Conversion-Focused Design",
            description:
                "We design every page element with purpose, optimizing layouts, visuals, and CTAs to increase user trust, engagement, and conversion rates.",
            icon: assets.ads_icon,
        },
        {
            title: "Website Maintenance & Audit",
            description:
                "We offer continuous maintenance, SEO audits, and code optimization to keep your website updated, high-performing, and fully secure online.",
            icon: assets.ads_icon,
        },
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <img src={assets.bgImage2} alt="Service Background" className="absolute -top-110 -left-70 -z-1 dark:hidden" />

            <Title title='How Can We Help?' desc='From design to deployment, we deliver modern, high-performing websites optimized for engagement, visibility, and business success.' />

            <div className="flex flex-col md:grid grid-cols-2">
                {
                    serviceData.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Services