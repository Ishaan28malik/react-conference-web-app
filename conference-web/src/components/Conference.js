import React from "react";
import jcloud from '../assets/jcloud.jpg';

const DEFAULT_PLACEHOLDER_IMAGE =
    // "https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531__340.jpg";
    { jcloud };

const Conference = ({ conference }) => {
    const image =
        conference.imageURL === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : conference.imageURL;
    return (
        <div className="conference">
            <h2>{conference.confName}</h2>
            <div>
                <img
                    width="200"
                    alt={`Conference Name: ${conference.confName}`}
                    src={image}
                />
            </div>
            <p>({conference.confStartDate})</p>
        </div>
    );
};

export default Conference;