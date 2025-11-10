import { motion } from "motion/react";
import assets from "../assets/assets";
import Title from "./Title";

const Contact = () => {
    const contacts = [
        {
            name: 'Glenn Evans',
            email: 'glenn.evans@transformr.com.au'
        },
        {
            name: 'Michael Verso',
            email: 'michael.verso@transformr.com.au'
        },
        {
            name: 'Thai Bui Cong',
            email: 'thai.buicong@transformr.com.au'
        }
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
            id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title title='Reach Out to Us' desc="Let's build something extraordinary together! From strategy to execution, we craft digital experiences that grow your business." />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, margin: "-50px" }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {contacts.map((contact, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                        viewport={{ once: false, margin: "-50px" }}
                        className="flex flex-col items-center p-8 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-primary transition-all hover:shadow-lg min-w-[280px]"
                    >
                        <div className="mb-4">
                            <img src={assets.person_icon} alt="Person Icon" className="w-12 h-12 opacity-70" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-center">{contact.name}</h3>
                        <a 
                            href={`mailto:${contact.email}`}
                            className="text-primary hover:underline text-sm flex items-center gap-2"
                        >
                            <img src={assets.email_icon} alt="Email Icon" className="w-4 h-4" />
                            {contact.email}
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Contact

