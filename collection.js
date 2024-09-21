var sidenav=document.querySelector(".side-navbar")


function showNavbar(){
    sidenav.style.left="0"



}

function closeNavbar(){
    sidenav.style.left="-60%"
}




var productContainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()

    for(i=0;i<productlist.length;i=i+1){
        var productname=productlist[i].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})