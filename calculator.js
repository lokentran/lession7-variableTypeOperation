
function calculator(operator) {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    switch (operator) {
        case "+":
              operResult = a + b; 
                break;   
        case "-":
             operResult = a - b; 
                break;   
         case "*":
               operResult = a * b; 
                break;   
        case "/":
              operResult = a / b; 
                break;  
            
        }
        document.getElementById('expression').innerHTML =  a + operator + b + " = "  ;
        document.getElementById('endResult').innerHTML =  operResult ; 
}