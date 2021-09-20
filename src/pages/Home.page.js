import React, {useState, useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import { Premier } from "../components/Premier/premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import PremierImages from "../config/TempPosters.config";
import axios from "axios";

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async() => {
            const getPopularMovies = await axios.get("/movie/now_playing");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    },[]);

    console.log({popularMovies});
    return (
        <>
        <div className="flex flex-col gap-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800">The Best Of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
            <div className="bg-navCol-200 py-16">
                <div className="container mx-auto px-24">
                <div className="flex">
                <img className="w-full h-full" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" />
                </div>
                <PosterSlider isDark={true} images={popularMovies} title="PREMIERE" subtitle="Brand New Releases Every Friday"/>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-24">
            <PosterSlider images={popularMovies} title="Online Streaming Events" isDark={false}/>  
        </div>
        <div className="container mx-auto px-24">
            <PosterSlider images={popularMovies} title="Outdoor Events" isDark={false}/>  
        </div>
        </>
    );

};

export default HomePage;