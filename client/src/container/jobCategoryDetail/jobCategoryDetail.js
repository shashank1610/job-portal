import React, { useEffect, useState } from "react";

const jobCategoryDetail = () => {
  jobs = [
    {
      name: "SDET III",
      location: "Location: Bengaluru, Karnataka, India"
    },
    {
      name: "SDET II",
      location: "Location: Bengaluru, Karnataka, India"
    },
    {
      name: "SDET I",
      location: "Location: Bengaluru, Karnataka, India"
    }
  ];
  jobs.map((el, index) => {
    jobsArr.push(
      <TableComponent title={el.name} location={el.location} id={index + 1} />
    );
  });
  view = (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Job Title</th>
            <th>Job Location</th>
          </tr>
        </thead>
        <tbody>{jobsArr}</tbody>
      </Table>
      <Button variant="primary" onClick={onBackClickHandler}>
        Back
      </Button>
    </div>
  );
};

export default jobCategoryDetail;
