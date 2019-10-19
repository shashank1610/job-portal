import React, { useEffect, useState } from "react";
import TableComponent from "../../components/table/table";
import Spinner from "../../components/spinner/spinner";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
const JobCategoryDetail = props => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const jobsArr = [];

  useEffect(() => {
    axios
      .post("http://localhost:7000/getJobDetailsByCategory/", {
        jobCategory: props.match.params.CategoryId
      })
      .then(res => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(`ERRROR ${error}`);
      });
  }, []);
  jobs.map((el, index) => {
    jobsArr.push(
      <TableComponent title={el.name} location={el.location} id={index + 1} />
    );
  });

  let view = <Spinner />;
  if (!loading) {
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
        <Link to="/">
          <Button variant="primary">Back</Button>
        </Link>
      </div>
    );
  }
  return view;
};

export default JobCategoryDetail;
