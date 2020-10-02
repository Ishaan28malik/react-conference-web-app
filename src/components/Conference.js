import React from "react";
import Dev from "../assets/Dev.jpg";
import Card from "@material-ui/core/Card";

const DEFAULT_PLACEHOLDER_IMAGE = Dev;

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
      >
        <h3
          style={{
            textAlign: "center",
            justifyContent: "center",
            overflow: "hidden ",
            textOverflow: "ellipsis",
            display: "inline-block",
            width: "250px",
            whiteSpace: "nowrap",
            margin: "10px",
            textDecoration: "underline",
          }}
        >
          {conference.confName}
        </h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            width="200px"
            height="150px"
            alt={`Conference Name: ${conference.confName}`}
            src={image}
          />
        </div>
        <p style={{ display: "flex", justifyContent: "center" }}>
          {conference.confStartDate}
        </p>
        <b
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          [{conference.entryType}]
        </b>
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
