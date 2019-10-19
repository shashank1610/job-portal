import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import jobCategory from "./container/jobCategory/jobCategory";
import jobCategoryDetails from "./container/jobCategoryDetail/jobCategoryDetail";
/*
Cockpit file having routes to 2 pages of application
*/
function App() {
  return (
    <div className="App">
      <Route path="/" exact component={jobCategory} />
      <Route path="/:CategoryId" component={jobCategoryDetails} />
    </div>
  );
}
export default App;
