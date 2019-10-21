import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const table = props => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.location}</td>
      <td>
        <Button>Details</Button>
      </td>
    </tr>
  );
};

export default table;
