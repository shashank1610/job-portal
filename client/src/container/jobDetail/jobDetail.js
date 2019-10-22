import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import Spinner from "../../components/spinner/spinner";

const JobDetail = props => {
  console.log(props);
  /* 
  to get and set particular  job 
  */
  const [jobDetail, setJobDetail] = useState([]);
  /* 
  to get and set jobs loading state of the component
  */
  const [loading, setLoading] = useState(true);
  const jobDetailArr = [];
  /* 
    react hook to make http request to server
  */
  useEffect(() => {
    /* 
    get all job categories from server
  */
    axios
      .get(
        `${config.serverUrl}getJobDetails/?link=${encodeURIComponent(
          props.match.params.jobLink
        )}`
      )
      .then(res => {
        setJobDetail(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(`ERRROR ${error}`);
      });
  }, []);
  let view = <Spinner />;
  if (!loading) {
    jobDetail.map((el, index) => {
        console.log(el.desc.trim().split('/n'));
      jobDetailArr.push(<div>{el.desc}</div>);
    });
    view = (jobDetailArr)
  }

  return view;
};

export default JobDetail;
