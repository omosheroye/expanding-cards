const panels= document.querySelectorAll('.panel');

function opentogg(){
    
    this.classList.toggle('open');

};

panels.forEach(panel => panel.addEventListener('click', opentogg));
