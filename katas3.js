const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

// Antes de começar a desenvolver suas funções de resolução dos Katas, crie a função **"showResults"** seguindo os seguintes passos:

// 1. Essa função deve receber um valor como parâmetro.  
// 2. Essa função deve mostrar no DOM o valor recebido.  
// 3. Essa função deve ser chamada dentro de todas as outras funções.  
function showResults (value){
    let newElement = document.createElement("div");
        newElement.className = "box_function"
              
       let newText = document.createTextNode(value);
       newElement.appendChild(newText);

       
       let destination = document.getElementById("d1");
       destination.appendChild(newElement);
}

function kata1() {
    
        let meuretorno = []
        for (let i= 1; i<=25; i++){
          meuretorno[i-1] = i
        }
        showResults("kata1:")      
       showResults(meuretorno)
}kata1() 

function kata2() {
        
        let backfwards = []
        for (let i= 25; i>0; i--){
          backfwards.push(i) 
      }
    backfwards
        showResults("kata2:")
        showResults(backfwards)
}kata2()

function kata3() {
    
        let meuretorno = []
        for (let i= 1; i<=25; i++){
          meuretorno[i-1] = -i
        }
       meuretorno   
       showResults("kata3")
       showResults(meuretorno)
}kata3()

function kata4() { 
            let backfwards = []
            for (let i= 25; i>0; i--){
              backfwards.push(-i) 
          }
           backfwards
           showResults("kata4:")
          showResults(backfwards)

}kata4()

function kata5() {
    
    
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
        showResults("kata5:")
      showResults(backfwards)
}
kata5()

function kata6() {
    
        let meuretorno = []
        for (let i= 1; i<=100; i++){
          if (i%3 ==0 ) {meuretorno.push(i)}
        }
        showResults("kata6:")
       showResults(meuretorno)
    
}
kata6()

function kata7() {
        let meuretorno = []
        for (let i= 1; i<=100; i++){
          if (i%7 ==0 ) {meuretorno.push(i)}
        }      
        showResults("kata7:")
        showResults(meuretorno)
} kata7()

function kata8() {
        let backfwards = []
        for (let i= 100; i>0; i--){
          if (i%3 == 0 || i%7 == 0 ){
              backfwards.push(i)
            } 
      }
      showResults("kata8:")
      showResults(backfwards)
    
}kata8()

function kata9() {
        let meuretorno = []
        for (let i= 1; i<=100; i++){
          if (i%5 == 0 && i%2 == 1) {meuretorno.push(i)}
        } 
        showResults("kata9:")  
       showResults(meuretorno)
       
}kata9()

function kata10() {
        let contador = []  
        for(let i = 0 ; i<20 ; i ++) {
                contador.push(sampleArray[i])
            }
            showResults("kata10:") 
            showResults(contador)
}kata10()

function kata11() {
        let contador = []  
        for(let i = 0 ; i<sampleArray.length ; i ++) {
               if(sampleArray[i]%2 == 0){
                    contador.push(sampleArray[i])
               }
        } 
        showResults("kata11:")    
        showResults(contador)
}kata11()

function kata12() {
        let contador = []  
        for(let i = 0 ; i<sampleArray.length ; i ++) {
               if(sampleArray[i]%2 == 1){
                    contador.push(sampleArray[i])
               }
        } 
        showResults("kata12:")    
        showResults(contador)
    
}kata12()

function kata13() {
        let contador = []  
        for(let i = 0 ; i<sampleArray.length ; i ++) {
               if(sampleArray[i]%8 == 0){
                    contador.push(sampleArray[i])
               }
         } 
         showResults("kata13:")  
         showResults(contador)
}kata13()

function kata14() {
        let contador = []  
        for(let i = 0 ; i<sampleArray.length ; i ++) {
               contador.push(sampleArray[i]*sampleArray[i])
               
            } 
            showResults("kata14:")
            showResults(contador)
}kata14()

function kata15() {
        let contador = 0
        for(let i = 1; i<=20; i++){
            contador +=  i
        }
        showResults("kata15:")
        showResults(contador)
}kata15()

function kata16() {
        let contador = 0
        for(let i = 1; i<sampleArray.length; i++){
            contador +=  sampleArray[i]
        }
        showResults("kata16:")
        showResults(contador)
}kata16()

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
    showResults("kata17:")
    showResults(menorValor())
}kata17()


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
    showResults("kata18:")
    showResults(menorValor())
}kata18()

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
