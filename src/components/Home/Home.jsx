import React, { Component } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
//import Navbar from "../Navbar/Navbar";
//import Navbar from "../Navbar/Navbar";

export default class Home extends Component {
  state = { movies: [], tv: [] };
  getTrending = async (mediaType) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361`
    );
    // console.log(data.results);
    this.setState({
      [mediaType]: data.results,
    });
  };

  componentDidMount() {
    this.getTrending("movies");
    this.getTrending("tv");
  }

  render() {
    return (
      <>
      <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="item">
                <div className="brdr w-25"></div>
                <h1>
                  Trending <br /> Movies
                  <br /> to watch Now
                </h1>
                <p className="secondFontColor">Most Watches Movies By Day</p>
                <div className="brdr w-100"></div>
              </div>
            </div>
            {this.state.movies.slice(0, 10).map((value, index) => {
              return (
                <div key={index} className="col-md-2 my-3">
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
          <div className="row my-5">
            <div className="col-md-4">
              <div className="item">
                <div className="brdr w-25"></div>
                <h1>
                  Trending <br /> TV
                  <br /> to watch Now
                </h1>
                <p className="secondFontColor">Most Watches TVs By Day</p>
                <div className="brdr w-100"></div>
              </div>
            </div>
            {this.state.tv.slice(0, 10).map((value, index) => {
              return (
                <div key={index} className="col-md-2 my-3">
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
