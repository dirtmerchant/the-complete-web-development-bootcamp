# DOM

## Anonymous function

```
$0.addEventListener("click", function() { alert("I got clicked"); });
```

## Named function

```
$0.addEventListener("click", respondToClick);

function respondToClick() {
    alert("I got clicked");
}
```

##  Higher Order function


```
$0.addEventListener("", respondToClick);

function respondToClick() {
    alert("I got clicked");
}
```

## Higher Order Function - Calculator

```
function calculator(num1,num2) {
    return num1 + num2;
}
calculator(1,3)
```

```
function add(num1,num2) {
    return num1 + num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}
```

### Objects

var houseKepper1 = {
    yearsOfExperience: 12, 
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

### Constructor Function

function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

### Initialize Object

var bellBoy1 = new BellBoy("Timmy" 19.true, ["French", "English"]);

function HouseKeeper (name, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper ("Rosy", 20, ["bathroom", "lobby", "bedroom"])


function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function () {
        alert("may I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}


function HouseKeeper (name, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire; 
    this.clean = function () {
        alert("Cleaning in progress...");
    }
}


## Callback Function

document.addEventListener("keypress", respondToKey(event));

function respondToKey(event){
    console.log("Key Pressed.");
}

$0.addEventListener("click", function(event) {
    console.log(event);
});


## Higher Order Function


##

JQuery

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="index.js" async defer></script>

$(document).ready(function () {
  console.log($("h1").css("font-size"));
});

## set value 
$(document).ready(function () {
  $("h1").css("color", "green");
});

## get value

$(document).ready(function () {
  console.log($("h1").css("font-size"));
});

## Separation of concerns

$(document).ready(function () {
  $("h1").addClass("big-title");
});

## Multiple classes

$(document).ready(function () {
  $("h1").addClass("big-title margin-50");
});


$(document).ready(function () {
  $("h1").hasClass("margin-50");
});


## API

curl -X GET https://api.openweathermap.org/data/2.5/weather?appid={}&q=south jordan -H "Accept: application/json" 

curl -X GET https://api.openweathermap.org/data/2.5/weather\?appid\=\{\}\&q\=south\ jordan -H      "Accept: application/json" | json_pp




