import React, { useReducer, useEffect } from "react";

import Conference from "./components/Conference";
import spinner from "./assets/spinner.gif";
import Search from "./components/Search";
import { initialState, reducer } from "./store/reducer";
import axios from "axios";

const CONFERENCE_API_URL = "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences/?s=conf&s=aws&s=Developer&s=Conference";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(CONFERENCE_API_URL).then(jsonResponse => {
      console.log('jsonResponse.data.Search', jsonResponse.data.free);
      dispatch({
        type: "SEARCH_CONFERENCES_SUCCESS",
        payload: jsonResponse.data.paid && jsonResponse.data.free
      });
    });
  }, []);

  // you can add this to the onClick listener of the Header component
  const refreshPage = () => {
    window.location.reload();
  };

  const search = searchValue => {
    dispatch({
      type: "SEARCH_CONFERENCES_REQUEST"
    });

    axios(`https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences/?s=${searchValue}&s=${searchValue}&s=${searchValue}&s=${searchValue}`).then(
      jsonResponse => {
        console.log('jsonResponse.data.Response', jsonResponse.data.display_paid);
        if (jsonResponse.data.display_paid === "1") {
          dispatch({
            type: "SEARCH_CONFERENCES_SUCCESS",
            payload: jsonResponse.data.paid
          });
        } else {
          dispatch({
            type: "SEARCH_CONFERENCES_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };

  const { conferences, loading } = state;

  const retrievedConferences =
    loading ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : (
        conferences.map((conference, index) => (
          <Conference key={`${index}-${conference.confName}`} conference={conference} />
        ))
      );

  return (
    <div className="App">
      <div className="m-container">
        <h1>Conference Hub</h1>
        <Search search={search} />
        <p className="App-intro">Conference list</p>
        <div className="conferences">{retrievedConferences}</div>
      </div>
    </div>
  );
};

export default App;