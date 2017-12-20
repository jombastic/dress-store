$(function() {
  $("input.dresses").click(function() {
    var clickedRadio = $("input:radio[name=dressColor]:checked").val();
    $("img").hide();
    $("img#" + clickedRadio).show();
  });

  $("#product").submit(function(event) {
    event.preventDefault();

    var dressColor = $("input:radio[name=dressColor]:checked").val();
    var dressSize = $("#dressSize").val();

    if (dressColor === "red") {
      $("#picture").html("<img src='img/red-dress.jpg' class='img-responsive' />");
    } else if (dressColor === "blue") {
      $("#picture").html("<img src='img/blue-dress.jpg' class='img-responsive' />");
    } else if (dressColor === "yellow") {
      $("#picture").html("<img src='img/yellow-dress.jpg' class='img-responsive' />");
    }

    $("#chosenColor").text(dressColor);
    $("#chosenSize").text(dressSize);

    $("fieldset").removeAttr("disabled");
  });
});
