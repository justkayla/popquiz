import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./utils/AppContext";
import Container from "react-bootstrap/Container";

import Home from "./pages/Home";
import Quizzes from "./pages/Quizzes";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/404";
import Navigation from "./components/Navigation";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const [ authUser, setAuthUser ] = useState(null)

  // const checkForValidUser = async() => {
  //   const authCheck = await fetch("/api/user/lookup")
  //   const checkResult = await authCheck.json()
  //   // return console.log({checkResult})

  //   if( checkResult.result === "success" ){
  //     setAuthUser({ _id: checkResult._id, email: checkResult.email })
  //   }
  // }

  // useEffect(() => {
  //   checkForValidUser()
  // }, [])

  return (
    <AppProvider>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </AppProvider>
  );
}

export default App;
