const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let immagini = [
'<img src="./img/01.webp" class="none prova">',
`<img src="./img/02.webp" class="none prova">`,
`<img src="./img/03.webp" class="none prova">`,
`<img src="./img/04.webp" class="none prova">`,
`<img src="./img/05.webp" class="none prova">`
];


 for (let i = 0; i < immagini.length; i++) {
     document.querySelector(".img").innerHTML += immagini[i]
    }
    
    next.addEventListener('click', function() {
        let none = document.querySelector('.none');
        //let itemToActive = none.nextElementSibling;
        //itemToActive.classList.add('none');
        none.classList.remove('none');
        
        
     })

 prev.addEventListener('click', function() {
    let prova = document.querySelector('.prova');
    prova.classList.add('none');
 })
    

