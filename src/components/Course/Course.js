import { getByTitle } from "@testing-library/dom";
import React from "react";
import Rating from "react-rating";

const Course = (props) => {

  const { title, description, price, image, trainer, totalEnrolled, totalRating, averageRating } = props.course;

  // console.log(props);
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="d-flex justify-content-between">
            <span><i className="fas fa-user-alt"></i> {trainer} </span> |
            <span className="text-end">Enrolled: {totalEnrolled}</span>
          </h6>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <small className="text-muted fs-6 align-middle">
              {averageRating}
              <Rating
                initialRating={averageRating}
                readonly
                emptySymbol="far fa-star text-warning"
                fullSymbol="fas fa-star text-warning">
              </Rating>({totalRating})
            </small>
            |
            <button
              onClick={() => props.handlePurchase(props.course)}
              className="btn  btn-primary text-end"><i className="fas fa-shopping-cart"></i> Add Item</button>
          </div>
          <h4>${price} </h4>
        </div>
      </div>
    </div>
  );
};

export default Course;


