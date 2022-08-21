import React from 'react';
import './App.css';
import Postview from './PostView/postview';
import Landingpage from './LandingPage/landing_page';
import Post from './Post/post';

import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route path='/postview' element={<Postview />}></Route>
          <Route path='/post' element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;