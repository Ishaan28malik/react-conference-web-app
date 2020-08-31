import React, { useEffect, useState } from "react";
import Conference from "./components/Conference";
import spinner from "./assets/spinner.gif";
import Search from "./components/Search";
import axios from "axios";

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
      setFilterList(res.data.paid);
    });
  }, []);
  return (
    <div>
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Conference Hub
        </h1>
        <Search list={list} setFilterList={setFilterList} />
        <p style={{ display: "flex", justifyContent: "center" }}>
          Conference list
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              width: "100px",
              height: "50px",
            }}
            onClick={() => {
              setFilterList(free);
            }}
          >
            Free
          </button>
          <button
            style={{
              width: "100px",
              height: "50px",
            }}
            onClick={() => {
              setFilterList(paid);
            }}
          >
            Paid
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
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
  );
};

export default App;
