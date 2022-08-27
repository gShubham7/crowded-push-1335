function getmenu(){
   event.preventDefault();
   document.querySelector(".list_of_links").style.display = "block";
   document.querySelector("#menu_icon_delete").style.display = "block";
   document.querySelector("#menu_icon_div").style.display = "none";
   document.querySelector(".all").style.marginBottom = "270px";

}

function Delete(){
   event.preventDefault();
   document.querySelector("#menu_icon_delete").style.display = "none";
   document.querySelector("#menu_icon_div").style.display = "block";
   document.querySelector(".list_of_links").style.display = "none";
   document.querySelector(".all").style.marginBottom = "30px";


}