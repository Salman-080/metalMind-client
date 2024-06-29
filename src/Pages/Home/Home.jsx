
const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">

            <div className=" h-20 w-32 md:h-28 md:w-48 ml-6 md:ml-10 lg:ml-16  border-black ">
                <img className="h-full w-full " src="/img1.png" alt="" />
            </div>

            <div className=" space-y-4 mt-6 mx-auto">
                <h2 className="text-[#E0B210] text-center text-2xl md:text-4xl font-bold ">MetalMind</h2>
                <p className="text-center md:w-[500px] text-gray-400  mx-auto">Metal Mind Robotics Kit is an innovative platform designed to ignite creativity and cultivate a passion for robotics among enthusiasts of all ages. Whether you're a novice exploring the basics or an experienced tinkerer seeking to push the boundaries of technology, Metal Mind empowers you to bring your robotic visions to life.</p>
            </div>

            <div className="w-[250px] h-[290px] md:w-[520px] md:h-[560px]  mx-auto" >
                <img className="h-full w-full" src="/img2.png" alt="" />
            </div>


            <div className="space-y-2">
                <h2 className="text-[#E0B210] text-3xl font-semibold ml-1">Reviews</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-7 md:px-3 gap-9">
                    <div className="card bg-base-100 shadow-2xl">
                        <div className="card-body">

                            <p className="card-title">My kids love this. Best way to learn robotics and simple coding.</p>
                            <br />
                            <div className="card-actions justify-start items-center">
                                <div className="h-10 w-10 ">
                                    <img className="h-full w-full rounded-full" src="/avatar1.png" alt="" />
                                </div>
                                <div>
                                    <h2 className="font-semibold">Cole</h2>
                                    <p className="text-gray-500 ">Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-2xl">
                        <div className="card-body">

                            <p className="card-title">“A fantastic gift for my teen.”</p>
                            <br />
                            <div className="card-actions justify-start items-center">
                                <div className="h-10 w-10 ">
                                    <img className="h-full w-full rounded-full" src="/avatar1.png" alt="" />
                                </div>
                                <div>
                                    <h2 className="font-semibold">Aubrey</h2>
                                    <p className="text-gray-500 ">Teacher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-2xl">
                        <div className="card-body">

                            <p className="card-title">“A genuinely glowing review”</p>
                            <br />
                            <div className="card-actions justify-start items-center">
                                <div className="h-10 w-10 ">
                                    <img className="h-full w-full rounded-full" src="/avatar1.png" alt="" />
                                </div>
                                <div>
                                    <h2 className="font-semibold">Rick</h2>
                                    <p className="text-gray-500 ">Student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>


    );
};

export default Home;