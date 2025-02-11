import { useState } from "react";
import { Link } from "react-router-dom";
import DeskLogo from '../../assets/desktop-logo.svg'
import MobileLogo from '../../assets/logo.svg';
import Title from '../../assets/title.svg'
const headerLinks = [
    { path: "/", label: "Asosiy" },
    { path: "/news", label: "Kun Yangiliklari" },
    { path: "/about", label: "Biz Haqimizda" },
    { path: "/portfolio", label: "Portfolio" },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            {/* Fixed Header */}
            <header className="custom-container  fixed top-0 left-0 right-0   w-full bg-[#FFFAFA] shadow-md z-50 rounded-b-[30px] border-gray-300 border-[1px] ">
                <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-2">
                    <div className="flex items-center gap-3">
                        <Link to="/">
                            <img src={DeskLogo} alt="main logo" className="h-auto" />
                        </Link>
                        <img src={Title} alt="title" className="hidden lg:block" />
                    </div>

                    <ul className="hidden md:flex gap-6 text-blue-500 font-medium font-mono text-md">
                        {headerLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={link.path} className="hover:text-blue-600 hover:font-bold transition ease-in duration-300 ">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="hidden md:block relative overflow-hidden bg-blue-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:text-blue-500 hover:bg-transparent border border-blue-500 hover:scale-105">
                        <span className="relative z-10">Bog‘lanish</span>
                        <span className="absolute inset-0 bg-blue-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                    </button>


                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-blue-500 text-2xl z-[60]"
                    >
                        {isOpen ? "x" : "☰"}
                    </button>
                </nav>
            </header>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-[#FFFAFA] transition-opacity duration-300 z-[50] ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
                <header className="sticky top-0 left-0 w-full bg-blue-500 shadow-md z-[60] flex items-center justify-between px-6 py-3 rounded-b-[30px]">
                    <Link to="/">
                        <img src={MobileLogo} alt="main logo" className="w-10 h-auto" />
                    </Link>
                    <button onClick={() => setIsOpen(false)} className="text-white text-[24px]">
                        x
                    </button>
                </header>
                <div
                    className={`flex flex-col items-center justify-center h-screen gap-6 text-lg font-medium text-gray-700 transform transition-transform duration-500 ${isOpen ? "translate-y-0" : "translate-y-full"}`}
                >
                    {headerLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-blue-500 transition"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <button className=" relative overflow-hidden bg-blue-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:text-blue-500 hover:bg-transparent border border-blue-500 hover:scale-105">
                        <span className="relative z-10">Bog‘lanish</span>
                        <span className="absolute inset-0 bg-blue-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
