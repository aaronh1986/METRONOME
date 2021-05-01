let input = document.getElementById('bpm');
input.focus();

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

plus.addEventListener('click', function(){
    input.value = parseInt(input.value) + 1;
})

minus.addEventListener('click', function(){
    input.value = parseInt(input.value) - 1;
})

