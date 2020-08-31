import React, { useEffect, useState } from "react";
import Conference from "./components/Conference";
import spinner from "./assets/spinner.gif";
import Search from "./components/Search";
import axios from "axios";
import index from "../src/index.css";
// import Container from "@material-ui/core/Container";

const CONFERENCE_API_URL =
  "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences/?s=conf&s=aws&s=Developer&s=Conference";

const App = () => {
  const [list, setList] = useState([]);
  const [filterlist, setFilterList] = useState([]);
  const [free, setFree] = useState([]);
  const [paid, setPaid] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(CONFERENCE_API_URL).then((res) => {
      setList(res.data.paid);
      setFree(res.data.free);
      setPaid(res.data.paid);
      /* By default the List will show Paid events */
      setFilterList(res.data.paid);
    });
  }, []);
  return (
    <div>
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Developer Conference Hub
        </h1>
        <Search list={list} setFilterList={setFilterList} />
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Conference list
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // overflowX: "scroll",
            margin: "50px",
            border: "5px solid",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5px",
            }}
          >
            {/* <Container maxWidth="sm"> */}
            <button
              style={{
                cursor: "pointer",
                width: "45px",
                height: "30px",
                marginRight: "10px",
                borderRadius: "10px",
                backgroundColor: "white",
                color: "#1976d2",
                borderColor: "#0915ed",
              }}
              onClick={() => {
                setFilterList(free);
              }}
            >
              Free
            </button>
            <button
              style={{
                cursor: "pointer",
                width: "45px",
                height: "30px",
                marginRight: "10px",
                borderRadius: "10px",
                backgroundColor: "white",
                color: "#1976d2",
                borderColor: "#0915ed",
              }}
              onClick={() => {
                setFilterList(paid);
              }}
            >
              {/* <input type="checkbox" class="check"> */}
              Paid
              {/* </input> */}
            </button>
            {/* </Container> */}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "scroll",
              margin: "10px",
              // border: "1px solid",
              // borderRadius: "20px",
            }}
          >
            {/* {loading ? <img className="spinner" src={spinner} alt="Loading spinner" /> : <ResultsTable results={data} />} */}
            {filterlist.map((conference, index) => (
              <Conference
                key={`${index}-${conference.confName}`}
                conference={conference}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
