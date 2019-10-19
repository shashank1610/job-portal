import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/card";
import axios from "axios";
import { CardDeck } from "react-bootstrap";

function App() {
  let [jobCategories, setJobCategories] = useState([]);
  const [jobCategory, setJobCategory] = useState(null);
  // const [jobsInCategory, setJobCategory] = useState([]);
  const categories = [];
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:7000/getJobCategories/")
  //     .then(res => {
  //       setJobCategories(res.data);
  //     })
  //     .catch(error => {
  //       console.log(`ERRROR ${error}`);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .post("http://localhost:7000/getJobDetailsByCategory/", {
        jobCategory: jobCategory
      })
      .then(res => {
        setJobCategories(res.data);
      })
      .catch(error => {
        console.log(`ERRROR ${error}`);
      });
  }, [jobCategory]);
  jobCategories = [
    {
      category: "Any role",
      NumVancanies: 1
    },
    {
      category: "Automation",
      NumVancanies: 3
    },
    {
      category: "Business",
      NumVancanies: 31
    },
    {
      category: "Design",
      NumVancanies: 5
    },
    {
      category: "Engineering",
      NumVancanies: 14
    },
    {
      category: "Human Resource",
      NumVancanies: 1
    },
    {
      category: "Infrastructure",
      NumVancanies: 2
    },
    {
      category: "Marketing",
      NumVancanies: 3
    },
    {
      category: "Other",
      NumVancanies: 2
    },
    {
      category: "Product",
      NumVancanies: 11
    },
    {
      category: "Solutions",
      NumVancanies: 1
    },
    {
      category: "Strategy",
      NumVancanies: 1
    },
    {
      category: "Test Automation",
      NumVancanies: 1
    }
  ];

  const onCategoryClickHandler = category => {
    setJobCategory(category);
  };
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
  return <div className="row mt-5">{categories}</div>;
}

export default App;
