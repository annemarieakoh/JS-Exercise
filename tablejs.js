function displayCourse(){
  var checkbox = document.getElementById("course1");
  var text = document.getElementsById("mechanics");
  if (checkbox.checked == true){
    text.style.display = "block";
  } else{
    text.style.display = "none";
  }
}
