function calculate(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById("operator").value.trim();
    let result;
    if (operator == "+"){
        result = num1 + num2;
    }
    else if (operator == "-"){
        result = num1 - num2;
    }
    else if (operator == "*"){
        result = num1 * num2;
        document.getElementById('result').textContent = result;
    }
    else if (operator === "/") {
        if (num2 === 0) {
          result = "Cannot divide by zero!";
        } else {
          result = num1 / num2;
        }
    } 
    else {
        result = "Invalid operator. Use +, -, *, or /.";
      }
    
    document.getElementById('result').textContent = "Result: " + result;
}