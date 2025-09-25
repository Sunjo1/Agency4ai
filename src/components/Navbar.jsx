import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react"

const Navbar = ({ setTheme, theme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}

            className="sticky top-0 z-20 w-full bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
            <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4">
                {/* Logo */}
                <img
                    src={theme === "dark" ? assets.logo_dark : assets.logo}
                    className="w-32 sm:w-40"
                    alt="logo"
                />

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-6 text-gray-700 dark:text-gray-200 text-sm">
                    {["home", "services", "our-work", "contact-us"].map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            className="hover:border-b hover:border-primary transition-colors duration-200"
                        >
                            {link.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                        </a>
                    ))}
                </div>

                {/* Right-side Buttons */}
                <div className="flex items-center gap-4">
                    <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                    <a
                        href="#contact-us"
                        className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all text-sm"
                    >
                        Let's Connect
                        <img src={assets.arrow_icon} width={14} alt="arrow" />
                    </a>

                    {/* Mobile Menu Button */}
                    <img
                        src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
                        alt="menu"
                        className="w-7 sm:hidden cursor-pointer"
                        onClick={() => setSidebarOpen(true)}
                    />
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 w-60 min-h-screen bg-gray-900 text-gray-200 pt-20 flex flex-col gap-6 px-8 transition-transform duration-300 sm:hidden ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <img
                    src={theme === "dark" ? assets.close_icon : assets.close_icon}
                    alt="close"
                    className="w-6 absolute right-4 top-4 cursor-pointer"
                    onClick={() => setSidebarOpen(false)}
                />

                {["home", "services", "our-work", "contact-us"].map((link) => (
                    <a
                        key={link}
                        href={`#${link}`}
                        onClick={() => setSidebarOpen(false)}
                        className="hover:underline hover:text-primary dark:hover:text-primary transition-colors"
                    >
                        {link.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </a>
                ))}

                <a
                    href="#contact-us"
                    className="mt-4 flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
                >
                    Let's Connect
                    <img src={assets.arrow_icon} width={14} alt="arrow" />
                </a>
            </div>
        </motion.div>
    );
};

export default Navbar;
