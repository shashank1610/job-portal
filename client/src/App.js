import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/card";
import axios from "axios";
import TableComponent from "./components/table/table";
import { Table, Button } from "react-bootstrap";
import Spinner from "./components/spinner/spinner";
import { BrowserRouter } from "react-router-dom";
import JobCategory from "./container/jobCategory/jobCategory";
import { Route } from "react-router-dom";
import jobCategory from "./container/jobCategory/jobCategory";
import jobCategoryDetails from "./container/jobCategoryDetail/jobCategoryDetail";

function App() {
  // let [jobCategories, setJobCategories] = useState([]);
  // // let [jobCategory, setJobCategory] = useState(null);
  // const [jobs, setJobs] = useState([]);
  // const [Currentpage, SetCurrentpage] = useState("categories");
  // const [loading, setLoading] = useState(false);
  // const categories = [];
  // const jobsArr = [];
  // // useEffect(() => {
  // //   axios
  // //     .get("http://localhost:7000/getJobCategories/")
  // //     .then(res => {
  // //       setJobCategories(res.data);
  // //       setLoading(false);
  // //     })
  // //     .catch(error => {
  // //       console.log(`ERRROR ${error}`);
  // //     });
  // // }, []);

  // // useEffect(() => {
  // //   axios
  // //     .post("http://localhost:7000/getJobDetailsByCategory/", {
  // //       jobCategory: jobCategory
  // //     })
  // //     .then(res => {
  // //       setJobs(res.data);
  // //       setLoading(false);
  // //     })
  // //     .catch(error => {
  // //       console.log(`ERRROR ${error}`);
  // //     });
  // // }, [jobs]);

  // jobCategory = [
  //   {
  //     name: "SDET III",
  //     location: "Location: Bengaluru, Karnataka, India"
  //   },
  //   {
  //     name: "SDET II",
  //     location: "Location: Bengaluru, Karnataka, India"
  //   },
  //   {
  //     name: "SDET I",
  //     location: "Location: Bengaluru, Karnataka, India"
  //   }
  // ];
  // jobCategories = [
  //   {
  //     category: "Any role",
  //     NumVancanies: 1
  //   },
  //   {
  //     category: "Automation",
  //     NumVancanies: 3
  //   },
  //   {
  //     category: "Business",
  //     NumVancanies: 31
  //   },
  //   {
  //     category: "Design",
  //     NumVancanies: 5
  //   },
  //   {
  //     category: "Engineering",
  //     NumVancanies: 14
  //   },
  //   {
  //     category: "Human Resource",
  //     NumVancanies: 1
  //   },
  //   {
  //     category: "Infrastructure",
  //     NumVancanies: 2
  //   },
  //   {
  //     category: "Marketing",
  //     NumVancanies: 3
  //   },
  //   {
  //     category: "Other",
  //     NumVancanies: 2
  //   },
  //   {
  //     category: "Product",
  //     NumVancanies: 11
  //   },
  //   {
  //     category: "Solutions",
  //     NumVancanies: 1
  //   },
  //   {
  //     category: "Strategy",
  //     NumVancanies: 1
  //   },
  //   {
  //     category: "Test Automation",
  //     NumVancanies: 1
  //   }
  // ];

  // const onCategoryClickHandler = category => {
  //   setLoading(true);
  //   setJobCategory(category);
  //   SetCurrentpage("jobs");
  // };
  // const onBackClickHandler = () => {
  //   SetCurrentpage("categories");
  // };
  // console.log(`JOBS ${jobs}`);
  // // if (!loading) {
  // // if (Currentpage == "categories") {
  // jobCategories.map(el => {
  //   categories.push(
  //     <div className="col-md-2 mx-5 mb-3">
  //       <Card
  //         category={el.category}
  //         numVacancy={el.NumVancanies}
  //         onClickCategory={onCategoryClickHandler}
  //       ></Card>
  //     </div>
  //   );
  // });
  // console.log(categories);
  // let view = <div className="row mt-5"> {categories}</div>;
  // //   } else {
  // jobs.map((el, index) => {
  //   jobsArr.push(
  //     <TableComponent
  //       title={el.name}
  //       location={el.location}
  //       id={index + 1}
  //     />
  //   );
  // });
  // view = (
  //   <div>
  //     <Table striped bordered hojobCategoryDetailsver>
  //       <thead>
  //         <tr>
  //           <th>#</th>
  //           <th>Job Title</th>
  //           <th>Job Location</th>
  //         </tr>
  //       </thead>
  //       <tbody>{jobsArr}</tbody>
  //     </Table>
  //     <Button variant="primary" onClick={onBackClickHandler}>
  //       Back
  //     </Button>
  //   </div>
  // );
  // //   }
  // // }
  // // }
  return (
    <div className="App">
      <Route path="/" exact component={jobCategory} />
      <Route path="/:CategoryId" component={jobCategoryDetails} />
    </div>
  );
}
export default App;
