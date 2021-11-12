import React from "react";
import PropTypes from 'prop-types';
import GuestRoute from "./GuestRoute";
import UserRoute from "./UserRoute";

const RoutesContainer = (props: any) => {
  console.log(props.users.isLogin)
  return (
    <div id="Routes">
      <div
        id="content"
        style={{
          overflowY: "auto",
        }}
      >
        {props.users.isLogin === true && <UserRoute />}
        {props.users.isLogin === false && <GuestRoute />}
      </div>
    </div>
  );
};

export default RoutesContainer;
