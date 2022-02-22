const express = require("express");
const https = require("https");

const app = express();
const port = 3000;
const url = "https://api.openweathermap.org/data/2.5/weather?q=south%20jordan&appid=99b3c4f2f1e19aa02ffa6ecbb039b498&units=imperial"

app.get("/", function (req, res) {
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {

      const weatherData = JSON.parse(data);
      
    //   console.log(weatherData);

      const temp = weatherData.main.temp;
      console.log("The temperature in South Jordan is " + temp);
    });
  });

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
