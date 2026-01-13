'use strict' 

const switcher = document.querySelector('.btn');

function atualizarIcone() {
    if (document.body.classList.contains('dark-theme')) {
        switcher.innerHTML = `<img src="img/sol.png" width="30">`;
    } else {
        switcher.innerHTML = `<img src="img/lua.png" width="30">`;
    }
}

atualizarIcone();

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    atualizarIcone();
});