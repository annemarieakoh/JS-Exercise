function displayCourseMechanics(){
  var checkbox = document.getElementById("course1");
  var text = document.getElementsByClassName("mechanics");
  if (checkbox.checked == true){
    $(text).show();
  }
  else{
    $(text).hide();
  }
  function changeColourMechanics(){
    var tableDataBackground = document.getElementsByClassName("mechanics")'
    let colour = document.getElementById("course1background").value;
    tableDataBackground.body.style.backgroundColor = colour
  }
}

function displayCourseComputerScience(){
  var checkbox = document.getElementById("course2");
  var text = document.getElementsByClassName("computerscience");
  if (checkbox.checked == true){
    $(text).show();
  }
  else{
    $(text).hide();
  }
}

function displayCourseEnglish(){
  var checkbox = document.getElementById("course3");
  var text = document.getElementsByClassName("english");
  if (checkbox.checked == true){
    $(text).show();
  }
  else{
    $(text).hide();
  }
}

function displayCourseMaths(){
  var checkbox = document.getElementById("course4");
  var text = document.getElementsByClassName("maths");
  if (checkbox.checked == true){
    $(text).show();
  }
  else{
    $(text).hide();
  }
}

function displayCourseFreshmanQuiz(){
  var checkbox = document.getElementById("course5");
  var text = document.getElementsByClassName("freshmanquiz");
  if (checkbox.checked == true){
    $(text).show();
  }
  else{
    $(text).hide();
  }
}

function displayCourseWebDev(){
  var checkbox = document.getElementById("course6");
  var text = document.getElementsByClassName("webdev");
  if (checkbox.checked == true){
    $(text).show();
  }
  else{
    $(text).hide();
  }
}
