let button=document.getElementById("button");
var count=0;
button.addEventListener("click", ()=>{
    let a=document.getElementById("cercle") ;
    let body=document.getElementById("body");
    let h1=document.getElementById("h1");

    count +=1;
    const mod=count%2;
    if(mod==0){
        h1.style.color="black";
        a.style.marginLeft="0px";
        console.log("sun");
        body.style.background="white"
    }
    else{
        a.style.marginLeft="45px";
        a.style. transition="2s";
        console.log("moon");
        body.style.background="black";
        h1.style.color="white";
    }
});