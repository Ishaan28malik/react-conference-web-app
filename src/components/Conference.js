import React from "react";
import Dev from "../assets/Dev.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
import AttachMoneyTwoToneIcon from "@material-ui/icons/AttachMoneyTwoTone";
import MoneyOffTwoToneIcon from "@material-ui/icons/MoneyOffTwoTone";
// import styles from "../index.css";

const DEFAULT_PLACEHOLDER_IMAGE = Dev;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: "10%",
    marginRight: theme.spacing(1),
    width: 236,
  },
  margin: {
    margin: theme.spacing(1),
    width: "auto",
    marginLeft: "32%",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Conference = ({ conference }) => {
  const classes = useStyles();
  const confDate = new Date(conference.confStartDate)
    .toLocaleDateString()
    .split("/");
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
          position: "relative",
          margin: "auto",
          overflow: "hidden",
          boxShadow: "5px 5px 15px rgba(186, 126, 126, 0.5)",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              width: "80%",
              backgroundColor: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              marginBottom: "25px",
            }}
          >
            <img
              width="100%"
              height="150px"
              alt={`Conference Name: ${conference.confName}`}
              src={image}
            />
            <div
              style={{
                textAlign: "center",
                padding: "10px 20px",
              }}
            >
              <p> {conference.confName}</p>
            </div>
          </div>
        </div>
        <TextField
          id="date"
          label="Conf. Date"
          type="date"
          disabled={true}
          defaultValue={`${confDate[2]}-${confDate[1]}-${confDate[0]}`}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <b
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          {conference.entryType === "Paid" ? (
            <>
              <AttachMoneyTwoToneIcon />{" "}
              <span style={{ paddingTop: "3px" }}>Paid</span>
            </>
          ) : (
            <>
              <MoneyOffTwoToneIcon />{" "}
              <span style={{ paddingTop: "3px" }}>Free</span>
            </>
          )}
        </b>
        <b style={{ display: "flex", justifyContent: "center" }}>
          <b
            style={{
              position: "relative",
              top: "-5px",
              color: "#000",
              fontSize: "14px",
              letterSpacing: "0.4px",
              fontWeight: 400,
              fontFamily: `"Montserrat", sans-serif`,
            }}
          >
            <RoomTwoToneIcon />
            {conference.country} ({conference.city})
          </b>
        </b>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          className={classes.margin}
        >
          <a
            style={{
              fontWeight: 600,
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
            href={conference.confUrl}
          >
            Visit Website
          </a>
        </Button>
      </Card>
    </div>
  );
};

export default Conference;
