import { Route } from "react-router-dom";
//axios
import axios from "axios";

//HOC
import DefaultHoc from "./hoc/default.hoc";
import MovieHoc from "./hoc/movie.hoc";
//COMPONENT
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page"
import Plays from "./pages/Plays.page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
   <>
    <DefaultHoc path="/" exact component={ HomePage } />
    <MovieHoc path="/movie/:id" exact component={ Movie } />
    <DefaultHoc path="/plays" exact component={Plays} />
   </>
  );
}

// / , /movie
export default App;

