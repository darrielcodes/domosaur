// Warmup Challenges

// 1.
let span1 = document.querySelector('.mess-with-me');
span1.style.fontSize = '40px';

// 2.
let pMessWithMe = document.querySelector('p.mess-with-me'); // to get tag wo=ith specific class ==> tagName.className
pMessWithMe.style.backgroundColor = 'green';

// 3.
let img2 = document.querySelector('#hide-me');
img2.style.display = 'none';

// 4.
let img1 = document.querySelector('#triceratops');
img1.style.width = '324px';

// Event Listener Challenges

// 1.
span1.addEventListener('click', function(){
    span1.style.color = 'orange';
});

// 2.
img1.addEventListener('click', function(){
    img1.style.border = '2px solid red';
});

// 3.
let feathered = document.querySelector('#feathers');

feathered.addEventListener('click', function(){
    feathered.style.opacity = '0.5';
});

// 4.
let buttonColor = document.querySelector('#toggle');
let dinos = document.querySelector('#row');
let backgroundToggle = false;

buttonColor.addEventListener('click', function(){
    if (dinos.style.backgroundColor === ""){
    dinos.style.backgroundColor = 'red'}
    else {
        dinos.style.backgroundColor = "";
    }
    //OR:  if (backgroundToggle === false){
    //     backgroundToggle = true;
    //     dinos.style.backgroundColor = 'red'
    // } else if(backgroundToggle === true){
    //     backgroundToggle = false;
    //     dinos.style.backgroundColor = ""
    // }
})




// 5.
let bigDino = document.querySelector('#biggify');

bigDino.addEventListener('mouseenter', function(){
    bigDino.style.width = '200px'
})

bigDino.addEventListener('mouseleave', function(){
    bigDino.style.width = '162px'
})

