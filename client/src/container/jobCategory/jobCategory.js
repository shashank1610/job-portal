import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import axios from "axios";
import Spinner from "../../components/spinner/spinner";
import config from '../../config'

const JobCategory = () => {
  /* 
  to get and set all job categories
  */
  const [jobCategories, setJobCategories] = useState([]);
  /* 
  to get and set jobs loading state of the component
  */
  const [loading, setLoading] = useState(true);
  const categories = [];
  /* 
    react hook to make http request to server
  */
  useEffect(() => {
    /* 
    get all job categories from server
  */
    axios
      .get(`${config.serverUrl}getJobCategories/`)
      .then(res => {
        setJobCategories(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(`ERRROR ${error}`);
      });
  }, []);
  /*
  Load component depending upon loading state 
  */
  let view = <Spinner />;
  if (!loading) {
    jobCategories.map(el => {
      categories.push(
        <div className="col-md-2 mx-5 mb-3">
          <Card
            category={el.category}
            numVacancy={el.NumVancanies}
          ></Card>
        </div>
      );
    });
    view = <div className="row mt-5"> {categories}</div>;
  }
  return view;
};

export default JobCategory;
