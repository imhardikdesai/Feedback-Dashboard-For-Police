let graphicalViewbtn = document.getElementById("graphicalViewbtn");

function showGraphs() {

  if (document.getElementById("tabular").style.display === "none") {
    document.getElementById("tabular").style.display = "table";
    document.getElementById("allChartsBox").style.display = "none";
    graphicalViewbtn.innerHTML = "Graphical View";
  } else {
    document.getElementById("tabular").style.display = "none";
    document.getElementById("allChartsBox").style.display = "block";
    graphicalViewbtn.innerHTML = "Tabular View";


    fetch('http://localhost/HECKATHON/Feedback-Dashboard-For-Police/API/feedback.php')
      .then(response => response.json())
      .then(data => {
        function getQ1Answer(item) {
          if (item == "1") {
            return "Through a person known to a police officer"
          } else if (item == "2") {
            return "With a neighbour/ local leader"
          } else {
            return "On your own"
          }
        }
        function getQ2Answer(item) {
          if (item == "1") {
            return "More than 15 minutes"
          } else if (item == "2") {
            return "15 minutes"
          } else if (item == "3") {
            return "10 minutes"
          } else if (item == "4") {
            return "5 minutes"
          } else {
            return "Immediately"
          }
        }
        let str = ""
        data.forEach((item, index) => {
          str += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${item.p_id}</td>
        <td>${getQ1Answer(item.q1)}</td>
        <td>${getQ2Answer(item.q2)}</td>
        <td>${item.q3}</td>
        <td>${item.f_date}</td>`
        })
        document.getElementById('tbody').innerHTML = str
      })
      .catch(err => console.error(err));
  }

}


// if window size is less than 600 than 

// if (window.matchMedia("width: 600px").matches) {
// }

function myFunction(x) {
  if (x.matches) { // If media query matches
    alert("Please use a Desktop site for better experience");
  }
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
// x.addEventListener("onload", myFunction)