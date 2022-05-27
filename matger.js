var bar = document.getElementById('fa-bars'),
    bardiv = document.getElementById('active'),
    marge = document.getElementsByClassName("marg");

bar.onclick = function(){
    bardiv.classList.toggle('active');
    bar.classList.toggle ('fa-xmark');
};    
window.onscroll = function(){
    var value = scrollY;
    if(value >= 50){
        bar.style.color = "#b3f902";
    }
    else if(value <= 50){
        bar.style.color = "white";
    }
};