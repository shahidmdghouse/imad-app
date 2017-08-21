console.log('Loaded!');


//change the text on main-text div

var element = document.getElementById('main-text');

element.innerHTML = 'this is changed text, a change made by javascript.';

//move the image

var img = document.getElementById('madi');

function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px' ; 
}

img.onclick = function(){
 var interval = setInterval(moveRight, 100);
 //img.style.marginLeft = '100px';   
};