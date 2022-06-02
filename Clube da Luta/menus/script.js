function saudar(){
    let name = document.getElementById('treinador_id')
    let sad = document.getElementById('saudacao')
    let no = name.value
    let p = document.getElementById('post')
    sad.innerHTML = `<p>Olá, <b>${no}</b></p><p>Sua carta é:</p>`
    sad.style.boxShadow = '0px 0px 10px black'
    sad.style.textAlign = 'center'
}
function comprar(){
    post = document.getElementById('post')
    min = Math.ceil(1);
    max = Math.floor(12);
    n = Math.floor(Math.random() * (max - min)) + min;
   //let n = Math.random() *100 
   post.innerHTML = ``
   switch(n){
        case 1:
        let card0 = document.createElement ('img')
        card0.setAttribute('src','../imagens/cardback.jpg')
        card0.style.position = 'relative'
        card0.style.left = '350px'
        card0.style.width = '30%'
        post.appendChild(card0)
        
        break;
        case 2:
        let card1 = document.createElement ('img')
        card1.setAttribute('src','../imagens/Pokemon/201 - Unown.jpg')
        card1.style.position = 'relative'
        card1.style.width = '30%'
        card1.style.left = '350px'
        post.appendChild(card1)
        break;
        case 3:
        let card2 = document.createElement ('img')
        card2.setAttribute('src','../imagens/Pokemon/202 - Woobuffet.jpg')
        card2.style.width = '30%'
        card2.style.position = 'relative'
        card2.style.left = '350px'
        post.appendChild(card2)
        break;
        case 4:
        let card3 = document.createElement ('img')
        card3.setAttribute('src','../imagens/Pokemon/203 - Girafarig.jpg')
        card3.style.position = 'relative'
        card3.style.left = '350px'
        card3.style.width = '30%'
        post.appendChild(card3)
        break; 
        case 5:
        let card4 = document.createElement ('img')
        card4.setAttribute('src','../imagens/Pokemon/204 - Pineco.jpg')
        card4.style.position = 'relative'
        card4.style.left = '350px'
        card4.style.width = '30%'
        post.appendChild(card4)
        break; 
        case 6:
        let card5 = document.createElement ('img')
        card5.setAttribute('src','../imagens/Pokemon/205 - Foretress.jpg')
        card5.style.position = 'relative'
        card5.style.left = '350px'
        card5.style.width = '30%'
        post.appendChild(card5)
        break; 
        case 7:
        let card6 = document.createElement ('img')
        card6.setAttribute('src','../imagens/Pokemon/206 - Dunsparce.jpg')
        card6.style.position = 'relative'
        card6.style.left = '350px'
        card6.style.width = '30%'
        post.appendChild(card6)
        break; 
        case 8:
        let card7 = document.createElement ('img')
        card7.setAttribute('src','../imagens/Pokemon/207 - Gligar.jpg')
        card7.style.position = 'relative'
        card7.style.left = '350px'
        card7.style.width = '30%'
        post.appendChild(card7)
        break; 
        case 9:
        let card8 = document.createElement ('img')
        card8.setAttribute('src','../imagens/Pokemon/208 - Steelix.jpg')
        card8.style.position = 'relative'
        card8.style.left = '350px'
        card8.style.width = '30%'
        post.appendChild(card8)
        break; 
        case 10:
        let card9 = document.createElement ('img')
        card9.setAttribute('src','../imagens/Pokemon/209 - Snubull.jpg')
        card9.style.position = 'relative'
        card9.style.left = '350px'
        card9.style.width = '30%'
        post.appendChild(card9)
        break; 
        case 11:
        let card10 = document.createElement ('img')
        card10.setAttribute('src','../imagens/Pokemon/210 - Granbull.jpg')
        card10.style.position = 'relative'
        card10.style.left = '350px'
        card10.style.width = '30%'
        post.appendChild(card10)
        break; 
        case 12:
        let card11 = document.createElement ('img')
        card11.setAttribute('src','../imagens/Pokemon/211 - Quillfish.jpg')
        card11.style.position = 'relative'
        card11.style.left = '350px'
        card11.style.width = '30%'
        post.appendChild(card11)
        break;


   }

}