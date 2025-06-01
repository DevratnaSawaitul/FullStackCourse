import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function APIExample() {
  let [responseAxios, setResponseAxios] = useState("Loading......");
  let [responseFetch, setResponseFetch] = useState("Loading......");

  const handleAxios = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => {
        setResponseAxios(res.data.fact);
      })
      .catch((error) => {
        alert("Error: " + error);
        console.log(error);
      });
  };
  const handleFetch = () => {
    fetch("https://catfact.ninja/fact")
      .then((respone) => {
        return respone.json();
      })
      .then((jsonRes) => {
        setResponseFetch(jsonRes.fact);
      })
      .catch((error) => {
        alert("Error: " + error);
        console.log(error);
      });
  };

  // by default it will call when loaded page
  useEffect(() => {
    handleFetch();
    handleAxios();
  }, []);
  return (
    <div>
      <h1>APIExample</h1>
      <p>
        <button onClick={handleAxios}>Refresh</button>
        Response form AXIO:{responseAxios}{" "}
      </p>
      <p>
        <button onClick={handleFetch}>Refresh</button>
        Response form Fetch:{responseFetch}{" "}
      </p>
    </div>
  );
}

export default APIExample;
