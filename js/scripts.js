$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var choice = ["flavors", "scoops", "bowls"];
    var order = [];

    choices.forEach(function(choice) {
      var userInput = $("select#"+choice).val();
      $("." + choice).text(userInput);
      
    });

    yourOrder.forEach(function(item) {
      $("#order").append("<li>"+item+"</li>");
    })
  
    $(".name").text(name);
    $("#order").show();
  });
});