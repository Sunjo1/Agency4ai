import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {
    const servicesData = [
        {
            title: "Advertising",
            description: "Crafting compelling ad campaigns that captivate audiences and drive results.",
            icon: assets.ads_icon
        },
        {
            title: "Content Marketing",
            description: "Creating and distributing valuable content to attract and engage your target audience.",
            icon: assets.marketing_icon
        },
        {
            title: "Content Writing",
            description: "Producing high-quality written content that informs, entertains, and converts.",
            icon: assets.content_icon
        },
        {
            title: "Social Media Management",
            description: "Managing and growing your social media presence to build brand awareness and loyalty.",
            icon: assets.social_icon
        },
    ]

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            id="services"
            className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
        >

            <img
                src={assets.bgImage2}
                alt=""
                className="absolute -top-[110px] -left-[70px] z-0 dark:hidden"
            />


            <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <Title
                    title="How can we help?"
                    desc="From strategy to execution, we craft digital solutions that move your business forward"
                />
                <div className='flex flex-col md:grid md:grid-cols-2 '>
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Services
