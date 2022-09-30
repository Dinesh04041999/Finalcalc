let re, ope, lasnum;
let allreg = new RegExp(/^[0-9 \-+/*%√ .Π^()\  ]+$/)
let num = new RegExp(/^[0-9]+$/)
let opp = new RegExp(/^[\-+/*%^().Π√\  ]+$/)
//keyboard event

document.addEventListener("keydown", function (event) {
    //when the user enter the input and gives enter in Numpadenter or enter it move to the solve function
    if (event.code === "NumpadEnter" || event.code === "Enter") {

        let inputbox = document.getElementById("input").value;
        //input field have mod perform mod operation
        if (inputbox.includes("mod")) {
            modulus();
        }
        //input field have arithmatic operation perform arithmatic operation
        else if (inputbox.includes("+") || inputbox.includes("*") || inputbox.includes("/") || inputbox.includes("^") || inputbox.includes("-") || inputbox.includes("Π") || inputbox.includes("%") || inputbox.includes("√")) {
            split = inputbox.match(/[^\d()]+|[\d.]+/g);//split the numbers
            // alert(split)
            n = split.length;
            lasnum = (split[n - 1])
            op = (split[n - 2])

            //split the value for root function
            let root = inputbox.split("√").sort()
            let rolen = root.length
            rootnum = root.length - 1;
            rootnumber = root[rolen - 1]
            solve(input.value);

        }

        //repeated operation
        else {
            a = parseInt(re);
            b = parseInt(lasnum);
            let rresult = calculation(re, op, b)//function call
            repeat(rresult, re, op, lasnum);
            re = rresult;
        }
    }
    // enter the value in input field using KEYBOARD

    let inputbox = document.getElementById("input").value;
    let pressedKey = event.key;
   
    if (pressedKey.match(allreg)) {
        //input field empty
        if (re == "") {
            document.getElementById("input").value += pressedKey;

        }
        //input field not empty add operator
        if ((re != "") && (pressedKey.match(opp))) {
    
            document.getElementById("input").value += pressedKey;
        
            // alert("op")
        
        }
      
        //input field not empty and add operator and number
        else if ((re != "") && ((pressedKey.match(num))) && ((inputbox.includes("+") || (inputbox.includes("*")) || (inputbox.includes("-")) || (inputbox.includes("/"))))) {
          
            document.getElementById("input").value += pressedKey;
           
            // alert("num,op")
        }



        //input field not empty and add number
        else if ((re != "") && ((pressedKey.match(num)))) {
            //input field clear condition
            if (inputbox.includes(re) == true) {
                // alert("clear")
               
                document.getElementById("input").value = pressedKey;
            }
            //concat the operator and number
            else {
                document.getElementById("input").value += pressedKey;
            }
        }
    }
    //remove the value
    if (event.code === "Backspace") {
        delet();
    }
});



// enter the value in input field using MOUSE
function display(val) {

    let inputbox = document.getElementById("input").value;
  
   let click=val;

    if (click.match(allreg)) {
        if (re == "") {
            document.getElementById("input").value += click;

        }
        //input field not empty add operator
        if ((re != "") && (click.match(opp))) {
    
            document.getElementById("input").value += click;
        
        }
      
        //input field not empty and add operator and number
        else if ((re != "") && ((click.match(num))) && ((inputbox.includes("+") || (inputbox.includes("*")) || (inputbox.includes("-")) || (inputbox.includes("/"))))) {
          
            document.getElementById("input").value += click;
           
            // alert("num,op")
        }
        //input field not empty and add number
        else if ((re != "") && ((click.match(num)))) {
            //input field clear condition
            if (inputbox.includes(re) == true) {
                // alert("clear")
               
                document.getElementById("input").value = click;
            }
            //concat the operator and number
            else {
                document.getElementById("input").value += click;
            }
        }
    }
}
//modulus operation(mod)
function modulus() {

    inputbox = document.getElementById("input").value;
    split = inputbox.match(/[^\d()]+|[\d.]+/g);  //split the input field (3,mod,1)
    n = split.length;
    las = (split[n - 1])
    first = (split[n - 3])
    op = "%"
    rresult = calculation(first, op, las)
    operm = "mod"
    repeat(rresult, first, operm, las)   //repeat function call to append the value
    re = rresult;

}
//delete function
function delet() {
    input.value = input.value.substr(0, input.value.length - 1);
}

//perform calculation
function calculation(a, op, b) {
    const oper = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        'per': (a, b) => ((a * 100) / b),
        '^': (a, b) => (Math.pow(a, (b || 2))),
        'Π': (a, b) => (a * (b = Math.PI)),

        //a=length of root b=number
        '√': (a, b) => {
            let srot = 0;
            for (i = 0; i < a; i++) {
                if (srot != 0) {
                    srot = Math.sqrt(srot);
               } 
               else {
                    srot = Math.sqrt(b);
                }
            }
            return srot;
        }
    }
    return oper[op](a, b)
}

//onclick function
function dis(valu) {
    document.getElementById("input").value += valu;
}

//equal to symble click to perform a solve operation
function equal(value) {

    let inputbox = document.getElementById("input").value;
    //input field have mod perform mod operation
    if (inputbox.includes("mod")) {
        modulus();
    }
    //input field have arithmatic operation perform arithmatic operation
    else if (inputbox.includes("+") || inputbox.includes("*") || inputbox.includes("/") || inputbox.includes("^") || inputbox.includes("-") || inputbox.includes("Π") || inputbox.includes("%") || inputbox.includes("√")) {
        split = inputbox.match(/[^\d()]+|[\d.]+/g);//split the numbers
        // alert(split)
        n = split.length;
        lasnum = (split[n - 1])
        op = (split[n - 2])

        //split the value for root function
        let root = inputbox.split("√").sort()
        let rolen = root.length
        rootnum = root.length - 1;
        rootnumber = root[rolen - 1]
        solve(value);
    }
    //repeated operation
    else {
        a = parseInt(re);
        b = parseInt(lasnum);
        let rresult = calculation(re, op, b)
        repeat(rresult, re, op, lasnum);
        re = rresult;
    }
}



function solve(equation) {
    var brackets = []
    var operators = []
    var operands = []
    var operandString = ""

    for (var index = 0, operatorIndex = 0, bracketIndex = 0; index < equation.length; index++) {
        console.log(equation.charAt(index))
        // Checking for operators
        if (equation.charAt(index) == '+'
            || equation.charAt(index) == '-'
            || equation.charAt(index) == '*'
            || equation.charAt(index) == '/'
            || equation.charAt(index) == '%'
            || equation.charAt(index) == '^'
            || equation.charAt(index) == '√'
            || equation.charAt(index) == 'Π') {
                // alert("hai")

            // (a+b)+(c+d) 
            if (equation.charAt(index - 1) == ')' && equation.charAt(index + 1) == '(') {
                console.log("in");
                // alert("inn")
                operators[operatorIndex++] = "*"
                brackets[bracketIndex++] = null
                brackets[bracketIndex++] = null
                operators[operatorIndex++] = equation.charAt(index)
                operandString += " 1 "

            }
            // Fetching operators and storing into operators[] array
            else {
                operators[operatorIndex++] = equation.charAt(index)
                // alert("operator")
                brackets[bracketIndex++] = null
                operandString += " "
            }
        }


        // Fetching brackets and storing into brackets[] array
        else if (equation.charAt(index) == '(' || equation.charAt(index) == ')') {
            // alert("bracket")
            console.log("bracket");
            brackets[bracketIndex++] = equation.charAt(index)
            operators[operatorIndex++] =null
           
           
        }
        // Fetching operand digits and storing into operandString
        else {
            operandString += equation.charAt(index)
            // alert(operandString)            //separate the number (5,1,5)
        }
    }


    // Temp array of operands for further processing
    // before storing operands into operands[] array
    operandsTemp = operandString.split(" ")
    console.log(operandsTemp);

    // Storing operands into operands[] array
    for (var index = 0, indexOperand = 0; index < operators.length; index++) {
        if (brackets[index] == null) {
            operands[index] = Number(operandsTemp[indexOperand++])
            //    console.log(operands[index]
        }
        else {
            operands[index] = null

        }
    }


    operands[operands.length] = Number(operandsTemp[indexOperand])
    console.log(brackets)
    console.log(operators)
    console.log(operands)


    // Checking if brackets are present in the equation or not
    if (brackets.length > 0) {
        for (var index = 0; index < brackets.length; index++) {
            if (brackets[index] == ')') {
                
                var indexBracketEnd = index
                for (var indexBracket = indexBracketEnd; indexBracket >= 0; indexBracket--) {
                    if (brackets[indexBracket] == '(') {
                        var indexBracketStart = indexBracket
                        evaluate(indexBracketStart, indexBracketEnd, operators, operands)//function call only have brackets
                        brackets[indexBracketStart] = null
                        brackets[indexBracketEnd] = null
                        break
                    }
                }
                console.log(brackets)
            }
        }
    }
    // This will evaluate remaining equation (without brackets)after processing brackets (if available)
    // alert(operators.length)   //1
    // alert(operators)          //*
    // alert(operands)             //5,15
    finalResult = evaluate(0, operators.length, operators, operands)

    // FINAL RESULT
    console.log(`FINAL RESULT = ${finalResult}`)
    apval = input.value;

   
    append(apval,finalResult);//append function call
}


// Evaluation of equation by using BOAD MASS method
function evaluate(indexStart, indexEnd, operators, operands) {
    // First evaluating MULTIPLICATION and DIVISION
    for (var index = indexStart; index< indexEnd; index++) {
        var indexFirstOperand = index
        var indexNextOperand = index + 1
        var indexNextOperator = index
        if (operators[indexNextOperator] == null) {
            for (var indexNext = indexNextOperator + 1; indexNext < operators.length; indexNext++) {
                if (operators[indexNext] != null) {
                    indexNextOperator = indexNext
                    indexFirstOperand = indexNext
                    indexNextOperand = indexNext + 1
                    index = indexNext - 1
                    break
                }
            }
        }
        if (operands[indexNextOperand] == null) {
            for (var indexNext = indexNextOperand + 1; indexNext < operands.length; indexNext++) {
                if (operands[indexNext] != null) {
                    indexNextOperand = indexNext
                    index = indexNext - 1
                    break
                }
            }
        }
        // MULTIPLICATION
        if (operators[indexNextOperator] == '*') {
            result = calculation(operands[indexFirstOperand], operators[indexNextOperator], operands[indexNextOperand]);
            operands[indexNextOperand] = result
            operands[indexFirstOperand] = null
            operators[indexNextOperator] = null
            finalResult = result
            result = 0
            console.log(operands)
            console.log(operators)
        }
        // DIVISION
        if (operators[indexNextOperator] == '/') {
            result = calculation(operands[indexFirstOperand], operators[indexNextOperator], operands[indexNextOperand]);
            operands[indexNextOperand] = result
            operands[indexFirstOperand] = null
            operators[indexNextOperator] = null
            finalResult = result
            result = 0
            console.log(operands)
            console.log(operators)
        }
    }
    // Next evaluating ADDITION and SUBSTRACTION
    for (var index = indexStart; index < indexEnd; index++) {
        var indexFirstOperand = index
        var indexNextOperand = index + 1
        var indexNextOperator = index
        if (operators[indexNextOperator] == null) {
            for (var indexNext = indexNextOperator + 1; indexNext < operators.length; indexNext++) {
                if (operators[indexNext] != null) {
                    indexNextOperator = indexNext
                    indexFirstOperand = indexNext
                    indexNextOperand = indexNext + 1
                    index = indexNext - 1
                    break
                }
            }
        }
        if (operands[indexNextOperand] == null) {
            for (var indexNext = indexNextOperand + 1; indexNext < operands.length; indexNext++) {
                if (operands[indexNext] != null) {
                    indexNextOperand = indexNext
                    index = indexNext - 1
                    break
                }
            }
        }
        // ADDITION
        if (operators[indexNextOperator] == '+') {
            result = calculation(operands[indexFirstOperand], operators[indexNextOperator], operands[indexNextOperand]);
            operands[indexNextOperand] = result
            operands[indexFirstOperand] = null
            operators[indexNextOperator] = null
            finalResult = result
            result = 0
            console.log(operands)
            console.log(operators)
        }
        // SUBSTRACTION
        if (operators[indexNextOperator] == '-') {
            result = calculation(operands[indexFirstOperand], operators[indexNextOperator], operands[indexNextOperand]);
            operands[indexNextOperand] = result
            operands[indexFirstOperand] = null
            operators[indexNextOperator] = null
            finalResult = result
            result = 0
            console.log(operands)
            console.log(operators)
        }
    }
    // Next evaluating SQUARE & //PI
    for (var index = indexStart; index < indexEnd; index++) {

        var indexFirstOperand = index
        var indexNextOperand = index + 1
        var indexNextOperator = index
        if (operators[indexNextOperator] == null) {
            for (var indexNext = indexNextOperator + 1; indexNext < operators.length; indexNext++) {
                if (operators[indexNext] != null) {
                    indexNextOperator = indexNext
                    indexFirstOperand = indexNext
                    indexNextOperand = indexNext + 1
                    index = indexNext - 1
                    break
                }
            }
        }
        if (operands[indexNextOperand] == null) {
            for (var indexNext = indexNextOperand + 1; indexNext < operands.length; indexNext++) {
                if (operands[indexNext] != null) {
                    indexNextOperand = indexNext
                    index = indexNext - 1
                    break
                }
            }
        }
        // SQUARE
        if (operators[indexNextOperator] == '^') {
            result = calculation(operands[indexFirstOperand], operators[indexNextOperator], operands[indexNextOperand]);
            operands[indexNextOperand] = result
            operands[indexFirstOperand] = null
            operators[indexNextOperator] = null
            finalResult = result
            result = 0
        }
        //PI
        if (operators[indexNextOperator] == 'Π') {
            result = calculation(operands[indexFirstOperand], operators[indexNextOperator], operands[indexNextOperand]);
            operands[indexNextOperand] = result
            operands[indexFirstOperand] = null
            operators[indexNextOperator] = null
            finalResult = result
            result = 0
        }
        //ROOT
        if (operators[indexNextOperator] == '√') {
            operands[indexFirstOperand] = rootnum;
            operands[indexNextOperand] = rootnumber;

            result = calculation(operands[indexFirstOperand], operators[indexNextOperator], operands[indexNextOperand]);
            operands[indexNextOperand] = result
            operands[indexFirstOperand] = null
            operators[indexNextOperator] = null
            finalResult = result
            result = 0
        }
        //PERCENTAGE
        if (operators[indexNextOperator] == '%') {

            operators[indexNextOperator] = "per"
            result = calculation(operands[indexFirstOperand], operators[indexNextOperator], operands[indexNextOperand]);

            operands[indexNextOperand] = result
            operands[indexFirstOperand] = null
            operators[indexNextOperator] = null
            finalResult = result
            result = 0
        }
    }
    return finalResult
}
// repeat exponential operation
function repeat(rresult, re, op, lasnum) {
    b = parseInt(lasnum);
    length = rresult.toString().length;
    //result in power
    if (length > 9) {
        const num = rresult;
        const numInSciNot = {};
        [numInSciNot.coefficient, numInSciNot.exponent] =
            num.toExponential(9).split('e').map(item => Number(item));
        final = (`${numInSciNot.coefficient} x 10${sclass(`${numInSciNot.exponent}`)}`);
         append(`${re}${op}${lasnum}`,final);//append function call

    }
    else {
        
        append(`${re}${op}${lasnum}`,rresult);//append function call
    }
}

//function for append value in li
function append(apval,finalResult){
    listnode = document.getElementById('list');
    linode = document.createElement("li");
    linode.innerHTML = `<span style="float:left;margin-left:20px" >${apval}</span> </span><span style="text-align: center">=</span><span style="float: right;margin-right:20px">${finalResult}</span>`;
    listnode.appendChild(linode);
    document.getElementById("input").value = finalResult;
    re = finalResult;

}
//assign 10 power value
function sclass(s) {
    var chars = '0123456789',
        sup = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    var str = '',
        size = s;

    for (var i = 0; i < size.length; i++) {
        var n = chars.indexOf(size[i]);
        str += (n != -1 ? sup[n] : size[i]);
    }
    return str;

}