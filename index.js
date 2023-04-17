let x=0;
document.getElementById("decrease").onclick=function(){
    x-=1;
    document.getElementById("answer").innerHTML=x
};
document.getElementById("increase").onclick=function(){
    x+=1;
    document.getElementById("answer").innerHTML=x
};

