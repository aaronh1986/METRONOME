let adjustBpm = document.getElementById('bpm');
adjustBpm.defaultValue = 50;
adjustBpm.focus();

const selfInput = document.getElementById('bpm').innerHTML;

let plus = document.getElementById('plus');

plus.addEventListener('click', function(){
    parseInt(selfInput += 1)
})







