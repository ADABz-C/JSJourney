let operation = document.getElementsByClassName('operationDisplay');
let ans = 0;
 
document.addEventListener('keydown', (event) =>{
    const userinput = document.getElementById('userInput');

    const result = document.getElementsByClassName('resultDisplay');
    userinput.value += event.key;
    if (event.key === 'Backspace' || event.key === 'Delete'){
        userinput.value = '';
    }
    else if (event.key === 'Enter'){
        ans = eval(userinput.value);
    }

    result.innerHTML = `${ans}`
})