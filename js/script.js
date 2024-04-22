function calcular(){
                var altura = document.getElementById('idaltura')
                var peso = document.getElementById('idpeso').value
                var resultado = document.getElementById('resultado')
                
                //verifica se o campo de altura tem até 3 numeros e a virgula
                if (altura.value.length > 4) {
                    window.alert('A altura deve ter no máximo 3 números.');
                    return;
                }
                
                //Substitui todas as vírgulas no valor pelo ponto . Isso é necessário porque em JavaScript, números decimais usam o ponto como separador decimal. 
                var alturaValor = Number(altura.value.replace(",","."))
                
                if (alturaValor === 0 || peso === 0) {
                    window.alert('Preencha todos os campos corretamente para poder realizar o cálculo');
                    return;
                }else {
                    var calculo = (peso / (alturaValor ** 2)).toFixed(2);
                }
                
                if(calculo <18.5 && calculo >0){
                    resultado.innerHTML = `Seu IMC é ${calculo} e você está na classificação Baixo Peso`
                }else if(calculo >=18.5 && calculo <25){
                    resultado.innerHTML = `Seu IMC é ${calculo} e você está na classificação Peso Normal` 
                }
                else if(calculo >=25 && calculo <30){
                    resultado.innerHTML = `Seu IMC é ${calculo} e você está na classificação Sobrepeso` 
                }
                else if(calculo >=30 && calculo <35){
                    resultado.innerHTML = `Seu IMC é ${calculo} e você está na classificação Obesidade grau I` 
                }
                else if(calculo >=35 && calculo <40){
                    resultado.innerHTML = `Seu IMC é ${calculo} e você está na classificação Obesidade grau II` 
                }else{
                    resultado.innerHTML = `Seu IMC é ${calculo} e você está na classificação Obesidade grau III`
                }

                var mostrarResultado = document.getElementById('containerRes')
                mostrarResultado.style.display='flex'
}