import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import News from './components/News';
import React from 'react'
import LoadingBar from '@weblif/react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);

  const getProgress = (progress) => {
    setProgress(progress);
  }
    return (
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
           <LoadingBar
                color= "#f11946"
                height = {3}
                progress={progress}
            />
          <Routes>
              <Route exact path="/" element={<News setProgress = {getProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"></News>}/>
              <Route exact path="/business" element={<News setProgress = {getProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"></News>}/>
              <Route exact path="/entertainment" element={<News setProgress = {getProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"></News>}/>
              <Route exact path="/general" element={<News setProgress = {getProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"></News>}/>
              <Route exact path="/health" element={<News setProgress = {getProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"></News>}/>
              <Route exact path="/science" element={<News setProgress = {getProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"></News>}/>
              <Route exact path="/sports" element={<News setProgress = {getProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"></News>}/>
              <Route exact path="/technology" element={<News setProgress = {getProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"></News>}/>
          </Routes>
          
        </div>
      </BrowserRouter>
    )

}

export default App;