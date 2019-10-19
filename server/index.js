const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/getJobCategories", (req, res) => {
  (async () => {
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();

    await page.goto("https://razorpay.com/jobs/", {
      timeout: 0,
      waitUntil: "networkidle0"
    });

    const text = await page.evaluate(() =>
      Array.from(document.querySelectorAll("div.rbox-jobs-group")).map(el => {
        let obj = {
          category: el.childNodes[0].innerText,
          NumVancanies: el.childNodes.length - 1
        };
        return obj;
      })
    );
    await browser.close();
    return res.send(text);
  })();
});

app.post("/getJobDetailsByCategory", (req, res) => {
  console.log(req.body);
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://razorpay.com/jobs/", {
      timeout: 0,
      waitUntil: "networkidle0"
    });
    let jobCategory = req.body.jobCategory;
    const JobDetail = await page.evaluate(jobCategory => {
      let jobs = [];
      Array.from(document.querySelectorAll("div.rbox-jobs-group"))
        .filter(element => element.childNodes[0].innerText == jobCategory)
        .map(el => {
          for (let j = 1; j < el.childNodes.length; j++) {
            jobs.push({
              name: el.childNodes[j].querySelector("a").innerText,
              location: el.childNodes[j].querySelector(".rbox-job-shortdesc")
                .innerText
            });
          }
        });
      return jobs;
    }, jobCategory);
    await browser.close();
    return res.send(JobDetail);
  })();
});

/**
 * Start Node Server
 */
app.listen(config.port, () => {
  console.log("Server started on port: " + config.port);
});

app.use("/*", (req, res) => {
  res.status(403).end("Not Found");
});
