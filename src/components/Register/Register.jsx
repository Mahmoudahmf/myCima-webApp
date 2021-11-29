import React, { Component } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

export default class Register extends Component {
  user = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  getFormData = (e) => {
    this.user[e.target.name] = e.target.value;

    // console.log(this.user);
  };

  getData = async (e) => {
    e.preventDefault();
    // let x = JSON.stringify(this.user);
    let { data } = await axios.post(
      "https://route-egypt-api.herokuapp.com/signup",
      this.user
    );
    console.log(data);
    if (data.message === "success") {
      e.target.reset();
    }
  };
  render() {
    return (
      <>
      <Navbar/>
        <div className="w-75 mx-auto my-5">
          <form onSubmit={this.getData}>
            <input
              onChange={this.getFormData}
              name="first_name"
              type="text"
              placeholder="First Name"
              className=" form-control mt-4"
            />
            <input
              onChange={this.getFormData}
              name="last_name"
              type="text"
              placeholder="Last Name"
              className=" form-control mt-4"
            />
            <input
              onChange={this.getFormData}
              name="email"
              type="email"
              placeholder="E-mail"
              className=" form-control mt-4"
            />
            <input
              onChange={this.getFormData}
              name="password"
              type="password"
              placeholder="PassWord"
              className=" form-control mt-4"
            />

            <button className="btn btn-info float-right mt-5 ">Register</button>
          </form>
        </div>
      </>
    );
  }
}
