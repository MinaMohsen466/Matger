var bar = document.getElementById('fa-bars'),
    bardiv = document.getElementById('active');

bar.onclick = function(){
    bardiv.classList.toggle('active');
    bar.classList.toggle ('fa-xmark');
};    