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
    };
    // Bonus:
    // Creare una select con i seguenti generi: pop, rock, metal e jazz.
    // In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.
    $("#genre option").click(
      function() {
        var genreOption = $(this).val();
        if (genreOption != "All") {
          var cds = $(".cd").each(
            function() {
              var attribute = $(this).attr("data-genre");
              if (attribute != genreOption) {
                $(this).hide();
              } else {
                $(this).show();
              }
            }
          )
        } else {
          $(".cd").show();
        }


      }
    );
  },
  "error": function (richiesta, stato, errori) {
  alert("E' avvenuto un errore. " + errore);
  }
  });






});
