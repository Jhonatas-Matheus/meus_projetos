function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('tPhone').onkeyup = function(){
		mascara( this, mtel );
	}
}
var note = document.getElementById('disp_n')
var pc = document.getElementById('disp_p')
var img = document.getElementById('img')

function imagemNote(){
        var color = document.getElementById('field_d')
        if(note.checked){
            img.setAttribute('src', '../imagens/imagens-orçamento/laptop-web.png')        
        }if(pc.checked){
            img.setAttribute('src', '../imagens/imagens-orçamento/pc-web.png')
        }
        var diag_note = document.getElementById('note')
        var diag_pc = document.getElementById ('pc')
    if(note.checked){
        diag_pc.style.display = 'none'
        diag_note.style.display = 'block'
    }else{
        diag_note.style.display = 'none'
        diag_pc.style.display = 'block'
    }
        img.style.float ='right'
        img.style.width = '100px'
        img.style.position = 'relative'
        im.style.padding ='2px'
        img.style.top = '-50px'

        }

/*var op0 = document.getElementById('cNotebookLiga')
var op1 = document.getElementById('cNotebookAcende')
var op2 = document.getElementById('NotebookPisca')
var op3 = document.getElementById('cNotebookMorto')*/
var next = document.getElementById('diagnostico_1-2')
function show_diagnostico_2(){
    next.style.display = 'block'
}
function hidden_diagnostico_2() {
    next.style.display = 'none'
}


















































    /*   
    
    var dN = document.getElementById('diagnostico')
    dN.innerHTML =''
    if(note.checked){
        //var dn1 = document.createElement ('fieldset')
        //dn1.setAttribute('id', 'dn1')        
        //dN.appendChild(dn1)
        //var dN = document.createElement('fieldset')
        var dn1_legend = document.createElement ('legend')
        dn1_legend.setAttribute('id', 'dn1_legend')
        dn1_legend.innerHTML = 'Diagnóstico'
        dN.appendChild(dn1_legend)
        dn1_paragrafo = document.createElement('p')
        dn1_paragrafo.innerHTML = '<p>Com o seu notebook ligado à tomada <b>(se for externa por gentileza remover a bateria ao fazer o teste)</b> pressione o botão power(Liga/Desliga) e marque a opção que melhor corresponder o comportamento do notebook</p>        <p><input id="cNotebookAcende" type="radio" name="quest_1"> O notebook acende algumas luzes e só</p>        <p><input id="cNotebookPisca" type="radio" name="quest_1"> O notebook acende as luzes e a tela pisca mas não da imagem </p>        <p><input id="cNotebookMorto" type="radio" name="quest_1">O notebook está totalmente morto, você coloca ele na tomada pressiona o botão power e ele não apresenta nenhum sinal, nenhum led acende.</p>'
        dN.appendChild(dn1_paragrafo)
    }else{
        var dn2_legend = document.createElement('legend')
        dn2_legend.innerHTML = 'Diagnóstico'
        dN.appendChild(dn2_legend)
        var dn2_paragrafo = document.createElement('p')
        dn2_paragrafo.innerHTML = '<p>Com o seu computador ligado à tomada pressione o botão power(Liga/Desliga) e marque a opção que melhor corresponder o comportamento do computador</p>        <p><input id="cNotebookAcende" type="radio" name="quest_1"> O notebook acende algumas luzes e só</p>        <p><input id="cNotebookPisca" type="radio" name="quest_1"> O notebook acende as luzes e a tela pisca mas não da imagem </p>        <p><input id="cNotebookMorto" type="radio" name="quest_1">O notebook está totalmente morto, você coloca ele na tomada pressiona o botão power e ele não apresenta nenhum sinal, nenhum led acende.</p>'
        dN.appendChild(dn2_paragrafo)
    }
   
    }
    */