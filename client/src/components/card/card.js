import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const card = props => {
  return (
    <Card
      style={{
        // "max-width": "256px",
        "text-align": "center"
      }}
      bg="light"
    >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.category}</Card.Title>
        <Card.Text>{props.numVacancy} Vacancies</Card.Text>
        <Link to={`getJobDetailsByCategory/${props.category}`}>
          <Button variant="primary" className="btn-sm">
            Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default card;
