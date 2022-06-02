
let pok1 = [20,7,7, (src='../imagens/cardback')]
let pok2 = [35,3,3]
let pok3 = [29,8,9]
let pok4 = [20,6,3]
let pok5 = [31,9,6]
let pok6 = [29,7,6]
let pok7 = [32,7,3]
let pok8 = [37,9,5]
let pok9 = [18,8,4]
let pok10 = [27,12,6]
let pok11 = [29,10,5]
let b = document.getElementById('atributos_2')
function comprar_1(){
    post = document.getElementById('pokemon_comprado_1')
    min = Math.ceil(1);
    max = Math.floor(12);
    n1 = Math.floor(Math.random() * (max - min)) + min;
   post.innerHTML = ``
   switch(n1){
        case 1:
        post.setAttribute('src','../imagens/cardback.jpg')
        break;
        case 2:
        post.setAttribute('src','../imagens/Pokemon/201 - Unown.jpg')
        break;
        case 3:
        post.setAttribute('src','../imagens/Pokemon/202 - Woobuffet.jpg')
        break;
        case 4:
        post.setAttribute('src','../imagens/Pokemon/203 - Girafarig.jpg')
        break; 
        case 5:
        post.setAttribute('src','../imagens/Pokemon/204 - Pineco.jpg')
        break; 
        case 6:
        post.setAttribute('src','../imagens/Pokemon/205 - Foretress.jpg')
        break; 
        case 7:
        post.setAttribute('src','../imagens/Pokemon/206 - Dunsparce.jpg')
        break; 
        case 8:
        post.setAttribute('src','../imagens/Pokemon/207 - Gligar.jpg')
        break; 
        case 9:
        post.setAttribute('src','../imagens/Pokemon/208 - Steelix.jpg')
        break; 
        case 10:
        post.setAttribute('src','../imagens/Pokemon/209 - Snubull.jpg')
        break; 
        case 11:
        post.setAttribute('src','../imagens/Pokemon/210 - Granbull.jpg')
        break; 
        case 12:
        post.setAttribute('src','../imagens/Pokemon/211 - Quillfish.jpg')
        break;

   }
   
}
function load_tab_1(){
    if(n1 == 1){
        document.getElementById('vida').value = 0
        document.getElementById('attack').value =0
        document.getElementById('attack_e').value =0
    }else if(n1 == 2){
        document.getElementById('vida').value = pok1[0]
        document.getElementById('attack').value = pok1[1]
        document.getElementById('attack_e').value =pok1[2]
    }else if(n1 == 3){
        document.getElementById('vida').value = pok2[0]
        document.getElementById('attack').value =pok2[1]
        document.getElementById('attack_e').value =pok2[2]
    }else if(n1 == 4){
        document.getElementById('vida').value = pok3[0]
        document.getElementById('attack').value =pok3[1]
        document.getElementById('attack_e').value =pok3[2]
    }else if(n1 == 5){
        document.getElementById('vida').value = pok4[0]
        document.getElementById('attack').value =pok4[1]
        document.getElementById('attack_e').value =pok[2]
    }
    else if(n1 == 6){
        document.getElementById('vida').value = pok5[0]
        document.getElementById('attack').value =pok5[1]
        document.getElementById('attack_e').value =pok[1]
    }else if(n1 == 7){
        document.getElementById('vida').value = pok6[0]
        document.getElementById('attack').value =pok6[1]
        document.getElementById('attack_e').value =pok6[2]
    }else if(n1 == 8){
        document.getElementById('vida').value = pok7[0]
        document.getElementById('attack').value = pok7[1]
        document.getElementById('attack_e').value = pok7[2]
    }else if (n1 == 9){
        document.getElementById('vida').value = pok8[0]
        document.getElementById('attack').value = pok8[1]
        document.getElementById('attack_e').value = pok8[2]
    }else if(n1 == 10){
        document.getElementById('vida').value = pok9[0]
        document.getElementById('attack').value = pok9[1]
        document.getElementById('attack_e').value = pok9[2]
    }else if(n1 == 11){
        document.getElementById('vida').value = pok10[0]
        document.getElementById('attack').value = pok10[1]
        document.getElementById('attack_e').value = pok10[2]
    }else{
        document.getElementById('vida').value = pok11[0]
        document.getElementById('attack').value = pok11[1]
        document.getElementById('attack_e').value = pok11[2]
    } 

    
}
function comprar_2(){
    post2 = document.getElementById('pokemon_comprado_2')
    min = Math.ceil(1);
    max = Math.floor(12);
    n2 = Math.floor(Math.random() * (max - min)) + min;
   //let n = Math.random() *100 
   post.innerHTML = ``
   switch(n2){
    case 1:
        let card0 = document.createElement ('img')
        post2.setAttribute('src','../imagens/cardback.jpg')
        break;
        case 2:
        let card1 = document.createElement ('img')
        post2.setAttribute('src','../imagens/Pokemon/201 - Unown.jpg')
        break;
        case 3:
        let card2 = document.createElement ('img')
        post2.setAttribute('src','../imagens/Pokemon/202 - Woobuffet.jpg')
        post.appendChild(card2)
        break;
        case 4:
        let card3 = document.createElement ('img')
        post2.setAttribute('src','../imagens/Pokemon/203 - Girafarig.jpg')
        break; 
        case 5:
        let card4 = document.createElement ('img')
        post2.setAttribute('src','../imagens/Pokemon/204 - Pineco.jpg')
        break; 
        case 6:
        let card5 = document.createElement ('img')
        post2.setAttribute('src','../imagens/Pokemon/205 - Foretress.jpg')
        break; 
        case 7:
        let card6 = document.createElement ('img')
        post2.setAttribute('src','../imagens/Pokemon/206 - Dunsparce.jpg')
        break; 
        case 8:
        let card7 = document.createElement ('img')
        post2.setAttribute('src','../imagens/Pokemon/207 - Gligar.jpg')
        break; 
        case 9:
        let card8 = document.createElement ('img')
        post2.setAttribute('src','../imagens/Pokemon/208 - Steelix.jpg')
        break; 
        case 10:
        let card9 = document.createElement ('img')
        post2.setAttribute('src','../imagens/Pokemon/209 - Snubull.jpg')
        break; 
        case 11:
        let card10 = document.createElement ('img')
        post2.setAttribute('src','../imagens/Pokemon/210 - Granbull.jpg')
        break; 
        case 12:
        let card11 = document.createElement ('img')
        post2.setAttribute('src','../imagens/Pokemon/211 - Quillfish.jpg')
        break;
   }
}
function load_tab_2(){
    if(n2 == 1){
        document.getElementById('vida_2').value = 0
        document.getElementById('attack_2').value =0
        document.getElementById('attack_e_2').value =0
    }else if(n2 == 2){
        document.getElementById('vida_2').value = pok1[0]
        document.getElementById('attack_2').value = pok1[1]
        document.getElementById('attack_e_2').value =pok1[2]
    }else if(n2 == 3){
        document.getElementById('vida_2').value = pok2[0]
        document.getElementById('attack_2').value =pok2[1]
        document.getElementById('attack_e_2').value =pok2[2]
    }else if(n2 == 4){
        document.getElementById('vida_2').value = pok3[0]
        document.getElementById('attack_2').value =pok3[1]
        document.getElementById('attack_e_2').value =pok3[2]
    }else if(n2 == 5){
        document.getElementById('vida_2').value = pok4[0]
        document.getElementById('attack_2').value =pok4[1]
        document.getElementById('attack_e_2').value =pok[2]
    }else if(n2 == 6){
        document.getElementById('vida_2').value = pok5[0]
        document.getElementById('attack_2').value =pok5[1]
        document.getElementById('attack_e_2').value =pok[1]
    }else if(n2 == 7){
        document.getElementById('vida_2').value = pok6[0]
        document.getElementById('attack_2').value =pok6[1]
        document.getElementById('attack_e_2').value =pok6[2]
    }else if(n2 == 8){
        document.getElementById('vida_2').value = pok7[0]
        document.getElementById('attack_2').value = pok7[1]
        document.getElementById('attack_e_2').value = pok7[2]
    }else if (n2 == 9){
        document.getElementById('vida_2').value = pok8[0]
        document.getElementById('attack_2').value = pok8[1]
        document.getElementById('attack_e_2').value = pok8[2]
    }else if(n2 == 10){
        document.getElementById('vida_2').value = pok9[0]
        document.getElementById('attack_2').value = pok9[1]
        document.getElementById('attack_e_2').value = pok9[2]
    }else if(n2 == 11){
        document.getElementById('vida_2').value = pok10[0]
        document.getElementById('attack_2').value = pok10[1]
        document.getElementById('attack_e_2').value = pok10[2]
    }else{
        document.getElementById('vida_2').value = pok11[0]
        document.getElementById('attack_2').value = pok11[1]
        document.getElementById('attack_e_2').value = pok11[2]
    } 

    
}
function chose_pokemon_1(){
    post.style.position = 'absolute'
    post.style.top = '400px'
    post.style.left = '700px'
    post.style.width = '200px'
}
function chose_pokemon_2(){
    post2.style.position = 'absolute'
    post2.style.top = '80px'
    post2.style.left = '700px'
    post2.style.width = '200px'
}
function attack_1 (){
    let atk = document.getElementById('attack')
    let life = document.getElementById('vida_2')
    let atk_2 = document.getElementById('attack_2')
    let atk_e_2 = document.getElementById('attack_3')
    let lifeT = life.value
    let ataque = atk.value
    let mostrar = document.getElementById('teste')
    if(lifeT > 0){
        let calc = (lifeT - ataque )
        mostrar.value = calc
        life.value = `${calc}`
        
    }else if(lifeT < 0){
        let vida_n = document.getElementById('vida_2')
        let calc_2 = (vida_n * -1)
        life.value = calc_2
        mostrar.value = calc_2 
    }else{
        alert('Você abateu o pokemon')
    }
}

/*for(let c_ko = 0; c_ko < 6; c_ko++){
    alert(`Treinador 2 o seu pokemon foi abatido você tem ${c_ko} pokemons abatidos ao chegar em 6 você perderá a batalha`)
    post2.setAttribute('src','../imagens/cardback.jpg')
    post2.style.position = 'absolute'
    post2.style.top = '-5px'
    post2.style.width = '300px'
    post2.style.left = '0px'*/

/*----------------------------------------------------------*/
/*        ko.setAttribute('src', '../imagens/cardback.jpg')
        b.appendChild(ko)
        ko.style.width = '80px'
        ko.style.position ='absolute'
        ko.style.left ='450px'
        ko.style.top ='-40px'*/








