function addition () {
    firstNum = Number(document.getElementById("first-number").value);
    secondNum = Number(document.getElementById("second-number").value);
    if (isNaN(firstNum) || 
        isNaN(secondNum) || 
        document.getElementById("first-number").value === "" || 
        document.getElementById("second-number").value === "") 
    {
        document.getElementById("output").innerHTML = "please enter 2 numbers";
    } else {
        result = firstNum + secondNum;
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "white";
        }
        document.getElementById("output").innerHTML = result;
    }
}

function subtraction () {
    firstNum = Number(document.getElementById("first-number").value);
    secondNum = Number(document.getElementById("second-number").value);
    if (isNaN(firstNum) || 
        isNaN(secondNum) || 
        document.getElementById("first-number").value === "" || 
        document.getElementById("second-number").value === "") 
    {
        document.getElementById("output").innerHTML = "please enter 2 numbers";
    } else {
        result = firstNum - secondNum;
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "white";
        }
        document.getElementById("output").innerHTML = result;        
    }
}

function multiplication () {
    firstNum = Number(document.getElementById("first-number").value);
    secondNum = Number(document.getElementById("second-number").value);
    if (isNaN(firstNum) || 
        isNaN(secondNum) || 
        document.getElementById("first-number").value === "" || 
        document.getElementById("second-number").value === "") 
    {
        document.getElementById("output").innerHTML = "please enter 2 numbers";
    } else {
        result = firstNum * secondNum;
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "white";
        }
        document.getElementById("output").innerHTML = result;
    }
}

function division () {
    firstNum = Number(document.getElementById("first-number").value);
    secondNum = Number(document.getElementById("second-number").value);
    if (isNaN(firstNum) || 
        isNaN(secondNum) || 
        document.getElementById("first-number").value === "" || 
        document.getElementById("second-number").value === "") 
    {
        document.getElementById("output").innerHTML = "please enter 2 numbers";
    } else {
        result = firstNum / secondNum;
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "white";
        }
        document.getElementById("output").innerHTML = result;
    }
}

function power () { 
    firstNum = Number(document.getElementById("first-number").value);
    secondNum = Number(document.getElementById("second-number").value);
    if (isNaN(firstNum) || 
        isNaN(secondNum) || 
        document.getElementById("first-number").value === "" || 
        document.getElementById("second-number").value === "") 
    {
        document.getElementById("output").innerHTML = "please enter 2 numbers";
    } else {
        result = 1;
        for (i = 0; i < Math.abs(secondNum); i++) {
            result *= firstNum;
        }
        if (secondNum < 0) {
            result = 1 / result;
        }
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "white";
        }
        document.getElementById("output").innerHTML = result;
    }
}

function clearContent () {
    document.getElementById("output").innerHTML = "";
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
}