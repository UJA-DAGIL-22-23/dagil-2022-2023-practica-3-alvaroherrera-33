"use strict";

/// Creo el espacio de nombres
let Surferos = {};



/**
 * Actualiza el cuerpo de la plantilla deseada con los datos de la persona que se le pasa
 * @param {String} Plantilla Cadena conteniendo HTML en la que se desea cambiar lso campos de la plantilla por datos
 * @param {Persona} Surferos Objeto con los datos de la persona que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados 
 */           
Personas.sustituyeTags = function (plantilla, persona) {
    return plantilla
        .replace(new RegExp(Surferos.plantillaTags.ID, 'g'), persona.ref['@ref'].id)
        .replace(new RegExp(Surferos.plantillaTags.NOMBRE, 'g'), persona.data.nombre)
        .replace(new RegExp(Surferos.plantillaTags.APELLIDOS, 'g'), persona.data.apellidos)
        .replace(new RegExp(Surferos.plantillaTags.EMAIL, 'g'), persona.data.email)
        .replace(new RegExp(Surferos.plantillaTags["AÑO ENTRADA"], 'g'), persona.data.año_entrada)
}

/**
 * Actualiza el cuerpo de la tabla con los datos de la persona que se le pasa
 * @param {Surferos} Surferos Objeto con los datos de la persona que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados 
 */
Surferos.plantillaTablaPersonas.actualiza = function (persona) {
    return Surferos.sustituyeTags(this.cuerpo, persona)
}


/**
 * Función para mostrar en pantalla todas las personas que se han recuperado de la BBDD.
 * @param {Vector_de_personas} vector Vector con los datos de las personas a mostrar
 */

Surferos.imprimeMuchasPersonas = function (vector) {
    // console.log(vector) // Para comprobar lo que hay en vector

    // Compongo el contenido que se va a mostrar dentro de la tabla
    let msj = Personas.plantillaTablaPersonas.cabecera
    vector.forEach(e => msj += Personas.plantillaTablaPersonas.actualiza(e))
    msj += Personas.plantillaTablaPersonas.pie

    // Borro toda la info de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Listado de personas", msj)
}
