import inquirer from "inquirer";
let input1 = await inquirer.prompt([
    { name: "weight",
        type: "number",
        message: "Enter your weight in kgs"
    }
]);
let input2 = await inquirer.prompt([
    { name: "height",
        type: "number",
        message: "Enter you height in meters"
    }
]);
let bmi = input1.weight / (input1.weight * input2.height);
console.log(`Your BMI is ${bmi}`);
