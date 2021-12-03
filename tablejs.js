function displayCourse(){
  var checkbox = document.getElementById("course1");
  var text = document.getElementsByClassName("mechanics");
  if (checkbox.checked == true){
    $(".mechanics").show();
  };
  else{
    $(".mechanics").hide();
  };
}
