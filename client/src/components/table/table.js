import React from "react";

const table = props => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.location}</td>
    </tr>
  );
};

export default table;
