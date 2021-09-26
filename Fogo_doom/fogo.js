
const fireArray = []
const largura = 50
const altura = 50
const fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]



function start(){
    criarfogo()
    baseFogo()
    renderfogo()
    setInterval(calculafogo,50)
   
    document.getElementById("kero").setAttribute("value", "100")

}

function criarfogo(){
    const numeropixel = largura * altura
    for(let i = 0 ; i < numeropixel; i++){
        fireArray[i] = 0
    }



}
function calculafogo(){
    for(let col = 0; col < largura;col++){
        for(let row =0; row<altura; row++){
            const PixelIndex = col +(largura * row)
            updatefire(PixelIndex)
        }
    }
    renderfogo()
}

function updatefire(currentPixelIndex){
    const abaixo = currentPixelIndex + altura
    if (abaixo >= largura * altura){return}

    const decay = Math.floor(Math.random() * 10)
    const intensidadeAbaixo = fireArray[abaixo]
    const Novaintensidade = intensidadeAbaixo - decay >= 0 ? intensidadeAbaixo - decay : 0
    fireArray[currentPixelIndex - decay] = Novaintensidade
}   

function renderfogo(){
    let html = '<table cellpadding=0 cellspacing=0>'
    let debug = false

    for(let row = 0; row<altura; row++){
        html += '<tr>'

        for(let col = 0; col<largura;col++){
            const Pixelindex = col + (largura * row)
            const intensidade = fireArray[Pixelindex]

            if(debug === true){
                html += '<td>'
                html += `<div class="pixel-index" >${Pixelindex}</div>`
                html += intensidade
                html += '</td>'
            }else{
                const color = fireColorsPalette[intensidade]
                const colorstring = `${color.r},${color.g},${color.b}`
                html += `<td class="pixel" style="background-color: rgb(${colorstring}">`
                html += '</td>'
            }


        }

        html += '</tr>'
    }


    html += '</table'
    document.querySelector('#Firecanvas').innerHTML = html
    
}

function baseFogo (){
    for(let col = 0; col<= largura;col++){
        
        let total = altura * largura
        const pixelIndex = (total - largura) + col

        fireArray[pixelIndex] = 35
    }
}

start()








