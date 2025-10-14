let wordInput = document.getElementById('wordInput');
let message = document.getElementById('message');
const button = document.getElementById('checker');
let set = new Set();
function uniqueCharacterCounter(wordInput){
    for (let i = 0; i < wordInput.length; i++){
        set.add(wordInput[i]);
    }
    return set.size;
}

button.addEventListener('click', function(event){
    event.preventDefault();
    let count = uniqueCharacterCounter(wordInput.value);
    message.innerHTML = `Number of unique characters = ${count}`;

    
})