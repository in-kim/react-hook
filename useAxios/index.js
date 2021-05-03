import React from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url:
      "https://fifa-record-api.link/api/record/match-info/굴리트러브/5e996552ef99d44dc764eec8"
    // https://yts.am/api/v2/list_movies.json
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div>{data && data.status}</div>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refecth</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
