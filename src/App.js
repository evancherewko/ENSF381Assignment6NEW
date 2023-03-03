
import "./styles/styles.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Test from "./components/Test";
import Layout from "./components/Layout";
import NoEdit from "./components/NoEdit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<Layout />}>
          <Route path="/edit" element = {<Main />}></Route>
          <Route path="/" element = {<NoEdit />}></Route>
        </Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;