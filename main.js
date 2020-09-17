$(document).ready(function() {
//   Facciamo una chiamata ajax all'api di boolean.
$.ajax({

  "url": "https://flynn.boolean.careers/exercises/api/array/music",
  "method": "GET",
  "success": function (data, stato) {
    console.log(data.response);
    // L'api ci restituirà decina di dischi musicali che dovremo stampare a schermo con Handlebars.

  },
  "error": function (richiesta, stato, errori) {
  alert("E' avvenuto un errore. " + errore);
  }
  });

//
// Concentratevi sulla parte JS per la grafica potrete utilizzare il layout che troverete al seguente link
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout/downloads/
// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.


});
