console.log('Loaded!');


//change the text on main-text div

var element = document.getElementById('main-text');

element.innerHTML = 'this is changed text, a change made by javascript.';

//move the image

var img = document.getElementById('madi');

img.onclick = function(){
 img.style.marginLeft = '100px';   
};