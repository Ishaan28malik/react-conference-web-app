import React from "react";
import jcloud from "../assets/jcloud.jpg";

const DEFAULT_PLACEHOLDER_IMAGE =
  //   "https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531__340.jpg";
  jcloud;

const Conference = ({ conference }) => {
  let image = conference.imageURL.includes(
    '"https://storage.googleapis.com/konfhub-bd9c9.appspot.com/'
  )
    ? DEFAULT_PLACEHOLDER_IMAGE
    : conference.imageURL;
  return (
    <div style={{ marginRight: "100px" }}>
      <h2>{conference.confName}</h2>
      <div>
        <img
          width="200"
          alt={`Conference Name: ${conference.confName}`}
          src={image}
        />
      </div>
      <p>
        {conference.confStartDate}({conference.entryType})
      </p>
      <p>
        {conference.country}({conference.city})
      </p>
      <a href={conference.confUrl}>Visit Conf Website</a>
    </div>
  );
};

export default Conference;
