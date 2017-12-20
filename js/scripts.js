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

    $("#chosenDress").show();


    $("#buyerFieldset").removeAttr("disabled");
  });

  $("#buyerInfo").submit(function(event) {
    event.preventDefault();

    var buyerName = $("#buyerName").val();
    var buyerAddress = $("#buyerAddress").val();
    var buyerCity = $("#buyerCity").val();
    var phoneNumber = $("#phoneNumber").val();

    $("#contactName").text(buyerName);
    $("#contactAddress").text(buyerAddress);
    $("#contactCity").text(buyerCity);
    $("#contactNumber").text(phoneNumber);

    $("#dressFieldset").attr("disabled", "true");
    $("#buyerFieldset").attr("disabled", "true");

    $("#contactInfo").show();
    $("#purchase").show();
  });

  $("#edit").click(function() {
    $("#contactInfo").hide();
    $("#purchase").hide();
    $("#buyerFieldset").removeAttr("disabled");
  });
});

var modal = document.getElementById('purchaseNotise');
var btn = document.getElementById("purchase");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
