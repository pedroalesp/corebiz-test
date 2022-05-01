import React from "react";
import { Cartprovider } from "../context";
import { Layout } from "../containers/Layout";
import GlobalStyles from "../assets/styles/GlobalStyles";

function App() {
  return (
    <>
      <Cartprovider>
        <GlobalStyles />
        <Layout />
      </Cartprovider>
    </>
  );
}

export default App;
