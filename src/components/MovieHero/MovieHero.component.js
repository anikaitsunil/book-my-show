import React from "react";
import {FaHeart} from "react-icons/fa";
import {IoShareSocialOutline} from "react-icons/io5";
import {BiChevronRight,BiShareAlt} from "react-icons/bi";

const MovieHero = () => {
    return (
        <>
        <div className="md:hidden " style={{height: "calc(180vw)"}}>
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster" />
        </div>

        <div className="hidden md:block lg:hidden">
        <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster" />
        </div>
    
        <div className="relative hidden lg:block" style={{height: "32rem"}}>
        <div className="absolute top-16 right-32 bg-black bg-opacity-50 w-28 h-12 pr-3 pt-2 rounded-md">
                    <div className="text-white flex items-center justify-between">
                        <IoShareSocialOutline className="w-12 h-8"/>
                        <h1 className="text-lg font-semibold">Share</h1>
                    </div>
        </div>
            <div className="absolute h-full w-full z-10" style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}} />
            <div className="absolute z-20 w-64 h-96 left-40 top-16">
                <img className="h-full w-full" src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster" />
            </div>
            <div className="absolute z-20 w-1/3 h-96 left-96 top-16 mx-16 flex flex-col gap-6">
                <h2 className="text-white font-bold text-4xl mb-4">Shang-Chi And The Legend of the Ten Rings</h2>
                <span className="flex items-end gap-3">
                    <div className="w-6 h-6">
                        <FaHeart className="text-red-500 w-full h-full"/>
                    </div>
                    <h1 className="text-2xl text-white font-semibold">91%</h1>
                    <div className="flex items-center">
                        <h3 className="text-white text-semibold">39.7K ratings</h3>
                        <BiChevronRight className="text-gray-300"/>
                    </div>
                </span>
                <div className="flex justify-between gap-2 bg-ani-200 rounded-lg w-0.8 p-4 px-6">
                        <div className="flex flex-col items-start">
                            <h3 className="text-white text-lg font-semibold">Add your rating and review</h3>
                            <p className="text-gray-400 text-sm">Your ratings matter.</p>
                        </div>
                        <div className="bg-white w-28 h-12 rounded-md flex items-center">
                            <button className="w-full h-full text-black font-semibold text-lg">Rate Now</button>
                        </div>
                </div>
                <div className="flex flex-col -mb-1">
                    <div className="bg-white px-3 w-60 rounded-sm my-1">
                        <a href="#" className="text-black text-md font-semibold hover:underline">2D</a>,
                        <a href="#" className="text-black text-md font-semibold hover:underline">3D</a>,
                        <a href="#" className="text-black text-md font-semibold hover:underline">MX4D</a>,
                        <a href="#" className="text-black text-md font-semibold hover:underline">4DX</a>,
                        <a href="#" className="text-black text-md font-semibold hover:underline">IMAX 2D</a>
                    </div>
                    <div className="bg-white px-3 w-96 rounded-sm my-1">
                        <span>  <a href="#" className="text-black font-semibold hover:underline">English</a>,
                                <a href="#" className="text-black font-semibold hover:underline">Tamil</a>,
                                <a href="#" className="text-black font-semibold hover:underline">Hindi</a>,
                                <a href="#" className="text-black font-semibold hover:underline">Telegu</a>,
                                <a href="#" className="text-black font-semibold hover:underline">Malayalam</a>,
                                <a href="#" className="text-black font-semibold hover:underline">Kannada</a></span>
                    </div>
                </div>
                <div>
                    <span>
                        <h2 className="text-white text-md">2h 12m • <a className="hover:underline">Action</a>,<a className="hover:underline"> Adventure</a>,<a className="hover:underline"> Fantasy</a>  •  UA   •  3 Sept 2021</h2>
                    </span>
                </div>
            </div>
            <img className="w-full h-full rounded-xl" src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster" />
        </div>
        </>
    );
};

export default MovieHero;