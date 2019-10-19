import React from "react";
import { Card, Button } from "react-bootstrap";

const card = props => {
  return (
    <Card
      style={{
        "max-width": "256px",
        "text-align": "center"
      }}
      bg="light"
    >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.category}</Card.Title>
        <Card.Text>{props.numVacancy} Vacancies</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            props.onClickCategory(props.category);
          }}
        >
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default card;
