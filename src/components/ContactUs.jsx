import { motion } from "motion/react";
import toast from "react-hot-toast";
import assets from "../assets/assets";
import Title from "./Title";


const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "bbd4d7fa-ffaa-4bfe-9182-4b63a804d524");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Thank you for your submission!')
                event.target.reset();
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }


    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
            id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title title='Reach Out to Us' desc="Let's build something extraordinary together! From strategy to execution, we craft digital experiences that grow your business." />

            <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, margin: "-50px" }}
                onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
                <div>
                    <p className="mb-2 text-sm font-medium">Your Name</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.person_icon} alt="Person Icon" />
                        <input type="text" name="name" placeholder="Enter your name" className="w-full p-3 text-sm outline-none" required />
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium">Email</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.email_icon} alt="Person Icon" />
                        <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none" required />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Message</p>
                    <textarea name="message" rows={8} placeholder="Enter your message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600" required />
                </div>

                <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all">Submit <img src={assets.arrow_icon} alt="Submit" className="w-4" /></button>
            </motion.form>
        </motion.div>
    )
}

export default ContactUs