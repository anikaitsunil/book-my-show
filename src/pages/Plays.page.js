import React,{useState,useEffect} from "react";
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilter/PlaysFilter.component";
import axios from "axios";

const Plays = () => {

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
        <div className="container mx-auto px-4">
            <div className="w-full lg:flex lg:flex-row-reverse gap-4">
                <div className="w-8/12">
                    <h2 className="text-2xl font-bold mb-8">Plays In Bhubaneswar</h2>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <Poster 
                            src={popularMovies}
                            title="Tvk Cultural presents Ponniyin Selvan"
                            subtitle="Tamil ₹300"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <Poster 
                            src={popularMovies}
                            title="Tvk Cultural presents Ponniyin Selvan"
                            subtitle="Tamil ₹300"
                            />
                        </div><div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <Poster 
                            src={popularMovies}
                            title="Tvk Cultural presents Ponniyin Selvan"
                            subtitle="Tamil ₹300"
                            />
                        </div><div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <Poster 
                            src={popularMovies}
                            title="Tvk Cultural presents Ponniyin Selvan"
                            subtitle="Tamil ₹300"
                            />
                        </div><div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <Poster 
                            src={popularMovies}
                            title="Tvk Cultural presents Ponniyin Selvan"
                            subtitle="Tamil ₹300"
                            />
                        </div><div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <Poster 
                            src={popularMovies}
                            title="Tvk Cultural presents Ponniyin Selvan"
                            subtitle="Tamil ₹300"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <Poster 
                            src={popularMovies}
                            title="Tvk Cultural presents Ponniyin Selvan"
                            subtitle="Tamil ₹300"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <Poster 
                            src={popularMovies}
                            title="Tvk Cultural presents Ponniyin Selvan"
                            subtitle="Tamil ₹300"
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/4">
                    <h2 className="text-2xl font-bold mb-8">Filters</h2>
                    <div>
                        <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]}/>
                        <PlaysFilter title="Language" tags={["Tamil","Kannada"]}/>
                        <PlaysFilter title="Categories" tags={["Theatre"]}/>
                        <PlaysFilter title="Genres" tags={["Drama","Adaptation","Historical","Online Straming Plays"]}/>
                        <PlaysFilter title="More Filters" tags={["Online Streaming","Kids Allowed","Outdoor Events"]}/>
                        <PlaysFilter title="Price" tags={["Free","0-500","501-2000","Above 2000"]}/>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );  
};

export default Plays;