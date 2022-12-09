import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./utils/AppContext";

import Home from "./pages/Home";
import Quizzes from "./pages/Quizzes";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/404";
import Navigation from "./components/Navigation";

function App() {
  return (
    <AppProvider>
      <Router>
      <>
      <Navigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </>
      </Router>
    </AppProvider>
  );
}

export default App;
