import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';
import { motion } from "motion/react"

const ContactUs = () => {


    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "da1cd89e-a322-464e-8ed6-d0165765d97e");
        try {


            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Form Submitted Successfully");

                event.target.reset();
            } else {
                toast.error(data.message);
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

            id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
        pt-30 text-gray-700 dark:text-white'>
            <Title title='Get in Touch'
                desc='Ready to elevate your digital presence? Contact us today to discuss how we can help your business thrive in the digital age.' />

            <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}

                onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 w-full max-w-2xl'>
                <div>
                    <p className='text-sm mb-2 font-medium'>Your name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt='' />
                        <input type='text' placeholder='Enter your name' name="name" className='w-full p-3 text-sm outline-none' required />
                    </div>
                </div>
                <div>
                    <p className='text-sm mb-2 font-medium'>Your email</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt='' />
                        <input type='email' placeholder='Enter your email' name="email" className='w-full p-3 text-sm outline-none' required />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='text-sm mb-2 font-medium'>Message</p>
                    <textarea rows='8' placeholder='Write your message' name="message"
                        className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 resize-none' required></textarea>
                </div>

                <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm
                px-6 py-3 rounded-full hover:scale-102 duration-300 transition-all'>
                    Submit <img src={assets.arrow_icon} alt='' className='w-4' />
                </button>

            </motion.form>

        </motion.div>
    )
}

export default ContactUs