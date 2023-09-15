document.querySelector("#btnIngresar").addEventListener("click", ingresarDatos)


function ingresarDatos(){
    let nombre = document.querySelector("#txtNombre").value
    let apellido = document.querySelector("#txtApellido").value
    let fecha = document.querySelector("#txtFecha").value


    let ingreso = {name:nombre, lastname: apellido, birthdate: fecha }
    fetch('https://jsonplaceholder.typicode.com/users', {
        method:"POST", 
        headers:{
            "Content-Type":"application/json" //Como tercer parametro defino el header de la llamada
        },
        body: JSON.stringify(ingreso)

    }).then((response) =>{ console.log('response', response)
    return response.json();


}).then(data => console.log('data', data))
}