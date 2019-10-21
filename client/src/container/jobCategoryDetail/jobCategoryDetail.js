import React, { useEffect, useState } from "react";
import TableComponent from "../../components/table/table";
import Spinner from "../../components/spinner/spinner";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config";
const JobCategoryDetail = props => {
  console.log('in categfory details')
  /* 
  to get and set jobs corresponding to a particular category
  */
  const [jobs, setJobs] = useState([]);
  /* 
  to get and set jobs loading state of the component
  */
  const [loading, setLoading] = useState(true);
  const jobsArr = [];
  /* 
    react hook to make http request to server
  */
  useEffect(() => {
    /*
      get jobs corresponding to category sent as post query param
    */
    axios
      .post(`${config.serverUrl}getJobDetailsByCategory/`, {
        jobCategory: props.match.params.CategoryId
      })
      .then(res => {
        /*
          set state objects
       */
        setJobs(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(`ERRROR ${error}`);
      });
  }, []);
  /*
      iterate over jobs array and create table rows for them
  */
  jobs.map((el, index) => {
    jobsArr.push(
      <TableComponent title={el.name} location={el.location} link = {el.link} id={index + 1} />
    );
  });
  /*
    Load component depending upon loading state
   */
  let view = <Spinner />;
  if (!loading) {
    view = (
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Job Title</th>
                  <th>Job Location</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>{jobsArr}</tbody>
            </Table>
            <Link to="/">
              <Button variant="primary">Back</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return view;
};

export default JobCategoryDetail;
