$(document).ready(function() {
  var source = document.getElementById("entry-template").innerHTML;
  var template = Handlebars.compile(source);

//   Facciamo una chiamata ajax all'api di boolean.
$.ajax({

  "url": "https://flynn.boolean.careers/exercises/api/array/music",
  "method": "GET",
  "success": function (data, stato) {
    var listaDischi = data.response;
    // L'api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Handlebars.
    for (var i = 0; i < listaDischi.length; i++) {
      var html = template(listaDischi[i]);
      $("#cd-player").append(html);
    }
  },
  "error": function (richiesta, stato, errori) {
  alert("E' avvenuto un errore. " + errore);
  }
  });


// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.


});
