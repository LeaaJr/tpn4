const ingredientes = [{
    ID:0,
    nombre:"mozza",
    ingredientes:"'salsa,oregano,mozzarella,aceitunas'",
    precio: '$600',
    img: 'https://thumbs.dreamstime.com/b/pizza-de-salchichones-caliente-aislada-en-el-fondo-blanco-con-moz-115123506.jpg'
    
},{
    ID:1,
    nombre:"tomate",
    ingredientes:"'salsa,oregano,mozzarella,aceitunas,tomate'",
    precio: '$640',
    img: 'https://cdn7.kiwilimon.com/recetaimagen/13003/640x426/5707.jpg.webp'

},{
    ID:2,
    nombre:"morron",
    ingredientes:"'salsa,oregano,mozzarella,aceitunas,morron'",
    precio: '$670',
    img: 'https://nuestracarta.com.ar/wp-content/uploads/2021/06/Pizza-de-Jamo%CC%81n-y-Morro%CC%81n-.jpg'   
},{
    ID:3,
    nombre:"napolitana",
    ingredientes:"'salsa,oregano,mozzarella,aceitunas,jamon,tomate'",
    precio: "$710",
    img:'https://margherita.com.ar/wp-content/uploads/2019/05/pnapolitanaconjamon.jpg'
},{
    ID:4,
    nombre:"jamon y panceta",
    ingredientes:"'salsa,oregano,mozzarella,aceitunas,jamon,panceta'",
    precio: '$770',
    img:'https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/elgranchef/P/Pizza-r%C3%A1pida-con-jam%C3%B3n%20y-panceta-11.jpg'
},{
    ID:5,
    nombre:"4 quesos",
    ingredientes:"'salsa,oregano,aceitunas,mozzarella, queso azul, parmesano, provolone'",
    precio: '$770',
    img: 'http://www.confremar.com/img/blog/articles/18-06/og-pizza-cuatro-quesos-antonio-y-ricardo.png'
    
}]

localStorage.setItem('arrayItems', ingredientes);

console.log(ingredientes)

const captura = () =>{
    let input = document.getElementById("click").value
    /* console.log(input) */
    
    let seleccionado = null
    ingredientes.forEach(function(ingrediente){
        /* console.log(ingrediente) */
        if (ingrediente.ID == input){
            seleccionado = ingrediente
        }
        
    }) 

    if (seleccionado){
        console.log(seleccionado)
    }else{
        alert('ese id no existe')
        console.log("ese id no existe")
    }

    /* console.log(seleccionado.nombre)
    console.log(seleccionado.precio) */


    const resultado = document.getElementById('resultado')

    const img = document.createElement ('img')


    
/*     function renimg(captura){
        document.getElementById(img).captura = comimg
}
    function comimg (){
        document.getElementById(img).style.width='70px'
        document.getElementById(img).style.height='70px'

    } */
        img.src = seleccionado.img

        const mostraring = document.createElement('h3')
        mostraring.textContent = seleccionado.ingredientes    
  
    
    const mostrarnombre = document.createElement('h2')
        mostrarnombre.textContent = seleccionado.nombre

    /* console.log(mostrarnombre) */

    const mostrarprecio = document.createElement('h4')
        mostrarprecio.textContent = seleccionado.precio

        

    /* console.log(mostrarprecio) */

    resultado.appendChild(mostrarnombre)

    resultado.appendChild(mostrarprecio)

    resultado.appendChild(mostraring)

    resultado.appendChild(img)

    /* const card = document.getElementById(card) */

       
    

    





   
    
    

    

}
