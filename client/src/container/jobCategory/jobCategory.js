import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import axios from "axios";
import Spinner from "../../components/spinner/spinner";
import {Link} from 'react-router-dom'

const JobCategory = () => {
  const [jobCategories, setJobCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = [];
  useEffect(() => {
    axios
      .get("http://localhost:7000/getJobCategories/")
      .then(res => {
        setJobCategories(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(`ERRROR ${error}`);
      });
  }, []);
  const onCategoryClickHandler = category => {};
  let view = <Spinner />;
  if (!loading) {
    jobCategories.map(el => {
      categories.push(
        <div className="col-md-2 mx-5 mb-3">
          <Card
            category={el.category}
            numVacancy={el.NumVancanies}
            onClickCategory={onCategoryClickHandler}
          ></Card>
        </div>
      );
    });
   view =  <div className="row mt-5"> {categories}</div>
  }
  return view;
};

export default JobCategory;
