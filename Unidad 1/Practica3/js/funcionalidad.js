function mostrarRelaciones() {
    var auto_corredor = document.getElementById("autosC").value;
    var corredor_auto = document.getElementById("corredoresA").value;
    var auto_escuderia = document.getElementById("autosE").value;
    var escuderia_auto = document.getElementById("escuderiaA").value;

    alert("El auto con id: " + auto_corredor + " pertenece al corredor con id: " + corredor_auto);
    alert("El auto con id: " + auto_escuderia + " pertenece a la escuderia con id: " + escuderia_auto);
}

function mostrarCorredor() {
    var nombre = document.getElementById("nombreP").value;
    var apellidoPaterno = document.getElementById("apellidoP").value;
    var apellidoMaterno = document.getElementById("apellidoM").value;
    var edadSelect = document.getElementById("edadP");
    var edad = edadSelect.options[edadSelect.selectedIndex].text;
    var generoSeleccionado = document.querySelector('input[name="generoP"]:checked');
    var genero = generoSeleccionado ? generoSeleccionado.value : "No seleccionado";
    var foto = document.getElementById("fotoC").files[0];

    alert("Nombre: " + nombre);
    alert("Apellido paterno: " + apellidoPaterno);
    alert("Apellido materno: " + apellidoMaterno);
    alert("Edad: " + (edadSelect.value === "Vacio" ? "No seleccionada" : edad));
    alert("Genero: " + genero);
    alert("Foto: " + (foto ? foto.name : "No seleccionada"));
}

function mostrarAuto() {
    var modelo = document.getElementById("modeloC").value;
    var color = document.getElementById("colorC").value;
    var foto = document.getElementById("fotoA").value;
    var activoSeleccionado = document.querySelector('input[name="activoC"]:checked');
    var activo = activoSeleccionado ? activoSeleccionado.value : "No seleccionado";

    alert("Modelo: " + modelo);
    alert("Color: " + color);
    alert("Foto: " + foto);
    alert("Activo: " + activo);
}

function mostrarEscuderia() {
    var nombre = document.getElementById("nombreE").value;
    var descripcion = document.getElementById("descripcionE").value;

    alert("Nombre de la escuderia: " + nombre);
    alert("Descripcion: " + descripcion);
}


