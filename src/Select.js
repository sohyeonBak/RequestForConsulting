let $select01 = document.querySelector('.select01');
let $select02 = document.querySelector('.select02');
let $select03 = document.querySelector('.select03');
let $select04 = document.querySelector('.select04');
let $select05 = document.querySelector('.select05');
let $consultList = document.querySelector('.consult-list');
let $after = document.querySelector('.after');
let $before = document.querySelector('.before');



$select01.addEventListener('click', (e)=>{
    e.preventDefault();
    $select01.classList.toggle('show');
})

$select02.addEventListener('click', (e)=>{
    e.preventDefault()
    $select02.classList.toggle('show');
})

$select03.addEventListener('click', (e)=>{
    e.preventDefault()
    $select03.classList.toggle('show');
})

$select04.addEventListener('click', (e)=>{
    e.preventDefault()
    $select04.classList.toggle('show');
    $select05.disabled =false;
    $select05.placeholder ='';
})


$after.addEventListener('click', (e)=>{
    
    $after.classList.add('show');
    $before.classList.remove('show');
})

$before.addEventListener('click', (e)=>{
    
    $before.classList.add('show');
    $after.classList.remove('show');
})