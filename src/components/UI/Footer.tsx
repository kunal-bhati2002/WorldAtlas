import footerData from "../../api/footerData.json";
import { FaPhone, FaEnvelope, FaShareAlt, FaLocationDot } from "react-icons/fa6";

const icons = {
    FaLocationDot: <FaLocationDot />,
    FaPhone: <FaPhone />,
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
            <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                {(footerData as FooterItem[]).map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center md:items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#141414] hover:shadow-[0_0_15px_#00ffff30] transition-all duration-300"
                    >
                        <div className="text-3xl text-cyan-400">{icons[item.icon]}</div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {item.details}
                        </p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <hr className="border-gray-700 mb-6" />
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold text-cyan-400">World Atlas</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
