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
/*
 get all categories from razor pay company website
 */
app.get("/getJobCategories", (req, res) => {
  (async () => {
    /*
     launch instance of chromium via pupeteer and create a page object
    */
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    /*
      use the goto api to navigate to requested url 
    */
    await page.goto(config.companyJobSiteUrl, {
      timeout: 0,
      waitUntil: "networkidle0"
    });
    /*
        crawl across the web page
    */
    const text = await page.evaluate(() =>
      /*
         get all category name and the no of jobs corresponding to them
     */
      Array.from(document.querySelectorAll("div.rbox-jobs-group")).map(el => {
        let obj = {
          category: el.childNodes[0].innerText,
          NumVancanies: el.childNodes.length - 1
        };
        return obj;
      })
    );
    /* 
      Close instance of browser 
    */
    await browser.close();
    /* 
      return response to the client for render
    */
    return res.send(text);
  })();
});

/*
 get all jobs corresponding to a category from razor pay company website
 */
app.post("/getJobDetailsByCategory", (req, res) => {
  (async () => {
    /*
      get category name corresponding to which jobs have to be found
    */
    let jobCategory = req.body.jobCategory;

    if (jobCategory != null) {
      const browser = await puppeteer.launch();

      const page = await browser.newPage();
      /*
     launch instance of chromium via pupeteer and create a page object
    */
      await page.goto(config.companyJobSiteUrl, {
        timeout: 0,
        waitUntil: "networkidle0"
      });

      /*
      crawl across the web page
    */
      const JobDetail = await page.evaluate(jobCategory => {
        let jobs = [];
        /*
      get title and location of a particular job category
    */
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
      /*
    close instance of browser
    */
      await browser.close();
      /*
    return requested object to client
    */
      return res.send(JobDetail);
    }
    return res.end();
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
