let calories = 0;
$(document).ready(function() {
    $( "#one" ).click(function() {
        $(".itemlist ").append('<li> Csirkehús <i>239</i> </li>');
        calories += 239;
      });
      $( "#two" ).click(function() {
        $(".itemlist ").append('<li> Narancslé <i>71</i> </li>');
        calories += 71;
      });
      $( "#three" ).click(function() {
        $(".itemlist ").append('<li> Marhahús <i>271</i> </li>');
        calories += 271;
      });
})