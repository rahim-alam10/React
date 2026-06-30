import React, { useEffect, useState } from 'react'

export default function DarkMode() {
    const [dark, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark(!dark); 
    }

    useEffect(() => {
        if (dark) {
            document.body.classList.add("bg-gray-900", "text-white");
            document.body.classList.remove("bg-white", "text-black");
        } else {
            document.body.classList.add("bg-white", "text-black");
            document.body.classList.remove("bg-gray-900", "text-white");
        }
    }, [dark]);

    return (
        <button
            onClick={toggleDarkMode}
            className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
            {dark ? "Light Mode" : "Dark Mode"}
        </button>
    );
}
