let totalRep = document.getElementById("totalRep");
let todayRep = document.getElementById("todayRep");
let monthRep = document.getElementById("monthRep");

totalRep.innerHTML = parseInt(todayRep.innerText) + parseInt(monthRep.innerText);