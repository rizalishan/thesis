import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../pages/guest/SignIn";
import SignUp from "../pages/guest/SignUp";

class GuestRoute extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
    );
  }
}

export default GuestRoute;
