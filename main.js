let calories = 0;
$(document).ready(function() {
    $( "#one" ).click(function() {
        $(".itemlist ").append('<li> Csirkehús <i>239</i> </li>');
        calories += 239;
        let button = createDeleteButton()
        $("#caloriecounter ").text('A jelenlegi kalória mennyisége: ' + JSON.stringify(calories));
      });
      $( "#two" ).click(function() {
        $(".itemlist ").append('<li> Narancslé <i>71</i> </li>');
        calories += 71;
        $("#caloriecounter ").text('A jelenlegi kalória mennyisége: ' + JSON.stringify(calories));
      });
      $( "#three" ).click(function() {
        $(".itemlist ").append('<li> Marhahús <i>271</i> </li>');
        calories += 271;
        $("#caloriecounter ").text('A jelenlegi kalória mennyisége: ' + JSON.stringify(calories));
      });

      $("#delete").click(function() {
        calories = 0;
        $("#caloriecounter ").text('A jelenlegi kalória mennyisége: ' + JSON.stringify(calories));
        $( ".itemlist" ).empty();
      })
})

function createDeleteButton() {
    return $('<button/>', {
        text: 'Törlés',
        id: 'btn_delete',
        click: function (){$(this).empty()}
    });
}