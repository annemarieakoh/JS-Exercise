function displayCourseMechanics(){
  var checkbox = document.getElementById("course1");
  var text = document.getElementsByClassName("mechanics");
  var extra = document.getElementsByClassName("extracellmechanics");
  var extracomputerscience = document.getElementsByClassName("extracellcomputerscience");
  if (checkbox.checked == true){
    $(text).show(); 
    $(extra).hide();
    $(extracomputerscience).show();
  }
  else{
    $(text).hide(); 
    $(extra).show();
    $(extracomputerscience).show();
  }
}

function changeColourMechanics(){
  var colour = document.getElementById("course1background").value;
  document.getElementsByClassName("mechanics").style.backgroundColor = colour;
}

function displayCourseComputerScience(){
  var checkbox = document.getElementById("course2");
  var text = document.getElementsByClassName("computerscience");
  var extra = document.getElementsByClassName("extracellcomputerscience");
  var extramechanics = document.getElementsByClassName("extracellmechanics");
  if (checkbox.checked == true){
    $(text).show();
    $(extra).hide();
    $(extramechanics).show();
  }
  else{
    $(text).hide();
    $(extra).show();
    $(extramechanics).show();
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
  var extra = document.getElementsByClassName("extracellwebdev");
  if (checkbox.checked == true){
    $(text).show();
    $(extra).hide();
  }
  else{
    $(text).hide();
    $(extra).show();
  }
}
