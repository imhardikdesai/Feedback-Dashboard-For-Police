let graphicalViewbtn = document.getElementById("graphicalViewbtn");

function showGraphs() {

  if (document.getElementById("tabular").style.display === "none") {
    document.getElementById("tabular").style.display = "table";
    document.getElementById("allChartsBox").style.display = "none";
    graphicalViewbtn.innerHTML = "Tabular View";
  } else {
    document.getElementById("tabular").style.display = "none";
    document.getElementById("allChartsBox").style.display = "block";
    graphicalViewbtn.innerHTML = "Graphical View";
  }

}


