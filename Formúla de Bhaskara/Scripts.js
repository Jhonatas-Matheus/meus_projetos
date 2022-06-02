
            var nome = window.prompt('Qual o seu nome?')
            parent.document.getElementById("boasVindas").value = `Olá, ${nome} a seguir irei lhe ajudar a resolver uma equação de 2º grau através da fórmula de bhaskara!`
           var calc = function (){
           var a = valores.tA.value
           var b = valores.tB.value
           var c = valores.tC.value
           var delta = (b**2 - 4 * a * c);
           var deltaRaiz = Math.sqrt(delta)
           var x1 = ((-b + deltaRaiz) / (2 * a))
           var x2 = ((-b - deltaRaiz) / (2 * a))
           parent.document.getElementById("valorDelta").value = delta 
           parent.document.getElementById("valorX1").value = x1.toFixed(2) 
           parent.document.getElementById("valorX2").value = x2.toFixed(2) 
           parent.document.getElementById("delta_l1").value = b + '²' + ' - ' + '4' + ' . ' + a + ' . ' + c
           parent.document.getElementById("delta_l2").value = b**2 + ' - ' +  4 *a*c
           parent.document.getElementById("delta_l3").value = delta
           parent.document.getElementById("x_l1").value = '(' + ' - ' + b + ' ± ' + '√' + delta + ' ) ' + ' ÷ ' + '2' + ' . ' + a
           parent.document.getElementById("x_l2").value = '(' + ' - ' + b + ' ± ' + deltaRaiz + ' ) ' + ' ÷ ' + 2*a
           parent.document.getElementById("x_l3").value = ' ( ' + (-b + deltaRaiz) + ' ) ' + ' ÷ ' + (2*a)
           parent.document.getElementById("x_l4").value = x1
           parent.document.getElementById("x_l5").value = ' ( ' + (-b - deltaRaiz) + ' ) ' + ' ÷ ' + (2*a)
           parent.document.getElementById("x_l6").value = x2
       }