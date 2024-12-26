import React from 'react';
import './Preloader.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { BallTriangle } from 'react-loader-spinner';

const Preloader = () => {

    return (
        <div className="preloader">
            <div>
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#19f9de"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </div>
    );
};

export default Preloader;
