const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://razorpay.com/jobs/", { timeout: 0, waitUntil: "networkidle0" });

    const text = await page.evaluate(() =>
      Array.from(document.querySelectorAll("div.rbox-jobs-group")).map(el => {
        let arr = [];
        for (let j = 1; j < el.childNodes.length; j++) {
          arr.push({
            name: el.childNodes[j].querySelector("a").innerText,
            location: el.childNodes[j].querySelector(".rbox-job-shortdesc")
              .innerText
          });
        }
        var obj = {
          category: el.childNodes[0].innerText,
          jobs: arr
        };
        return obj;
      })
    );
    await browser.close();
    return res.send(text);
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
