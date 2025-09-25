import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const OurWork = () => {
    const workData = [
        {
            title: 'Mobile App Marketing',
            description: 'A comprehensive marketing strategy to boost app downloads and user engagement.',
            image: assets.work_mobile_app
        },
        {
            title: "Dashboard Mangagement",
            description: "A sleek and intuitive dashboard design to streamline user experience and data visualization.",
            image: assets.work_dashboard_management
        },

        {
            title: "Fitness App Promotion",
            description: "A targeted promotion campaign to increase visibility and user acquisition for a fitness app.",
            image: assets.work_fitness_app
        }
    ]
    return (
        <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
        pt-30 text-gray-700 dark:text-white'>
            <Title title='Our Latest Work' desc='From strategy to execution, we craft digital solutions that move your business forward' />
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {workData.map((work, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}


                        key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                        <img src={work.image} alt={work.title} className='rounded-xl shadow-lg shadow-gray-100 dark:shadow-white/10' />
                        <h3 className='font-bold text-lg mt-3 mb-2 '>{work.title}</h3>
                        <p className='text-sm mt-2 opacity-60 w-5/6 dark:text-gray-400'>{work.description}</p>
                    </motion.div>
                ))}

            </div>
        </div>
    )
}

export default OurWork