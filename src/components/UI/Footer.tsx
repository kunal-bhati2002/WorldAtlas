import footerData from "../../api/footerData.json";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaShareAlt } from "react-icons/fa";

const icons = {
    FaLocationDot: <FaLocationDot />,
    FaPhoneAlt: <FaPhoneAlt />,
    FaEnvelope: <FaEnvelope />,
    FaShareAlt: <FaShareAlt />
};

type IconKey = keyof typeof icons;

interface FooterItem {
    id: number;
    icon: IconKey;
    title: string;
    details: string;
}

function Footer() {
    return (
        <footer className="bg-[#0e0e0e] text-white py-12 mt-16 border-t border-gray-800">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                {(footerData as FooterItem[]).map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center md:items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#141414] hover:shadow-[0_0_15px_#00ffff30] hover:scale-[1.02] transition-all duration-300 max-w-full break-words"
                    >
                        <div className="text-3xl text-cyan-400 mb-2" aria-label={item.title}>
                            {icons[item.icon]}
                        </div>
                        <h3 className="font-semibold text-lg break-words">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed break-words max-w-full">
                            {item.details}
                        </p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10 px-4 sm:px-6 md:px-8">
                <hr className="border-gray-700 mb-6" />
                <p className="text-gray-500 text-sm break-words">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold text-cyan-400">World Atlas</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;