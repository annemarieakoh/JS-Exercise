function displayCourse(){
  var checkbox = document.getElementById("course1");
  var text = document.getElementsByClassName("mechanics");
  if (checkbox.checked == true){
    $(text).show();
  };
  else{
    $(text).hide();
  };
}
