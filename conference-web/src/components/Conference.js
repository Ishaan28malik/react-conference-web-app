import React from "react";
import jcloud from "../assets/jcloud.jpg";
import Card from "@material-ui/core/Card";
import { shadows } from "@material-ui/system";

const DEFAULT_PLACEHOLDER_IMAGE = jcloud;

const Conference = ({ conference }) => {
  let image = conference.imageURL.includes(
    '"https://storage.googleapis.com/konfhub-bd9c9.appspot.com/'
  )
    ? DEFAULT_PLACEHOLDER_IMAGE
    : conference.imageURL;
  return (
    <div style={{ margin: "20px" }}>
      <Card
        style={{
          width: "300px",
          height: "450px",
          boxShadow: "5px 5px 5px 3px black",
        }}
        boxShadow={10}
      >
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          {conference.confName}
        </h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            width="200px"
            height="150px"
            alt={`Conference Name: ${conference.confName}`}
            src={image}
          />
        </div>
        <p style={{ display: "flex", justifyContent: "center" }}>
          {conference.confStartDate} ({conference.entryType})
        </p>
        <p style={{ display: "flex", justifyContent: "center" }}>
          {conference.country} ({conference.city})
        </p>
        <a
          style={{ display: "flex", justifyContent: "center" }}
          href={conference.confUrl}
        >
          Visit Conf Website
        </a>
      </Card>
    </div>
  );
};

export default Conference;
