import React from "react";
import jcloud from "../assets/jcloud.jpg";

const DEFAULT_PLACEHOLDER_IMAGE = jcloud;

const Conference = ({ conference }) => {
  let image = conference.imageURL.includes(
    '"https://storage.googleapis.com/konfhub-bd9c9.appspot.com/'
  )
    ? DEFAULT_PLACEHOLDER_IMAGE
    : conference.imageURL;
  return (
    <div style={{ margin: "20px" }}>
      <h2>{conference.confName}</h2>
      <div>
        <img
          width="200px"
          height="150px"
          alt={`Conference Name: ${conference.confName}`}
          src={image}
        />
      </div>
      <p>
        {conference.confStartDate} ({conference.entryType})
      </p>
      <p>
        {conference.country} ({conference.city})
      </p>
      <a href={conference.confUrl}>Visit Conf Website</a>
    </div>
  );
};

export default Conference;
