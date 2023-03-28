

// SPECS para Jasmine
describe("Pie table ", function () {
    it("debería devolver las etiquetas HTML para el pie de tabla",
        function () {
            expect(Surferos.plantillaTablaNombres.pie()).toBe("</tbody></table>");
        });
});

describe("Cuerpo table ", function () {
    it("debería devolver las etiquetas HTML para el cuerpo de tabla",
        function () {
            expect(Surferos.plantillaTablaNombres.cuerpo()).toBe(
                "<tr title='${Surferos.plantillaTags.ID}'><td>${Surferos.plantillaTags.ID}</td><td>${Surferos.plantillaTags.NOMBRE}</td></tr>");
        });
});

describe("Cabecera table ", function () {
    it("debería devolver las etiquetas HTML para la cabecera de tabla",
        function () {
            expect(Surferos.plantillaTablaNombres.cabecera()).toBe("<style>table, th, td {border: 1px solid black;}</style><table width='100%'' class='listado-personas'><thead><th width='15%''>Id</th><th width='10%''>Nombre</th></thead><tbody>");
        });
});

describe("imprimeMuchasPersona ", function () {

    // Preparo los datos
    let d = {
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
    

    let p = { data: d }

    // Realizo los expect
    it("debería devolver una tabla con los datos de un surfero",
        function () {
            let msj = Surferos.imprimeMuchasPersonas(p)
            expect(msj.includes(d.nombre)).toBeTrue();
            expect(msj.includes(d.apellidos)).toBeTrue();
            expect(msj.includes(d.lugarNacimiento.ciudad)).toBeTrue();
            expect(msj.includes(d.lugarNacimiento.pais)).toBeTrue();
            expect(msj.includes(d.numCampeonatosDisputados.cantidad)).toBeTrue();
            expect(msj.includes(d.numCampeonatosDisputados.evento)).toBeTrue();
            expect(msj.includes(d.puntuacion)).toBeTrue();
            expect(msj.includes(d.numVictorias)).toBeTrue();
        });

        it("debería devolver una tabla con el nombre de un surfero",
        function () {
            let msj = Surferos.imprimeMuchasPersonasN(p)
            expect(msj.includes(d.nombre)).toBeTrue();
        });


        describe("Surferos.sustituyeTags", () => {
            const plantilla = `
              <tr>
                <td>{ID}</td>
                <td>{NOMBRE} {APELLIDOS}</td>
                <td>{CIUDAD}, {PAIS}</td>
                <td>{NUM} {EVENTO}</td>
                <td>{AÑOS COMPITIENDO}</td>
                <td>{PUNTUACION}</td>
                <td>{NUM VICTORIAS}</td>
              </tr>
            `;
            const surfero = {
              ref: { "@ref": { id: "1" } },
              data: {
                nombre: "John",
                apellidos: "Doe",
                lugarNacimiento: { ciudad: "Los Angeles", pais: "Estados Unidos" },
                numCampeonatosDisputados: { cantidad: 10, evento: "Mundial" },
                añosCompitiendo: 5,
                puntuacion: 8.5,
                numVictorias: 3,
              },
            };
            const expectedOutput = `
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Los Angeles, Estados Unidos</td>
                <td>10 Mundial</td>
                <td>5</td>
                <td>8.5</td>
                <td>3</td>
              </tr>
            `;
          
            it("reemplaza todas las etiquetas de la plantilla con los datos del surfero", () => {
              const output = Surferos.sustituyeTags(plantilla, surfero);
              expect(output).toEqual(expectedOutput);
            });
          });

          const actualizaTabla = require('/surferos/getTodas');
          test('actualizaTabla actualiza correctamente el cuerpo de la tabla', () => {
            // Define los datos de entrada y salida esperados
            const surfero = {
                nombre: "Italo"};
            const cuerpoEsperado = '<<tr 359438193264689357><td></td><td>Italo</td></tr>';
          
            // Llama a la función a probar
            const cuerpoActualizado = actualizaTabla(surfero);
          
            // Comprueba que el resultado de la función es el esperado
            expect(cuerpoActualizado).toBe(cuerpoEsperado);
          });

        it("debería devolver un valor true demostrando que devuelve algo",
        function () {
            expect(Surferos.listar().toBeTrue());
        });

        it("debería devolver un valor true demostrando que devuelve algo",
        function () {
            expect(Surferos.listarNombres().toBeTrue());
        });


        
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
          

});