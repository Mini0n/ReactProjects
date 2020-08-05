import React, { Component } from "react";
import Card from "../components/Card/Card";

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const movies = await fetch("../../assets/data.json");
    const moviesJSON = await movies.json();

    if (moviesJSON) {
      this.setState({
        data: moviesJSON,
        loading: false,
      });
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div class="row">
        {data.map((movie) => (
          <div class="col-sm">
            <Card key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
