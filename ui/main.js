console.log('Loaded!');
var x=0;
var img = document.getElementById('img');
var text = document.getElementById('text');
var butt = document.getElementById('butt');
var coun = document.getElementById('coun');
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
};


butt.onclick=function(){
    var request= new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                coun.innerHTML=counter;
            }
        }
    }
    
    request.open('GET','http://saisuhasvemuri.imad.hasura-app.io/counter',true);
    request.send(null);
};