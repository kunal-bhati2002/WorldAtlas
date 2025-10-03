import footerData from "../../api/footerData.json";
import { FaPhone, FaEnvelope, FaShare, FaLocationDot } from "react-icons/fa6";

const icons = {
    FaLocationDot: <FaLocationDot />,
    FaPhoneAlt: <FaPhone />,
    FaEnvelope: <FaEnvelope />,
    FaShareAlt: <FaShare />
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
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {(footerData as FooterItem[]).map((item) => (
                    <div key={item.id} className="flex flex-col items-center gap-2">
                        <div className="text-2xl">{icons[item.icon]}</div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.details}</p>
                    </div>
                ))}
            </div>
            <p className="text-center text-gray-500 mt-8 text-sm">
                © 2025 World Atlas. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;
