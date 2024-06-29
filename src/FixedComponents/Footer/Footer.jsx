import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className=" border-[1px] mt-14 border-gray-100">

            </div>
            <footer className="footer bg-white text-base-content py-10 space-x-16">
                <nav className=" h-[100%] md:relative mx-auto md:mx-0" >
                    <h6 className=" text-black font-normal text-base ml-1" >Site Name</h6>
                    <div className="grid grid-flow-col gap-4 md:absolute md:bottom-0 ml-2">
                        <a className="w-[20px] h-[20px] cursor-pointer">
                        <FaFacebook className="w-full h-full" />

                        </a>
                        <a className="w-[20px] h-[20px] cursor-pointer">
                        <FaLinkedin className="w-full h-full" />

                        </a>
                        <a className="w-[20px] h-[20px] cursor-pointer">
                        <FaYoutube className="w-full h-full" />

                        </a>
                        <a className="w-[20px] h-[20px] cursor-pointer">
                        <FaInstagram className="w-full h-full" />

                        </a>
                     
                    </div>
                </nav>
                <nav className="space-y-2 ">
                    <h6 className=" text-black font-semibold">Topic</h6>
                    <a className="link link-hover text-gray-500 font-semibold">Page</a>
                    <a className="link link-hover text-gray-500 font-semibold">Page</a>
                    <a className="link link-hover text-gray-500 font-semibold">Page</a>
                    <a className="link link-hover text-gray-500 font-semibold">Page</a>
                </nav>
                <nav className="space-y-2">
                    <h6 className=" text-black font-semibold">Topic</h6>
                    <a className="link link-hover text-gray-500 font-semibold">Page</a>
                    <a className="link link-hover text-gray-500 font-semibold">Page</a>
                    <a className="link link-hover text-gray-500 font-semibold">Page</a>
                    <a className="link link-hover text-gray-500 font-semibold">Page</a>
                </nav>
               
                

            </footer>
        </div>
    );
};

export default Footer;