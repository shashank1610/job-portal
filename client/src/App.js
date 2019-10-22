import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import jobCategory from "./container/jobCategory/jobCategory";
import jobCategoryDetails from "./container/jobCategoryDetail/jobCategoryDetail";
import jobDetail from "./container/jobDetail/jobDetail";

/*
Cockpit file having routes to 3 pages of application
*/
function App() {
  return (
    <div className="App">
      <Route path="/" exact component={jobCategory} />
      <Route
        path="/getJobDetailsByCategory/:CategoryId"
        exact
        component={jobCategoryDetails}
      />
      <Route
        path="/getJobDetails/:jobLink"
        component={jobDetail}
      />
    </div>
  );
}
export default App;
