import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/card";
import axios from "axios";
import { CardDeck } from "react-bootstrap";

function App() {
  const [loadingStatus, setLoadingStatus] = useState(false);
  let [jobCategory, setJobCategory] = useState([]);
  const categories = [];
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:7000/test/")
  //     .then(res => {
  //       setJobCategory(res.data);
  //     })
  //     .catch(error => {
  //       console.log(`ERRROR ${error}`);
  //     });
  // }, []);
  jobCategory = [
    {
      category: "Any role",
      jobs: [
        {
          name:
            "Don't see the position you're looking for? We'd still love to hear from you!",
          location: "Location: Bengaluru, Karnataka, India"
        }
      ]
    },
    {
      category: "Automation",
      jobs: [
        { name: "SDET III", location: "Location: Bengaluru, Karnataka, India" },
        { name: "SDET II", location: "Location: Bengaluru, Karnataka, India" },
        { name: "SDET I", location: "Location: Bengaluru, Karnataka, India" }
      ]
    },
    {
      category: "Business",
      jobs: [
        {
          name: "Associate/ Sr. Associate, Pre Sales (Solutions)",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Assistant Manager / Manager, Key Accounts - Delhi",
          location: "Location: Delhi, India"
        },
        {
          name: "Associate, SME",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Executive / Senior Executive, Enterprise Partnerships",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Senior Manager / Manager, SME Partnerships",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Business Manager, Third Watch",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Associate Manager, Reconciliation and Reporting (Finance)",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Strategy Analyst",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Solutions Engineer",
          location: "Location: Bengaluru, Karnataka, India"
        },
        { name: "Manager, Sales", location: "Location: Delhi, India" },
        {
          name: "Senior Manager / Director, Sales Strategy",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Assistant Manager/Manager, Finance",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Manager / . Senior Manager, Key Accounts",
          location: "Location: Mumbai"
        },
        {
          name: "Manager / Senior Manager - Underwriting Head",
          location: "Location: Bengaluru, Karnataka, India"
        },
        { name: "Associate Manager, Growth", location: "Location: Bangalore" },
        { name: "Quality Analyst", location: "Location: Bangalore" },
        {
          name: "Assistant Manager/ Manager, Sales (Gurugram)",
          location: "Location: Gurugram"
        },
        {
          name: "Assistant Manager/ Manager, Sales (Mumbai)",
          location: "Location: Mumbai"
        },
        {
          name: "Manager / Senior Manager, Key Accounts",
          location: "Location: Delhi, India"
        },
        {
          name: "Head, Solutions & Sales Engineering",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Senior Manager / Associate Director - Partnerships",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Junior Analyst/Analyst , Technical Support",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Associate, Inside Sales( Core Sales)",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Associate , Client Success",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Manager,Sales",
          location: "Location: Mumbai, Maharashtra, India"
        },
        {
          name: "Analyst,Banking Operations",
          location: "Location: Mumbai, Maharashtra, India"
        },
        {
          name: "Assistant Manager, Branding",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Senior Manager, Sales (Government Business)",
          location: "Location: Mumbai, Maharashtra, India"
        },
        {
          name: "Senior Business Analytics Associate-Finance",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Assistant Manager, Reconciliation and Reporting",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Associate, Business Analytics (Marketing)",
          location: "Location: Bengaluru, Karnataka, India"
        }
      ]
    },
    {
      category: "Design",
      jobs: [
        {
          name: "Design Leadership",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Visual Designer",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Product Designer",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Senior Product Designer",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Lead Product Designer",
          location: "Location: Bengaluru, Karnataka, India"
        }
      ]
    },
    {
      category: "Engineering",
      jobs: [
        { name: "UI 4/ PE", location: "Location: Bengaluru, Karnataka, India" },
        { name: "UI III", location: "Location: Bengaluru, Karnataka, India" },
        { name: "UI II", location: "Location: Bengaluru, Karnataka, India" },
        {
          name: "Staff Engineer",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Senior Android Engineer",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Manager, Information Security",
          location: "Location: Bengaluru, Karnataka, India"
        },
        { name: "Data Scientist", location: "Location: Bengaluru" },
        { name: "Architect", location: "Location: Bengaluru" },
        { name: "SDE III", location: "Location: Bengaluru, Karnataka, India" },
        {
          name: "Director, Engineering",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "UI and Mobile Leader",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Engineering Manager, Merchant Experience",
          location: "Location: Bengaluru, Karnataka, India"
        },
        { name: "UI I", location: "Location: Bengaluru, Karnataka, India" },
        { name: "SDE II", location: "Location: Bengaluru, Karnataka, India" }
      ]
    },
    {
      category: "Human Resource",
      jobs: [
        {
          name: "HR Business Partner",
          location: "Location: Bengaluru, Karnataka, India"
        }
      ]
    },
    {
      category: "Infrastructure",
      jobs: [
        {
          name: "Data Infrastructure Engineer",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "DevOps Leadership Role",
          location: "Location: Bengaluru, Karnataka, India"
        }
      ]
    },
    {
      category: "Marketing",
      jobs: [
        {
          name: "Internal Communications Specialist",
          location: "Location: Bangalore"
        },
        {
          name: "Digital Marketing Performance Specialist",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Manager, Product Marketing",
          location: "Location: Bengaluru, Karnataka, India"
        }
      ]
    },
    {
      category: "Other",
      jobs: [
        {
          name: "Senior Manager, Lending Operations",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Relationship Manager - Razorpay Capital",
          location: "Location: Bengaluru, Karnataka, India"
        }
      ]
    },
    {
      category: "Product",
      jobs: [
        {
          name: "Product Manager - Lending : Capital",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Head of Product Analytics",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Manager - Product Analytics",
          location: "Location: Bangalore"
        },
        {
          name: "Product Manager - Fraud Analysis",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Senior Director : Product Management - Payments",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Director of Product Management - Payments",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Senior Product Manager - Data Sciences",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Senior Manager - Product Analytics",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Associate Director, Product Management - Payments Platform",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Technical Writer",
          location: "Location: Bengaluru, Karnataka, India"
        },
        {
          name: "Technical Program Manager",
          location: "Location: Bengaluru, Karnataka, India"
        }
      ]
    },
    {
      category: "Solutions",
      jobs: [
        {
          name: "Associate/ Sr. Associate, Pre Sales (Solutions)",
          location: "Location: Bengaluru, Karnataka, India"
        }
      ]
    },
    {
      category: "Strategy",
      jobs: [
        {
          name: "Razorpay Capital - Sales Manager",
          location: "Location: Bangalore"
        }
      ]
    },
    {
      category: "Test Automation",
      jobs: [
        {
          name: "Performance Test Engineer",
          location: "Location: Bengaluru, Karnataka, India"
        }
      ]
    }
  ];
  jobCategory.map(el => {
    categories.push(
      <div className="col-md-2 mx-5 mb-3">
        <Card category = {el.category} numVacancy = {el.jobs.length}></Card>
      </div>
    );
  });
  return <div className="row mt-5">{categories}</div>;
}

export default App;
