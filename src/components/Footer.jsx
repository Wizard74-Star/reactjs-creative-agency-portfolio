import { motion } from "motion/react";
import toast from "react-hot-toast";
import assets from "../assets/assets";

const Footer = ({ theme }) => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "bbd4d7fa-ffaa-4bfe-9182-4b63a804d524");
        formData.append("subject", "New Newsletter Subscription");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success('🎉 Thank you for subscribing!');
                event.target.reset();
            } else {
                toast.error(data.message || "Something went wrong");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">

            <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="logo" className="w-32 sm:w-44" />
                    <p className="max-w-md">From strategy to execution, we craft digital solutions that move your business forward.</p>
                    <ul className="flex gap-8">
                        <li><a href="#hero" className="hover:text-primary">Home</a></li>
                        <li><a href="#services" className="hover:text-primary">Services</a></li>
                        <li><a href="#our-work" className="hover:text-primary">Our Work</a></li>
                        <li><a href="#contact-us" className="hover:text-primary">Contact Us</a></li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-600 dark:text-gray-400">
                    <h3 className="font-semibold">Subscribe to Our Newsletter</h3>
                    <p className="text-sm mt-2 mb-6">Stay updated with the latest trends, articles, and resources from our digital team.</p>

                    {/* ✅ Subscription Form */}
                    <form onSubmit={onSubmit} className="flex gap-2 text-sm">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-primary text-white rounded px-6 hover:scale-105 transition-transform"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </div>

            <hr className="border-gray-300 dark:border-gray-600 my-6" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
                <p>Copyright 2025 © Ch Bappy - All Right Reserved.</p>
                <div className="flex items-center justify-between gap-4">
                    <img src={assets.facebook_icon} alt="social icon" />
                    <img src={assets.twitter_icon} alt="social icon" />
                    <img src={assets.instagram_icon} alt="social icon" />
                    <img src={assets.linkedin_icon} alt="social icon" />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Footer;
