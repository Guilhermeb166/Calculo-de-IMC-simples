
            function calcular(){
                var altura = document.getElementById('idaltura')
                var peso = document.getElementById('idpeso')
                var resultado = document.getElementById('resultado')

                var altura = Number(altura.value.replace(",","."))
                var peso = Number(peso.value)

                var calculo = peso / (altura**2)
                resultado.innerHTML = calculo.toFixed(2)
            }