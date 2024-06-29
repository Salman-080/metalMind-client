
const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto ">
            <div className="navbar bg-base-100 flex justify-center space-x-4 md:space-x-0">
                <div className="md:flex-1">
                    <a className=" text-base md:text-xl font-semibold">MetalMind.co</a>
                </div>
                <div className="flex-none">
                    <ul className="flex md:menu md:menu-horizontal text-[#1063C3] md:font-semibold font-medium items-center gap-3 text-sm md:text-base">
                        <li><a>Small</a></li>
                        <li><a>Medium</a></li>
                        <li><a>Large</a></li>
                         
                    </ul>
                </div>
                <button className="bg-blue-700 px-1 md:px-4 py-1 md:py-[9px] lg:py-[12px] rounded-lg text-white text-sm md:text:xl">Go to cart</button>
            </div>
        </div>
    );
};

export default Navbar;