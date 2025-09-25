import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'
import { motion } from "motion/react"


const Teams = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}

            className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
        pt-30 text-gray-700 dark:text-white'>
            <Title title='Meet the Team' desc='A passionate team of digital experts
            dedicated to your brand success'/>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-5xl'>
                {teamData.map((team, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}

                        key={index} className='flex max-sm:flex-col items-center gap-5 p-4
                    rounded-xl  border border-gray-100 dark:border-gray-700 shadow-lg
                    bg-white dark:bg-gray-900 hover:scale-102 duration-500 transition-all cursor-pointer
                    dark:shadow-white/4'>
                        <img src={team.image} alt={team.name} className='w-12 h-12 rounded-full' />
                        <div className='flex-1'>
                            <h3 className='font-bold text-sm'>{team.name}</h3>
                            <p className='text-xs opacity-60'>{team.title}</p>
                        </div>



                    </motion.div>
                ))}

            </div>
        </motion.div>
    )
}

export default Teams