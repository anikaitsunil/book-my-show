

import React, {Component} from "react";
import { Route } from "react-router-dom";

//Layouts
import MovieLayout from "../layouts/movie.layout";

const MovieHoc = ({ component:Component , ...rest }) => {
    //component
    //props -> path exact
    return (
        <>
        <Route 
        {...rest}

        component = {(props) => (
            <MovieLayout>
                <Component {...props}/>
            </MovieLayout>
        )}
        />
        </>
    )
};

export default MovieHoc;