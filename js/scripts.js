$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    var flavors = ["mint", "cookie-dough", "vanilla"];flavors.forEach(function(flavor) {
      $("#flavors").append("<li" + flavor + "</li>") 
    });
    $("#favorites").show();
    
  });  
});