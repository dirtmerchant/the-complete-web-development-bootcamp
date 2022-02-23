const express = require("express");
const https = require("https");

const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res){
    console.log(req.body.cityName)
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
    const query = req.body.cityName
    const apiKey = "$API"
    const unit = "imperial"

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit
    console.log(url)
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {

            const weatherData = JSON.parse(data);

            console.log(weatherData);

            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.write("<h1>The temperature in " + query + " is " + temp + "</h1>")
            res.write("<h1> The weather calls for " + weatherDescription + "</h1>")
            res.write("<img src=" + imageUrl + ">")
            res.send()

        });

    });
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
