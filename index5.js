var row=document.querySelectorAll(".row-img");
var main=document.querySelector("#main-image");
for(var i=0;i<row.length;i++){
    row[i].addEventListener("click",function(){
        main.src=this.src;
    });
}