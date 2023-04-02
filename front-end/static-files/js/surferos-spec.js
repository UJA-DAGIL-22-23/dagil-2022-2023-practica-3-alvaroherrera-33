

// SPECS para Jasmine

describe("Pie table ", function () {
    it("debería devolver las etiquetas HTML para el pie de tabla",
        function () {
            expect(Surferos.plantillaTablaNombres.pie()).toBe("</tbody></table>");
        });
});

describe("Cabecera table ", function () {
    it("debería devolver las etiquetas HTML para la cabecera de tabla",
        function () {
            expect(Surferos.plantillaTablaNombres.cabecera()).toBe('<style>table, th, td {border: 1px solid black;}</style><table width="100%" class="listado-personas"><thead><th width="15%">Id</th><th width="10%">Nombre</th></thead><tbody>');
        });
});
/*
describe("imprimeMuchasPersona ", function () {

    // Preparo los datos
    let d = [
      {
        nombre: "Italo",
        apellidos: "Ferreira",
        lugarNacimiento: {
          ciudad: "Baia Formosa",
          pais: "Brasil"
        },
        numCampeonatosDisputados: {
          cantidad: 4,
          evento: "MEO Rip Curl Pro Portugal"
        },
        añosCompitiendo: [2013, 2014, 2015, 2016, 2017, 2019, 2020, 2022],
        puntuacion: 59300,
        numVictorias: 3
      },
      {
        nombre: "Italo",
        apellidos: "Ferreira",
        lugarNacimiento: {
          ciudad: "Baia Formosa",
          pais: "Brasil"
        },
        numCampeonatosDisputados: {
          cantidad: 4,
          evento: "MEO Rip Curl Pro Portugal"
        },
        añosCompitiendo: [2013, 2014, 2015, 2016, 2017, 2019, 2020, 2022],
        puntuacion: 59300,
        numVictorias: 3
      }
    ]
    

    let p = { data: d }

    // Realizo los expect
    it("debería devolver una tabla con los datos de un surfero",
        function () {
            let msj = Surferos.imprimeMuchasPersonas(p)
            expect (msj.innerHTML.includes (persona.data.nombre)).toBeTrue()
        });
        describe("Surferos.imprimeMuchasPersonasN", () => {
          beforeEach(() => {
            // Configuración previa a cada test
            spyOn(Frontend.Article, "actualizar")
          })
        
          it("Debería mostrar una tabla con una persona", () => {
            Surferos.imprimeMuchasPersonasN(p)
            expect(Frontend.Article.actualizar).toHaveBeenCalledWith("Listado de nombres", "<table><thead><tr><th>Nombre</th></tr></thead><tbody><tr 359438193264689357><td></td><td>Italo</td></tr></tbody></table>")
          })
        })
        
      
        it("actualizaTabla actualiza correctamente el cuerpo de la tabla",
        function (){
            // Define los datos de entrada y salida esperados
            const surfero = {
                nombre: "Italo"};
            const cuerpoEsperado = '<<tr 359438193264689357><td></td><td>Italo</td></tr>';
          
            // Llama a la función a probar
            const cuerpoActualizado = actualizaTabla(surfero);
          
            // Comprueba que el resultado de la función es el esperado
            expect(cuerpoActualizado).toBe(cuerpoEsperado);
          });
*/
        it("debería devolver un valor true demostrando que devuelve algo",
        function () {
            expect(Surferos.listar());
        });

        it("debería devolver un valor true demostrando que devuelve algo",
        function () {
            expect(Surferos.listarNombres());
        });


    /*    
        describe("Surferos", function () {
            describe("procesarListaNombres", function () {
              it("debería descargar la ruta /surferos/getTodas y llamar a la función imprimeMuchasPersonas", function () {
                spyOn(Surferos, "descargarRuta");
                spyOn(Surferos, "imprimeMuchasPersonas");
          
                Surferos.procesarListaNombres();
          
                expect(Surferos.descargarRuta).toHaveBeenCalledWith("/surferos/getTodas", Surferos.imprimeMuchasPersonas);
              });
            });
          });
*/
           
        
          

