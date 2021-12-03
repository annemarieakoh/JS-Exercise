function displayCourse(){
  var checkbox = document.getElementById("course1");
  var text = document.getElementsByClassName("mechanics");
  if (checkbox.checked == true){
    $("#show").click(function(){
    $(".mechanics").show();
  });
  } else{
    $("#hide").click(function(){
    $(".mechanics").hide();
  });
  }
}
