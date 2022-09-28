import React from "react";
import "./App.css";
import CharactersList from "./components/CharactersList";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndividualCharacter from "./components/IndividualCharacter";
function App() {
  return (
    // <Layout>
    <Router>
      <Routes>
        <Route path="/" element={<CharactersList />}></Route>
        <Route path="/:id" element={<IndividualCharacter />}></Route>
      </Routes>
    </Router>
    // </Layout>
  );
}

export default App;
