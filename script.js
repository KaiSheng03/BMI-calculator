function calculateBMI(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";

    let BMI = weight/(Math.pow(height, 2));
    let results;
    if(BMI < 18.5){
        results = "Underweight";
    }
    else if(BMI>= 18.5 && BMI<24.9){
        results = "Normal weight";
    }
    else if(BMI>= 25 && BMI<29.9){
        results = "Overweight";
    }
    else if(BMI>= 30){
        results = "Obesity";
    }

    document.getElementById("bmi-display").innerHTML = "BMI: " + BMI;
    document.getElementById("bmi-check").innerHTML = results;
}

addEventListener("keypress",function(event){
    if(event.key == 'Enter'){
        document.getElementById("enter").click();
    }
});

