boton_enviar = document.getElementById("boton-enviar");
tbody = document.getElementById("body");
formulario = document.getElementById("formulario");
var botones = document.getElementById("aceptar");
var borrar = document.getElementById("cancelar");
var enviar = document.getElementById("enviar");
var pagina1 = document.getElementById("formulario");
var resultado = document.getElementById("resultado");

let contador = 0
let editando = false

editar = (e) => {

    element = e.closest("tr")
    if (editando){
        alert("error")
        return
    }
    editando=true
    e.innerHTML = "Editando"

    // agregar un input para editar el valor de la fila
    element.children[0].innerHTML = `<input class="form_input" type="text" value="${element.children[0].textContent.trim()}" name="gusto">`
    element.children[1].innerHTML = `<input class="form_input" type="text" value="${element.children[1].textContent.trim()}" name="porc">`

    element.children[0].focus()
    // backgroundcolor dimgray to elemnt
    element.children[0].style.backgroundColor = "#ddd"
    element.children[1].style.backgroundColor = "#ddd"


    document.getElementById('confirmacion').innerHTML += confirmacion

    // agregue dos inputs ocultos para guardar los valores anteriores de la fila y asi poder enviarlos al servidor
    console.log(element.children[0].textContent.trim())
    console.log(confirmacion.innerHTML)

}

boton_enviar.addEventListener("click", function(){
    contador += 1


    prop = document.getElementById("gusto").value;

    tr = tbody.insertRow(-1).innerHTML = `
    <td class='content'>
        ${prop}
    </td>
    <td name="gusto">
    0
    </td>
    <td>
    <a onclick="editar(this)">Editar<a>
    </td>
` 
botones.style.display = "block";
});

borrar.addEventListener("click",function(){
    window.location.reload();
});


enviar.addEventListener("click",function(){

    pagina1.style.display = "none";

    const valorurl = window.location.search;
    const urlparametros = new URLSearchParams(valorurl);
    var gusto_data = urlparametros.get("gusto");
    var porcentaje_data = urlparametros.get("porcentaje");
    var nombre_data = urlparametros.get("nombrecompleto");
    var email_data =urlparametros.get("emailinput");
    var telefono_data = urlparametros.get("telefonoinput");
    document.body.getElementsByClassName("nombreregistro")[0].textContent = nombre_data;
    document.body.getElementsByClassName("emaildato")[0].textContent = email_data;
    document.body.getElementsByClassName("telefonodato")[0].textContent = telefono_data;
    document.body.getElementsByClassName("gusto_final")[0].textContent = gusto_data;
    document.body.getElementsByClassName("porcentaje_final")[0].textContent = porcentaje_data;

    resultado.style.display = "block";
});







