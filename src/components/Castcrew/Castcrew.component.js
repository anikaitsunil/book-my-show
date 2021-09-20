import React from "react";
import Slider from "react-slick";
import { NextArrow,PrevArrow } from "./Arrows.component";

const CastcrewCard = (props) => {
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

const CastcrewCardSlider = () => {
    const CastcrewImage = [
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/tony-leung-iein105711-02-04-2018-13-07-58.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-yeoh-1473-24-03-2017-17-32-23.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/destin-cretton-1076480-15-01-2020-01-11-15.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/jonathan-schwartz-1264076-01-03-2019-07-51-58.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/bill-pope-iein005277-24-03-2017-13-02-34.jpg",
    ];

    const settings = {
        infinite:false,
        autoplay:false,
        slidesToShow: 6,
        slidesToScroll: 1,
        InitialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    return (
       <>
       <Slider {...settings}>
                <CastcrewCard src={CastcrewImage[0]} title="Simu Liu" subtitle="As Shang-Chi"/>
                <CastcrewCard src={CastcrewImage[1]} title="Awkwafina" subtitle="As Katy"/>
                <CastcrewCard src={CastcrewImage[2]} title="Tony Leung" subtitle="As Wenwu"/>
                <CastcrewCard src={CastcrewImage[3]} title="Michelle Yeoh" subtitle="As Jiang Nan"/>
                <CastcrewCard src={CastcrewImage[4]} title="Destin Creton" subtitle="Director"/>
                <CastcrewCard src={CastcrewImage[5]} title="Kevin Feige" subtitle="Producer"/>
                <CastcrewCard src={CastcrewImage[6]} title="Jonathan Schwartz" subtitle="Producer"/>
                <CastcrewCard src={CastcrewImage[7]} title="Bill Pope" subtitle="Cinematographer"/>
       </Slider>
       </> 
    );
};

export default CastcrewCardSlider;