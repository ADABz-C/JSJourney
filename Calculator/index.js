let operation = document.getElementById('operationDisplay');
let ans = 0;
 
document.addEventListener('keydown', (event) =>{
    const userinput = document.getElementById('userInput');

    const result = document.getElementById('resultDisplay');
    
    if (event.key === 'Backspace' || event.key === 'Delete'){
        userinput.value = '';
    }
    else if (event.key === 'Enter'){
        try{
            ans = eval(userinput.value);
            
            result.innerHTML = ans;
            userinput.value = '';
        }
        catch{
            result.innerHTML = 'Error';
            userinput.value = '';
        }
    }
    // else if (event.key != typeof(ans)|| event.key == '+'|| event.key == '-'|| event.key == '/'|| event.key == '*'){
    //     //ignore input
    // }
    else{
        userinput.value += event.key;
    }

    // result.innerHTML = `${ans}`
})