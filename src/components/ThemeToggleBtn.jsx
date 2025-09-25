import React from 'react'
import assets from '../assets/assets'
import { useEffect } from 'react'

const ThemeToggleBtn = ({ theme, setTheme }) => {

    return (
        <button>
            {theme === 'dark' ? (
                <img
                    onClick={() => setTheme('light')}
                    src={assets.sun_icon}
                    alt=""
                    className="size-8.5 p-1.5 border border-gray-500 rounded-full"
                />
            ) : (
                <img
                    onClick={() => setTheme('dark')}
                    src={assets.moon_icon}
                    alt=""
                    className="size-8.5 p-1.5 border border-gray-500 rounded-full"
                />
            )}
        </button>
    )
}
export default ThemeToggleBtn
