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