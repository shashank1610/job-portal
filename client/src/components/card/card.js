import React, { useState, useEffect } from "react";
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
        <Card.Text>No. of Vacancies : {props.numVacancy}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default card;
