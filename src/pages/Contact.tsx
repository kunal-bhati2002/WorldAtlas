import React, { useState } from "react";

function Contact() {

    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [usermessage, setUsermessage] = useState("");

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const UserData = {
            username,
            useremail,
            usermessage,
        }
        console.log(UserData);
        setUsername("");
        setUseremail("");
        setUsermessage("");
    }

    return (<>
        <section className="container mx-auto text-center">
            <h2 className="m-7 font-semibold text-2xl">Contact Us</h2>

            <form
                autoComplete="off"
                className="flex flex-col gap-6 m-8 max-w-md px-3 md:max-w-lg mx-auto"
                onSubmit={handleFormSubmit}
            >
                <div>
                    <input
                        className="w-full bg-black text-white border border-gray-500 rounded-md px-4 py-2"
                        type="text"
                        required
                        placeholder="Enter Your Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className="w-full bg-black text-white border border-gray-500 rounded-md px-4 py-2"
                        type="email"
                        required
                        placeholder="Enter Your Email"
                        value={useremail}
                        onChange={(e) => setUseremail(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        cols={24}
                        rows={5}
                        className="w-full bg-black text-white border border-gray-500 rounded-md px-4 py-2"
                        required
                        placeholder="Enter Your Message"
                        value={usermessage}
                        onChange={(e) => setUsermessage(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-indigo-600 text-white font-medium py-2 px-6 rounded-md shadow-md "
                >
                    Send
                </button>
            </form>
        </section >
    </>);
}

export default Contact