import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const table = props => {
  console.log(`Table COmpoent props ${JSON.stringify(props)}`);
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.location}</td>
      <td>
        <Link to={`/getJobDetails/${encodeURIComponent(props.link)}`}>
          <Button>Details</Button>
        </Link>
      </td>
    </tr>
  );
};

export default table;
