console.log('Loaded!');


//change the text on main-text div

var element = document.getElementById('main-text');

element.innerHTML = 'this is changed text, a change made by javascript.';

//move the image

var img = document.getElementById('madi');
var marginLeft = 0;
var marginRight = 0;

function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px' ; 
    
    if(marginLeft == 100){
        moveLeft();
    }
}

function moveLeft(){
    
    while( marginRight != 100 ){
        marginRight = marginRight + 5;
        img.style.marginRight = marginRight + 'px' ;
    }
    
}



img.onclick = function(){
 var interval = setInterval(moveRight, 50);
 //img.style.marginLeft = '100px';   
};