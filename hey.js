const panels= document.querySelectorAll('.panel');
function remove(){
    this.classList.remove('open');

};
function opentogg(){
    
    this.classList.toggle('open');

};

panels.forEach(panel => panel.addEventListener('click', remove));
panels.forEach(panel => panel.addEventListener('click', opentogg));