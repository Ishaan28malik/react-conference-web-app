import React, { useReducer, useEffect } from "react";

import Conference from "./components/Conference";
import spinner from "./assets/spinner.gif";
import Search from "./components/Search";
import { initialState, reducer } from "./store/reducer";
import axios from "axios";

// const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";
const CONFERENCE_API_URL = "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(CONFERENCE_API_URL).then(jsonResponse => {
      console.log('jsonResponse.data.Search', jsonResponse.data.free);
      dispatch({
        type: "SEARCH_CONFERENCES_SUCCESS",
        payload: jsonResponse.data.paid
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

    axios(`https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences/`).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
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

  const { conferences, errorMessage, loading } = state;

  const retrievedConferences =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
          conferences.map((movie, index) => (
            <Conference key={`${index}-${movie.confName}`} movie={movie} />
          ))
        );

  return (
    <div className="App">
      <div className="m-container">
        <h1>Conference Hub</h1>
        <Search search={search} />
        <p className="App-intro">Conference list</p>
        <div className="movies">{retrievedConferences}</div>
      </div>
    </div>
  );
};

export default App;