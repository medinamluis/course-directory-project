import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';  // make sure to npm install --save react-router-dom
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import TeachersAndFeatured from "./TeachersAndFeatured";
import Teachers from "./Teachers";
import Featured from './Featured';
import Courses from "./Courses";
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About title='About'/>} /> 
        <Route path="teachers-featured/*" element={<TeachersAndFeatured />} >
          <Route index element={<Teachers />} />
          <Route path=":topic/:lname/:fname" element={<Featured />} /> 
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="courses/*" element={<Courses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;