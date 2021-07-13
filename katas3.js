const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

// Antes de começar a desenvolver suas funções de resolução dos Katas, crie a função **"showResults"** seguindo os seguintes passos:

// 1. Essa função deve receber um valor como parâmetro.  
// 2. Essa função deve mostrar no DOM o valor recebido.  
// 3. Essa função deve ser chamada dentro de todas as outras funções.  
function showResults (value){
    let newElement = document.createElement("div");
              
       let newText = document.createTextNode(value);
       newElement.appendChild(newText);

       
       let destination = document.getElementById("d1");
       destination.appendChild(newElement);
}

function kata1() {
    function oneThroughTwentyFive() {
        let meuretorno = []
        for (let i= 1; i<=25; i++){
          meuretorno[i-1] = i
        }
       return meuretorno   
       } 
       showResults(oneThroughTwentyFive())
}

function kata2() {
    function countingBackwards() {
    
        let backfwards = []
        for (let i= 25; i>0; i--){
          backfwards.push(i) 
      }
      return backfwards
    }
      showResults(countingBackwards())
}

function kata3() {
    function oneThroughTwentyFiveNegative() {
        let meuretorno = []
        for (let i= 1; i<=25; i++){
          meuretorno[i-1] = -i
        }
       return meuretorno   
       } 
       showResults(oneThroughTwentyFiveNegative())
}

function kata4() {
    
    function countingBackwards2() {
    
            let backfwards = []
            for (let i= 25; i>0; i--){
              backfwards.push(-i) 
          }
          return backfwards
        }
          showResults(countingBackwards2())

}
function kata5() {
    function countingBackwards() {
    
        let backfwards = []
        for (let i= 25; i>0; i--){
          if (i%2 !== 0) {
            backfwards.push(i)
          } 
      }
      let meuretorno = []
        for (let i= 1; i<=25; i++){
          if (i%2 !== 0){
            meuretorno.push(-i)
          }            
        }
        backfwards.push(meuretorno)
      return backfwards 
    }
      showResults(countingBackwards())
    // implemente o código do kata 5 aqui
}

function kata6() {
    function divs3() {
        let meuretorno = []
        for (let i= 1; i<=100; i++){
          if (i%3 ==0 ) {meuretorno.push(i)}
        }
       return meuretorno   
       } 
       showResults(divs3())
    
}

function kata7() {
    function divs7() {
        let meuretorno = []
        for (let i= 1; i<=100; i++){
          if (i%7 ==0 ) {meuretorno.push(i)}
        }
       return meuretorno   
       } 
       showResults(divs7())
}

function kata8() {
    function countingBackwards() {
    
        let backfwards = []
        for (let i= 100; i>0; i--){
          if (i%3 == 0 || i%7 == 0 ){
              backfwards.push(i)
            } 
      }
      return backfwards
    }
      showResults(countingBackwards())
    
}

function kata9() {
    function divs5() {
        let meuretorno = []
        for (let i= 1; i<=100; i++){
          if (i%5 == 0 && i%2 == 0) {meuretorno.push(i)}
        }
       return meuretorno   
       } 
       showResults(divs5())
    // implemente o código do kata 9 aqui
}

function kata10() {
    function NumberSample() {
        let contador = []  
        for(let i = 0 ; i<20 ; i ++) {
                contador.push(sampleArray[i])
            } 
            return contador
    }showResults(NumberSample())
    // implemente o código do kata 10 aqui
}

function kata11() {
    function NumberSample() {
        let contador = []  
        for(let i = 0 ; i<sampleArray.length ; i ++) {
               if(sampleArray[i]%2 == 0){
                    contador.push(sampleArray[i])
               }
            } 
            return contador
    }showResults(NumberSample())
}

function kata12() {
    function NumberSample() {
        let contador = []  
        for(let i = 0 ; i<sampleArray.length ; i ++) {
               if(sampleArray[i]%2 == 1){
                    contador.push(sampleArray[i])
               }
            } 
            return contador
    }showResults(NumberSample())
    
}

function kata13() {
    function NumberSample() {
        let contador = []  
        for(let i = 0 ; i<sampleArray.length ; i ++) {
               if(sampleArray[i]%8 == 0){
                    contador.push(sampleArray[i])
               }
            } 
            return contador
    }showResults(NumberSample())
}

function kata14() {
    function NumberSample() {
        let contador = []  
        for(let i = 0 ; i<sampleArray.length ; i ++) {
               contador.push(sampleArray[i]*sampleArray[i])
               
            } 
            return contador
    }showResults(NumberSample())
    // implemente o código do kata 14 aqui
}

function kata15() {
    function somanumeros() {
        let contador = 0
        for(let i = 1; i<=20; i++){
            contador +=  i
        }
        return contador
    }
    showResults(somanumeros())
}

function kata16() {
    function somanumeros() {
        let contador = 0
        for(let i = 1; i<sampleArray.length; i++){
            contador +=  sampleArray[i]
        }
        return contador
    }
    showResults(somanumeros())
    // implemente o código do kata 16 aqui
}

function kata17() {
    function menorValor () {
        for(let i = 0; i<sampleArray.length; i++){
            let guarda = sampleArray[i]

            for (let j = 1; j<sampleArray.length; j++){
                if (guarda > sampleArray[j]){
                    guarda = sampleArray[j]
                }       
            }
            return guarda
        } 
    }
    showResults(menorValor())
}


function kata18() {
    function menorValor () {
        for(let i = 0; i<sampleArray.length; i++){
            let guarda = sampleArray[i]

            for (let j = 1; j<sampleArray.length; j++){
                if (guarda < sampleArray[j]){
                    guarda = sampleArray[j]
                }       
            }
            return guarda
        } 
    }
    showResults(menorValor())
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
