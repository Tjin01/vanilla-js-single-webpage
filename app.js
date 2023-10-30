
let navbar = document.getElementsByClassName("toggle-nav")[0];
let toggle = false;

navbar.onclick = function(){
    toggle = !toggle;
    let nav = document.getElementsByClassName("nav-links")[0];
    let navdesktop = document.getElementsByClassName("nav-bar")[0];
    return toggle ? nav.style = "visibility: visible; transform: scaleY(1); transition: transform 200ms ease-in-out;" : navdesktop.style = "display: flex; transform: none";
    
}