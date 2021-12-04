function hideAllExtra(){
  var extramechanics = document.getElementsByClassName("extracellmechanics");
  var extracomputerscience = document.getElementsByClassName("extracellcomputerscience");
  var extraenglish = document.getElementsByClassName("extracellenglish");
  var extramaths = document.getElementsByClassName("extracellmaths");
  var extrafreshmanquiz = document.getElementsByClassName("extracellfreshmanquiz");
  var extrawebdev = document.getElementsByClassName("extracellwebdev");
  $(extramechanics).hide();
  $(extracomputerscience).hide();
  $(extraenglish).hide();
  $(extramaths).hide();
  $(extrafreshmanquiz).hide();
  $(extrawebdev).hide();
}

function displayCourseMechanics(){
  var checkbox = document.getElementById("course1");
  var text = document.getElementsByClassName("mechanics");
  var extra = document.getElementsByClassName("extracellmechanics");
  if (checkbox.checked == true){
    $(text).show(); 
    $(extra).hide();
  }
  else{
    $(text).hide(); 
    $(extra).show();
  }
}
function displayColourMechanics(){
  $('.mechanics').css("background-color", $("#course1background").val());
}
function displayCourseComputerScience(){
  var checkbox = document.getElementById("course2");
  var text = document.getElementsByClassName("computerscience");
  var extra = document.getElementsByClassName("extracellcomputerscience");
  if (checkbox.checked == true){
    $(text).show();
    $(extra).hide();
  }
  else{
    $(text).hide();
    $(extra).show();
  }
}
function displayColourComputerScience(){
  $('.computerscience').css("background-color", $("#course2background").val());
}
function displayCourseEnglish(){
  var checkbox = document.getElementById("course3");
  var text = document.getElementsByClassName("english");
  var extra = document.getElementsByClassName("extracellenglish");
  if (checkbox.checked == true){
    $(text).show();
    $(extra).hide();
  }
  else{
    $(text).hide();
    $(extra).show();
  }
}
function displayColourEnglish(){
  $('.english').css("background-color", $("#course3background").val());
}
function displayCourseMaths(){
  var checkbox = document.getElementById("course4");
  var text = document.getElementsByClassName("maths");
  var extra = document.getElementsByClassName("extracellmaths");
  if (checkbox.checked == true){
    $(text).show();
    $(extra).hide();
  }
  else{
    $(text).hide();
    $(extra).show();
  }
}
function displayColourMaths(){
  $('.maths').css("background-color", $("#course4background").val());
}
function displayCourseFreshmanQuiz(){
  var checkbox = document.getElementById("course5");
  var text = document.getElementsByClassName("freshmanquiz");
  var extra = document.getElementsByClassName("extracellfreshmanquiz");
  if (checkbox.checked == true){
    $(text).show();
    $(extra).hide();
  }
  else{
    $(text).hide();
    $(extra).show();
  }
}
function displayColourFreshmanQuiz(){
  $('.freshmanquiz').css("background-color", $("#course5background").val());
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
function displayColourWebDev(){
  $('.webdev').css("background-color", $("#course6background").val());
}
