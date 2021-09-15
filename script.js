function converterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  
  var valorEmReal = valorEmDolarNumerico * 5;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O Resultado em real é R$ " + valorEmReal;
  
  elementoValorConvertido.innerHTML = valorConvertido;
        
    
}
      function converterBitCoin() {
      var valorElementoBitCoin = document.getElementById("valor");
      var valorBit = valorElementoBitCoin.value;
      var valorEmBitCoin = parseFloat(valorBit);
        
      var valorEmBits = valorEmBitCoin * 46619;
      var valorConvertidoEmBit =  document.getElementById("valorConvertidoEmBitCoin");
      var valorConvertidoBit = "O resultado em BitCoins é " + valorEmBits;
        valorConvertidoEmBit.innerHTML = valorConvertidoBit;

      }

        /*function converterKm(){    
        var valorEmKm = document.getElementById("valor");
        var valorAnosLuz = valorEmKm.value;
        var valorEmAnosLuz = parseFloat(valorAnosLuz);
          
        var resultadoAnosLuz = valorEmAnosLuz * 1,057;
        var valorConvertidoEmAnosLuz = document.getElementById("valorConvertidoEmAnosLuz");
        var valorConvertidoLuz = "O resultado em Anos Luz é " + resultadoAnosLuz;
          valorConvertidoEmAnosLuz.innerHTML = valorConvertidoLuz;
        }*/ 