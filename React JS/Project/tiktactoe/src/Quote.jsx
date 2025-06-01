import React, { useEffect, useState } from "react";
import "./Quote.css";
import axios from "axios";
export default function Quote() {
  let [quote, setQuote] = useState("loading...");
  let getQuotes = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => {
        setQuote(res.data.fact);
      })
      .catch(() => {
        console.log("got error");
      });
  };
  useEffect(() => {
    getQuotes();
    const interval = setInterval(() => {
      getQuotes();
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="quote-body">
      <h4 className="quote-heading">Quote</h4>
      <h5 className="quote-content">{quote}</h5>
    </div>
  );
}
