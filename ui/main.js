console.log('Loaded!');
var x=0;
var element = document.getElementById('img');
var marginleft=0;
function moveright()
{
    marginleft=marginleft+10;
    img.style.marginLeft=marginleft+'px';
}
img.onclick=function(){
   var interval=setInterval(moveright,10);
}