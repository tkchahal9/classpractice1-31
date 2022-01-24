var number=5;

function eleMaker(name,val){
    var ele = document.createElement (  "div");
    ele.innerHTML=name;
    ele.addEventListener("click",function (){
        increase(val);
    })
document.body.querySelector(".main").appendChild(ele);
}

function increase(val){
        number=number+val;
        document.body.querySelector(".number").innerHTML=number;
}

document.body.querySelector( ".clicker").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";

    eleMaker( "Tanjeet",2);
    eleMaker( "RM",3);
    eleMaker("Jungkook",4);
    eleMaker("Jhope",5);
});


document.body.querySelector( ".clicker2").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";

    eleMaker( "Jin",6);
    eleMaker( "V",7);
    eleMaker("Jimin",8);
    eleMaker("Suga",9);
});