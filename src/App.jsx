import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
// import Community from './Components/Community/Community';

export default function App(){

  return(
    <div>
    <Header />
        {/* <Route path="/" element={<Body />} />
        <Route path="/comunnity" element={<Community />} /> */}
    <Body/>
    <Footer />
  </div>
);
};
