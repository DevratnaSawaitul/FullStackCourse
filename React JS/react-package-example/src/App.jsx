import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import HOCComp1 from "./HOCComp1.jsx";
import HOCComp2 from "./HOCComp2.jsx";
import APIExample from "./APIExample.jsx";

function App() {
  const UsingAxios = () => {
    // alterantive of fetch('').then()
    axios.get("url").then(response);
  };

  const ButtonEx = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #bf4f74;
    color: #bf4f74;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;
  return (
    <>
     <Routes>
        <Route path="/comp1" element={<HOCComp1 />} />
        <Route path="/comp2" element={<HOCComp2 />} />
        <Route path="/api" element={<APIExample />} />
      </Routes>
      <h1>This is react Example</h1>
      <button>Normal Button</button>
      <ButtonEx>This is Styled buttotn</ButtonEx>
    </>
  );
}

export default App;
