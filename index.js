const req = fetch(`http://localhost:8087/categorias`).then((resp)=>{
    resp.json().then((data)=>{
        console.log(data)

        const listaCategoria = document.getElementById('listaCategoria')

        data.map(({id, nombreCategoria}) => {
            const li = document.createElement('li')
            li.innerHTML = `Id: ${id}  Categoria: "${nombreCategoria}"`
            listaCategoria.appendChild(li)
        })
    })
}).catch(console.warn)

