let wordInput = document.getElementById('wordInput');
let pMessage = document.getElementById('pMessage');
const button = document.getElementById('button');

function reverseStr(wordInput){
    let x= wordInput.split('').reverse().join('')
    return x;
}
button.addEventListener('click', function(event){
    event.preventDefault();
    // let pCheck = false;
    if (reverseStr(wordInput.value) == wordInput.value){
        pMessage.innerHTML = `This is a palindrome`;
    }
    else{
        pMessage.innerHTML = `This is <b>NOT</b> a palindrome`
    }
})
console.log(wordInput);