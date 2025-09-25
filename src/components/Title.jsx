import React from 'react'
import { motion } from "motion/react"

const Title = ({ title, desc }) => {
    return (
        <>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}

                className='text-3xl font-medium sm:text-5xl'>{title}</motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}

                className='max-w-lg text-center text-gray-500
            dark:text-white/75 mb-6'>{desc}</motion.p>
        </>
    )
}

export default Title