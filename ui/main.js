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
    
    while(marginLeft > 100){
        //marginLeft = 0;
        marginRight = marginRight + 1;
        img.style.marginRight = marginRight + 'px' ;
        
    }
}


img.onclick = function(){
 var interval = setInterval(moveRight, 50);
 //img.style.marginLeft = '100px';   
};