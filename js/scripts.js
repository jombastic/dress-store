$(function() {
  $("input.dresses").click(function() {
    var clickedRadio = $("input:radio[name=dressColor]:checked").val();
    $("img").hide();
    $("img#" + clickedRadio).show();
  });
});
