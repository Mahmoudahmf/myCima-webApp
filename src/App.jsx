import { React, Component } from "react";
//import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import NotFound from "./components/NotFound/NotFound";
import Tv from "./components/Tv/Tv";
import { Route, Routes, Navigate } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
//import Navbar from "./components/Navbar/Navbar";

export default class App extends Component {
  render() {
    return (
      <>
      
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/tv"
            element={
              <ProtectedRoutes>
                <Tv />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoutes>
                <Movies />
              </ProtectedRoutes>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}
