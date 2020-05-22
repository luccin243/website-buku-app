const bar = '<i class="fa fa-bars"></i>';
const times = '<i class="fa fa-times"></i>';
let menu = document.getElementById('menu');
let nav = document.getElementById('nav-item').style;

function showMenu(){
    if(nav.display == 'none'){
        nav.display = 'flex';
        menu.innerHTML = times;
    }else{
        nav.display = 'none';
        menu.innerHTML = bar;
    }
}