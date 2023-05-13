async function GenerateTable(){
    const request = await fetch("http://localhost:3001/listar_especie")
    const data = await request.json();
    data.forEach((especie)=>{
        const tbody = document.querySelector("#especies-table tbody");
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${especie.id_especie}</td>
          <td>${especie.nombre}</td>
          <td>${especie.clasificacion}</td>
          <td>${especie.esperanza_vida} años</td>
          <td>${especie.peso_promedio} kg</td>
        `;
        tbody.appendChild(row);
    }
        
    );

}
GenerateTable();