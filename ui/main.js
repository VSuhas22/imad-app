console.log('Loaded!');
var x=0;
var element = document.getElementById('img');
var element = document.getElementById('text');
var marginleft=0;
var y=0;
function moveright()
{
    if(marginleft==1000)
    y=1;
    else if(y==1&& marginleft==-1000)
    y=0;
    if(y===0)
    {
    marginleft=marginleft+10;
    img.style.marginLeft=marginleft+'px';
    }
    else
    {
        marginleft=marginleft-10;
        img.style.marginLeft=marginleft+'px';
    }
}
var s=0;
img.onclick=function(){
   setInterval(moveright,10);
   s=s+1;
   text.innerHTML="Score: "+s;
}