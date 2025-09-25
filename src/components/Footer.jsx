import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Footer = ({ theme }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

            className='bg-slate-50 dark:bg-gray-900 text-gray-700 dark:text-white
        pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-12 lg:px-24 xl:px-40 pb-6 sm:pb-10'>
            {/* Footer Top */}
            <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
                <motion.div

                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}

                >


                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt='' className='w-32 sm:w-44' />
                    <p className='text-sm mt-4 max-w-md'>Agency.ai is your trusted partner in navigating the digital landscape. We specialize in AI-driven solutions that empower businesses to innovate and excel in the modern world.</p>
                    <ul className='flex gap-4 mt-4'>
                        <li ><a className='hover:text-primary' href='#home'>Home</a></li>
                        <li ><a className='hover:text-primary' href='#services'>Services</a></li>
                        <li ><a className='hover:text-primary' href='#our-work'>Our Work</a></li>
                        <li ><a className='hover:text-primary' href='#contact-us'>Contact us</a></li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}

                    className='text-gray-600 dark:text-gray-400'>
                    <h3 className='font-semibold'>Subscribe to our news letter</h3>
                    <p className='text-sm mt-2 mb-6'>The latest news, articles and resources sent to your inbox weekly</p>
                    <div className='flex text-sm'>
                        <input type='text' placeholder='Enter your email' className='px-4 py-3 rounded-full outline-none border border-gray-300' />
                        <button className='-ml-16 bg-primary text-white px-6 py-3 rounded-full hover:scale-102 duration-300 transition-all'>Subscribe</button>
                    </div>

                </motion.div>
            </div>

            <hr className='border-gray-300 dark:border-gray-600 py-6 mt-3' />
            {/* Footer Bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}

                className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between items-center gap-4 flex-wrap'>
                <p>&copy; 2025 Agency4AI-sunjo. All rights reserved.</p>
                <div className='flex items-center justify-center gap-4 '>
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.twitter_icon} alt='' />
                    <img src={assets.instagram_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Footer