import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/static/navbar";
import JobForm from "./components/static/jobForm";
import Home from "./screens/home";
import StickyCircleButton from "./components/static/stickyHelper";
import StickyBox from "./components/static/stickyBox";
import MusicPlayer from './components/static/musicPlayer';

function App() {
  const [values, setValues] = useState({
    helper: false,
    status: 'stickyBox-exited'  // stickyBox-entering, stickyBox-entered, stickyBox-exiting, stickyBox-exited
  });

  function handleButtonClick() {
    console.log("handleButtonClick triggered");  // Debugging line
    setValues((prev) => ({
      ...prev,
      helper: true,
      status: 'stickyBox-entering'
    }));
    setTimeout(() => setValues((prev) => ({...prev, status: 'stickyBox-entered'})), 50);
  };

  function handleClose() {
    setValues((prev) => ({
      ...prev,
      status: 'stickyBox-exiting'
    }));
    setTimeout(() => setValues((prev) => ({...prev, helper: false, status: 'stickyBox-exited'})), 1000);
  };

  useEffect(() => {
    console.log("values changed", values)
    setValues((prev) => ({
      ...prev,
      helper: false,
    }));
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <main className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/jobs" exact element={<JobForm />} />
        </Routes>
      </main>
      {!values.helper && <StickyCircleButton onClick={handleButtonClick} />}
      {values.helper && <StickyBox status={values.status} onClick={handleClose}/>}
      <MusicPlayer />
    </React.Fragment>
  );
}

export default App;
