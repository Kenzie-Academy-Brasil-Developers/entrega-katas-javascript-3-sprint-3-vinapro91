const extra = document.getElementById("extra")

const creatDiv = (id) => {
    const newElement = document.createElement("div")
    newElement.id = id
    extra.appendChild(newElement)
}

const creatRectangle = () => {
    for(let i = 0; i <=20 ; i++){
        creatDiv("extra1")
    }
}
creatRectangle()


const creatRectangle2 = () => {
    let controlW = 100
    for(let i = 0; i <=20 ; i++){
        const newElement = document.createElement("div")
        newElement.id = "extra2"
        newElement.style.width = `${controlW}px`
        controlW = controlW + 5
        extra.appendChild(newElement)
    }
}
creatRectangle2()

const creatRectangle3 = () => {
    for(let i = 0; i <=20 ; i++){
        
        const newElement = document.createElement("div")
        newElement.id = "extra2"
        newElement.style.width = `${sampleArray[i]}px`
        extra.appendChild(newElement)
    }
}
creatRectangle3()


const creatRectangle4 = () => {
    for(let i = 0; i <=20 ; i++){
       if (i%2 == 0){
        const newElement = document.createElement("div")
        newElement.id = "extra2"
        newElement.style.width = `${sampleArray[i]}px`
        newElement.style.backgroundColor = "red"
        extra.appendChild(newElement)
       }
       else {
        const newElement = document.createElement("div")
        newElement.id = "extra2"
        newElement.style.width = `${sampleArray[i]}px`
        extra.appendChild(newElement)
       }
    }
}
creatRectangle4()
const creatRectangle5 = () => {
    for(let i = 0; i <=20 ; i++){
       if (sampleArray[i]%2 == 0){
        const newElement = document.createElement("div")
        newElement.id = "extra2"
        newElement.style.width = `${sampleArray[i]}px`
        newElement.style.backgroundColor = "red"
        extra.appendChild(newElement)
       }
       else {
        const newElement = document.createElement("div")
        newElement.id = "extra2"
        newElement.style.width = `${sampleArray[i]}px`
        extra.appendChild(newElement)
       }
    }
}
creatRectangle5()