import React from "react";
import { Card, Button } from "react-bootstrap";
import { RatingView } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import '../App.css'

export default function GamesCard({ image, tittle, id, rating, genres }) {
  return (
    <Link to={`/game/${id}`} className="text-decoration-none" >
    <Card className="bg-secondary text-light card-hover">
      <Card.Img variant="top" src={image} style={{ height: "10rem" }} />
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <div className="d-flex">
          <RatingView ratingValue={rating} />
          <h5 className="ms-2">{rating}/5</h5>
        </div>
        <Card.Text>
          {genres?.map(
            (data, index) =>
              index < 3 && (
                <Button
                  variant="danger"
                  className="rounded-pill m-1"
                  key={index}
                  disabled
                >
                  {data.name}
                </Button>
              )
          )}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  );
}
