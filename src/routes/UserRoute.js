import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/user/Dashboard";

class UserRoute extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    );
  }
}

export default UserRoute;
