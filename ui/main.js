console.log('Loaded!');
var x=0;
var element = document.getElementById('img');
img.onclick=function(){
    if(x===0)
    {
    img.style.marginLeft='100px';
    x=1;
    }
    else if(x==1)
    {
        img.style.marginLeft='0px';
    }
}