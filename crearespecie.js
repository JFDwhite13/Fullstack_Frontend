const btn_submit = document.getElementById("submit")

function Crearespecie(){
    const nombre = document.getElementById("nombre").value
    const clasificacion = document.getElementById("clasificacion").value
    const esperanza_vida = parseInt(document.getElementById("esperanza_vida").value)
    const peso_promedio = parseInt(document.getElementById("peso_promedio").value)

    const datos = {
        nombre: nombre,
        clasificacion: clasificacion,
        esperanza_vida: esperanza_vida,
        peso_promedio: peso_promedio
    }
    return datos
}

async function sendform(){
    try{    
        const datos = Crearespecie();
        const options={
            method:"POST",
            body:JSON.stringify(datos),
            headers:{'Content-type':'application/json'}
        }
        const send = await fetch("http://localhost:3001/crear_especie",options)
        const response = await send.json();
        const result= document.getElementById("result")
        result.innerHTML=JSON.stringify(response)
    }catch(Error){
        console.log(Error)
        const result= document.getElementById("result")
        result.innerHTML= Error
    }
    

}

btn_submit.addEventListener('click',(btn)=>{btn.preventDefault(); sendform();})