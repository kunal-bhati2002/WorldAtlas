import React, { useState } from "react";

function Contact() {
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [usermessage, setUsermessage] = useState("");

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const UserData = { username, useremail, usermessage };
        console.log(UserData);
        setUsername("");
        setUseremail("");
        setUsermessage("");
    };

    return (
        <section className="container mx-auto px-4 sm:px-6 md:px-8 text-center md:text-left my-16">
            <h2 className="font-semibold text-2xl text-center  mb-8">
                Contact Us
            </h2>

            <form
                autoComplete="off"
                className="flex flex-col gap-6 mx-auto max-w-md md:max-w-lg bg-gradient-to-br from-[#0f0f0f] to-[#1b1b1b] p-6 rounded-xl border border-gray-700 shadow-lg"
                onSubmit={handleFormSubmit}
            >
                <input
                    className="w-full bg-[#111111] text-white border border-gray-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className="w-full bg-[#111111] text-white border border-gray-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    type="email"
                    required
                    placeholder="Enter Your Email"
                    value={useremail}
                    onChange={(e) => setUseremail(e.target.value)}
                />

                <textarea
                    cols={24}
                    rows={5}
                    className="w-full bg-[#111111] text-white border border-gray-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                    placeholder="Enter Your Message"
                    value={usermessage}
                    onChange={(e) => setUsermessage(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-indigo-700 hover:scale-[1.02] transition-all duration-300"
                >
                    Send
                </button>
            </form>
        </section>
    );
}

export default Contact;
