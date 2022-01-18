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