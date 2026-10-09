```javascript
function calculateBMI() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    if (weight <= 0 || height <= 0) {
        document.getElementById("result").textContent =
            "Please enter valid values.";
        document.getElementById("category").textContent = "";
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);

    document.getElementById("result").textContent =
        "Your BMI: " + bmi.toFixed(2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal range";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity range";
    }

    document.getElementById("category").textContent =
        "Category: " + category;
}
```
