
const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">metalmind.co</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-blue-600 space-x-2">
                        <li><a>Small</a></li>
                        <li><a>Medium</a></li>
                        <li><a>Large</a></li>
                        <button className="bg-blue-700 px-3 rounded-lg text-white">Go to Cart</button>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;