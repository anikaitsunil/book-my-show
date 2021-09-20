import React from "react";

//props -> src,title,subtitle, isDark(bool)

const CasrPoster = (props) => {
    return (
        <>
          <div className="w-full h-30 flex flex-col text-center px-2">
            <img className="w-full h-full rounded-full" src={props.src} alt="Castcrew Image" />
            <h3 className="text-lg">{props.title}</h3>
            <p className="text-md text-gray-500">{props.subtitle}</p>
        </div>
        </>
    );
};

export default CardPoster;