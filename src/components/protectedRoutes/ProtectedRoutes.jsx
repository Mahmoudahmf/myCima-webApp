import React from "react";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router";
//import { connect } from "react-redux";

// let Btb3tStateMnStoreLlPropsHina = (state) => {
//   return { token: state.token };
// };
//console.log(this.props.token);
let token = localStorage.getItem("token");
export default function ProtectedRoute({ children }) {
  //console.log(this.props.token  );
  try {
    jwt_decode(token);
  } catch (error) {
    localStorage.clear();
    return token ? children : <Navigate to="/login" />;
  }

  return token ? children : <Navigate to="/home" />;
}


// connect(Btb3tStateMnStoreLlPropsHina)(ProtectedRoute);
