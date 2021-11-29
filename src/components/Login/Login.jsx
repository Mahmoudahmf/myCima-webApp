import React, { Component } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { connect } from "react-redux";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
//import Navbar from "../Navbar/Navbar";

// let Btb3tStateMnStoreLlPropsHina = (state) => {
//   return { token: state.token };
// };

// function Btb3tActionMnStoreLlPropsHina(dispatch) {
//   return {
//     getData: (user) => {
//       debugger;
//       return dispatch({ type: "login", payload: { ...user } });
//     },
//   };
// }

class Login extends Component {
  state = { errorMessage: "" };
  user = {
    email: "",
    password: "",
  };

  getFormData = (e) => {
    this.user[e.target.name] = e.target.value;

    // console.log(this.user);
  };

  getData = async (e) => {
    e.preventDefault();
    //    dispatch({ type: "localStorage" });
    //  }

    // let x = JSON.stringify(this.user);
    let { data } = await axios.post(
      "https://route-egypt-api.herokuapp.com/signin",
      this.user
    );

    console.log(data.token);
    if (data.message === "success") {
      localStorage.setItem("token", data.token);
      // go to home component
      this.props.navigate("/home", { replace: true });

      // history.push("/home");
      //   e.target.reset();
    } else {
      this.setState({ errorMessage: data.message });
    }
  };
  render() {
    //console.log(this.props);
    return (
      <>
      <Navbar/>
        <div className="w-75 mx-auto my-5">
          <form
            onSubmit={
            this.getData}
          >
            <input
              onChange={this.getFormData}
              name="email"
              type="email"
              placeholder="UserName"
              className=" form-control mt-4"
            />
            <div className="mt-1">{this.state.errorMessage}</div>
            <input
              onChange={this.getFormData}
              name="password"
              type="password"
              placeholder="PassWord"
              className=" form-control mt-3"
            />

            <div className="mt-1">{this.state.errorMessage}</div>

            <button className="btn btn-info mt-3">LogIn</button>
          </form>
        </div>
      </>
    );
  }
}

// export default withRouter(Login);
function WithNavigate(props) {
  let navigate = useNavigate();
  return <Login {...props} navigate={navigate} location={Location} />;
}

export default WithNavigate;
// connect(
//   Btb3tStateMnStoreLlPropsHina,
//   Btb3tActionMnStoreLlPropsHina
// )(WithNavigate);
