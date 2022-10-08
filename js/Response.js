let graphicalViewbtn = document.getElementById("graphicalViewbtn");

graphicalViewbtn.addEventListener("click", function () {
  if (document.getElementById("allChartsBox").style.display === "none") {
    document.getElementById("allChartsBox").style.display = "block";
  } else {
    document.getElementById("allChartsBox").style.display = "none";
  }

});


