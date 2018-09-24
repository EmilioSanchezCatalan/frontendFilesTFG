"use strict";
$(document).ready(function(){

    // Inicialización del estado del formulario
    inputShowHiddenFunction($("#tutorCheck"), $("#tutorInput"));
    inputShowHiddenFunction($("#teamCheck"), $("#inputNumberStudent"));

    // Añade la funcionalidades a un evento
    $("#tutorCheck").click(() => {
        inputShowHiddenFunction($("#tutorCheck"), $("#tutorInput"))
    });
    $("#teamCheck").click(() => {
        inputShowHiddenFunction($("#teamCheck"), $("#inputNumberStudent"))
        initNoTeam($("#teamCheck"));
    });

    $("#refreshNumberStudents").click(() =>{
        generateSelect($("#inputNumberStudent"), $("#alumnoInput").closest(".form-group.row"));
    })
});

/**
 * Muestra u oculta un input vinculado a un checkbox
 * @param {HTMLInput} checkbox  checkbox que decidirá si mostrar o no el input
 * @param {HTMLInput} input     input que se mostrará o se ocultará
 */
function inputShowHiddenFunction(checkbox, input) {
    if(checkbox.is(':checked')) {   
        input.closest(".form-group.row").css('display', 'flex');
    } else {
        input.closest(".form-group.row").css('display', 'none');
    }
}

/**
 * Elimina los selectores de grupo y habilita el selector alumno único
 * @param {HTMLInput} checkbox  checkbox que decidirá si mostrar o no el input
 */
function initNoTeam(checkbox) {
if(!checkbox.is(':checked')) {
    $("#alumnoInput").closest(".form-group.row").css("display", "flex");
    $("select[id^='alumnoInputL']").closest(".form-group.row").remove();
} else {
    generateSelect($("#inputNumberStudent"), $("#alumnoInput").closest(".form-group.row"));
}
} 

/**
 * Genera el número de selectores alumno en función del número de alumnos introducidos.
 * @param {HTMLInput}   inputNumber     input tipo number con la cantidad de selectores a generar.
 * @param {HTMLDiv}     brotherElement  div apartir del cual se genraran los selectores y se clonaran.
 */
function generateSelect(inputNumber, brotherElement) {
    if (inputNumber.val() > 1) {
        $("select[id^='alumnoInputL']").closest(".form-group.row").remove();
        brotherElement.css("display", "none");
        for( let i = inputNumber.val(); i>=1; i--) {
        var new_element = brotherElement.clone();
        new_element.find("label").attr("for", "alumnoInputL" + i);
        new_element.find(".number").text(i);
        new_element.find("select").attr("id", "alumnoInputL" + i);
        new_element.css("display", "flex");
        brotherElement.after(new_element);
        }
    } else {
        alert('Es necesario que el numero de alumnos sea mayor de 1');
    }
}