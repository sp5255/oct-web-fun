let expression = document.getElementById('expression');

let buttons = document.getElementsByClassName('btns');

const isOperator = (string) => {
    if(string == '+' || string == '-' || string == '/' || string =='x')
    return true;
return false
}

const evaluate = (n1, op , n2) => {
    switch(op){
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case 'x':
            return n1 * n2;
        case '/':
            return n1 / n2;
        default:
            return null;
    }
}

const operators = new Array();
const digits = new Array();

for(let i = 0; i< buttons.length; i++){    
    buttons[i].addEventListener('click', (event) => {
        const btn_value = event.target.dataset.value  
        if(btn_value === '='){
            expression.value = eval(expression.value);
        }
        else
            expression.value += btn_value;      
        // if(isOperator(btn_value) && operators.length == digits.length)
        //     return;
       /*  if(isOperator(btn_value))  {
            operators.push(btn_value)    
            digits.push(expression.value);
        } 
        else if(btn_value === '=')       {
            let result = 0;
            while(operators.length > 0 ){
                result = evaluate(Number(digits.pop()) , operators.pop(), Number(digits.pop())) ;                
                digits.push(result) ;
            }
            eva

            expression.value = digits.pop();
        } */

    })
}

let clearAll = document.getElementById('clearAll');
clearAll.addEventListener('click', () => {
    expression.value = "";
})

// function sum(a, b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;    
// }

// function mult(a,b){
//     return a*b;
// }

// function div(a,b){
//     return a/b;
// }


/* const maxItem = (arr) => {
    let max = 0;
    arr.forEach(el => {
        if(el > max)
            max = el;
    })
    return max;
}
//arr = [3,2,53,6,7]
console.log(maxItem(arr)); */