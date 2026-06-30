import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="flex flex-col items-center mt-10 container">
                <h1 className="text-3xl font-bold mb-6">{props.heading}</h1>

                <div className="w-3/4 m-10">
                    <label
                        htmlFor="textBox"
                        className="block mb-6 text-lg font-medium text-center"
                    >
                        Enter your text here:
                    </label>

                    <textarea
                        id="textBox"
                        rows="10"
                        value={text}
                        onChange={handleOnChange}
                        placeholder="Type your text here..."
                        className="w-full p-4 text-lg border border-gray-400 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <div>
                    <button className="bg-blue-400 p-1.5 rounded-2xl cursor-pointer " onClick={handleUpClick}>Convert to Uppercase</button>
                </div>
            </div>

            <div className="flex flex-col items-center container">
                <h1 className="text-2xl mt-8">Your Text Summary</h1>
                <p className="mt-4">Words: {text.split(" ").length}</p>
                <p>Characters: {text.length}</p>
            </div>
        </>
    );
}
