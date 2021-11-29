import axios from "axios";
import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
//import Navbar from "../Navbar/Navbar";

export default class Tv extends Component {
  state = { tv: [] };
  getData = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361`
    );
    this.setState({ tv: data.results });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
      <Navbar/>
        <div className="container">
          <div className="row">
            {this.state.tv.map((value, index) => {
              return (
                <div key={index} className="col-md-4 my-3">
                  <div className="item">
                    <span className="vote">{value.vote_average}</span>
                    <img
                      className="w-100"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        value.poster_path
                      }
                      alt=""
                    />
                    <h5>
                      {value.name} {value.title}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
