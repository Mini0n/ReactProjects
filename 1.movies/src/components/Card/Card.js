import React from "react";
import PropTypes from "prop-types";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={movie.img.src} alt={movie.img.alt} />
      <div className="card-body">
        <h2 className="card-title">{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{`Distributor: ${movie.distributor}`}</li>
        <li className="list-group-item">{`Àmount: ${movie.amount}`}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    distributor: PropTypes.string,
    amount: PropTypes.string,
    year: PropTypes.number,
    ranking: PropTypes.number,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  }).isRequired,
};

export default Card;
