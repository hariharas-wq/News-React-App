import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={

    progress:0

  }
  setProgress(progress){
    this.setState({progress:progress})
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />


          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={5} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={5} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={5} country="in" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={5} country="in" category="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={5} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={5} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={5} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={5} country="in" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

