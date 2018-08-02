//scripts for dropdown menu
//use in conjunction with assets/styles/styles.css, requires JQuery

"use strict";

//onclick restyle dropdown link, show child dropdown background and grandchildren links
function openMenu(dropdownToOpen){
  dropdownToOpen.classList.toggle("selected");
  let child = dropdownToOpen.children[0];
  child.classList.toggle("show");
  let grandChildren = child.children;
  for(let i = 0; i<grandChildren.length;i++){
    grandChildren[i].classList.toggle("show");
  }
}

//user clicks off in space close the dropdown menu
window.onclick = function(event) {
  if (!event.target.matches('.menu-item-dropdown')) {
    let allDropdownLinks = document.getElementsByClassName('dropdown-link');
    for(let i = 0; i<allDropdownLinks.length; i++){
      if(allDropdownLinks[i].classList.contains("show"))
        allDropdownLinks[i].classList.remove("show");
    }
    
    let allDropdowns = document.getElementsByClassName('dropdown');
    for(let i = 0; i<allDropdowns.length; i++){
      if(allDropdowns[i].classList.contains("show"))
        allDropdowns[i].classList.remove("show");
    }
    
    
    let allMenuItemDropdowns = document.getElementsByClassName('menu-item-dropdown');
    for(let i = 0; i<allMenuItemDropdowns.length; i++){
      if(allMenuItemDropdowns[i].classList.contains("selected"))
        allMenuItemDropdowns[i].classList.remove("selected");
    }
  }
};

//make spacing more friendly to browser by determining height with js and adjusting main div accordingly.
function resize(){
  $(".main").css("margin-top",$(".menu").css("height"));
}

resize();
//move screen to accomadate changes in size
window.addEventListener('resize',resize);