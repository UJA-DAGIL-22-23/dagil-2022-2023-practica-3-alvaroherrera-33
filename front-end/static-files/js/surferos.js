"use strict";

/// Creo el espacio de nombres
let Surferos = {};


Surferos.plantillaTags = {
    "ID": "### ID ###",
    "NOMBRE": "### NOMBRE ###",
    "APELLIDOS": "### APELLIDOS ###",
    "LUGAR NACIMIENTO": "### LUGAR NACIMIENTO ###",
    "NUM CAMPEONATOS DISPUTADOS": "### NUM CAMPEONATOS DISPUTADOS ###",
    "AÑOS COMPITIENDO": "### AÑOS COMPITIENDO ###",
    "PUNTUACION": "### PUNTUACION ###",
    "NUM VICTORIAS": "### NUM VICTORIAS ###",
}

/// Plantilla para poner los datos de varias personas dentro de una tabla
Surferos.plantillaTablaPersonas = {}


// Cabecera de la tabla
Surferos.plantillaTablaPersonas.cabecera = `<table width="100%" class="listado-personas">
                    <thead>
                        <th width="10%">Id</th>
                        <th width="20%">Nombre</th>
                        <th width="20%">Apellidos</th>
                        <th width="10%">Lugar nacimiento</th>
                        <th width="15%">Numero de campeonatos disputados</th>
                        <th width="15%">Años compitiendo</th>
                        <th width="15%">Puntuación</th>
                        <th width="15%">Numero de victorias</th>
                    </thead>
                    <tbody>
    `;

// Elemento TR que muestra los datos de una persona
Surferos.plantillaTablaPersonas.cuerpo = `
    <tr title="${Surferos.plantillaTags.ID}">
        <td>${Surferos.plantillaTags.ID}</td>
        <td>${Surferos.plantillaTags.NOMBRE}</td>
        <td>${Surferos.plantillaTags.APELLIDOS}</td>
        <td>${Surferos.plantillaTags["LUGAR NACIMIENTO"]}</td>
        <td>${Surferos.plantillaTags["NUM CAMPEONATOS DISPUTADOS"]}</td>
        <td>${Surferos.plantillaTags["AÑOS COMPITIENDO"]}</td>
        <td>${Surferos.plantillaTags.PUNTUACION}</td>
        <td>${Surferos.plantillaTags["NUM VICTORIAS"]}</td>

        <td>
                    <div><a href="javascript:Personas.mostrar('${Surferos.plantillaTags.ID}')" class="opcion-secundaria mostrar">Mostrar</a></div>
        </td>
    </tr>
    `;

// Pie de la tabla
Surferos.plantillaTablaPersonas.pie = `        </tbody>
             </table>
             `;



/**
 * Actualiza el cuerpo de la plantilla deseada con los datos de la persona que se le pasa
 * @param {String} Plantilla Cadena conteniendo HTML en la que se desea cambiar lso campos de la plantilla por datos
 * @param {surfero} Surferos Objeto con los datos de la surfero que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados 
 */           
Surferos.sustituyeTags = function (plantilla, surfero) {
    return plantilla
        .replace(new RegExp(Surferos.plantillaTags.ID, 'g'), surfero.ref['@ref'].id)
        .replace(new RegExp(Surferos.plantillaTags.NOMBRE, 'g'), surfero.data.nombre)
        .replace(new RegExp(Surferos.plantillaTags.APELLIDOS, 'g'), surfero.data.apellidos)
        .replace(new RegExp(Surferos.plantillaTags["LUGAR NACIMIENTO"], 'g'), surfero.data.lugar_nacimiento)
        .replace(new RegExp(Surferos.plantillaTags["NUM CAMPEONATOS DISPUTADOS"], 'g'), surfero.data.num_campeonatos_disputados)
        .replace(new RegExp(Surferos.plantillaTags["AÑOS COMPITIENDO"], 'g'), surfero.data.años_compitiendo)
        .replace(new RegExp(Surferos.plantillaTags.PUNTUACION, 'g'), surfero.data.puntuacion)
        .replace(new RegExp(Surferos.plantillaTags["NUM VICTORIAS"], 'g'), surfero.data.numvictorias)
}

/**
 * Actualiza el cuerpo de la tabla con los datos de la persona que se le pasa
 * @param {Surferos} Surferos Objeto con los datos de la persona que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados 
 */
Surferos.plantillaTablaPersonas.actualiza = function (surfero) {
    return Surferos.sustituyeTags(this.cuerpo, surfero)
}


/**
 * Función para mostrar en pantalla todas las personas que se han recuperado de la BBDD.
 * @param {Vector_de_personas} vector Vector con los datos de las personas a mostrar
 */

Surferos.imprimeMuchasPersonas = function (vector) {
    // console.log(vector) // Para comprobar lo que hay en vector

    // Compongo el contenido que se va a mostrar dentro de la tabla
    let msj = Surferos.plantillaTablaPersonas.cabecera
    vector.forEach(e => msj += Surferos.plantillaTablaPersonas.actualiza(e))
    msj += Surferos.plantillaTablaPersonas.pie

    // Borro toda la info de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Listado de personas", msj)
}

/**
 * Función que recuperar todas las personas llamando al MS Personas
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */

Surferos.recupera = async function (callBackFn) {
    let response = null

    // Intento conectar con el microservicio personas
    try {
        const url = Frontend.API_GATEWAY + "/surferos/getTodas"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todas las persoans que se han descargado
    let vectorPersonas = null
    if (response) {
        vectorPersonas = await response.json()
        callBackFn(vectorPersonas.data)
    }
}

/**
 * Función principal para recuperar las personas desde el MS y, posteriormente, imprimirlas.
 */
Surferos.listar = function () {
    Surferos.recupera(Surferos.imprimeMuchasPersonas);
}

/**
 * Función principal para responder al evento de elegir la opción "Acerca de"
 */
Surferos.procesarListaNombres = function () {
    this.descargarRuta("/surferos/getTodas", this.imprimeMuchasPersonas);
}
