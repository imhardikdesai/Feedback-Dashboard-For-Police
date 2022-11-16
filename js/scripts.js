// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");


function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

function hideChart(first, second) {
  document.getElementById(`${first}`).style.display = "none";
  document.getElementById(`${second}`).style.display = "none";
}

function updatedArraytoHide(chartID) {
  let chartarray = ["pieChart", "barChart", "histroChart"];
  let hiddenElements = []
  for (let i = 0; i < chartarray.length; i++) {
    if (chartID === chartarray[i]) {
      continue;
    } else {
      hiddenElements.push(chartarray[i])
    }
  }
  hideChart(hiddenElements[0], hiddenElements[1])
}

// hideChart("pieChart", "barChart");
function showChart(chartID) {
  document.getElementById(`${chartID}`).style.display = "block";

  updatedArraytoHide(chartID)
}


let numbers = [41, 65, 90, 31, 37, 53, 49, 87, 43, 83, 40, 30, 51, 32, 67, 48, 97, 56, 48, 60, 32, 89, 67, 32, 77, 75, 98, 32, 45, 52, 80, 41, 68, 37]
let cityArr = ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha (Palanpur)', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udepur', 'Dahod', 'Dangs (Ahwa)', 'Devbhoomi Dwarka', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kachchh', 'Kheda (Nadiad)', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada (Rajpipla)', 'Navsari', 'Panchmahal (Godhra)', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha (Himmatnagar)', 'Surat', 'Surendranagar', 'Tapi (Vyara)', 'Vadodara', 'Valsad']

// const cityObj = {
//   "Ahmedabad": 41,
//   "Amreli": 65,
//   "Anand": 90,
//   "Aravalli": 31,
//   "Banaskantha (Palanpur)": 37,
//   "Bharuch": 53,
//   "Bhavnagar": 49,
//   "Botad": 87,
//   "Chhota Udepur": 43,
//   "Dahod": 83,
//   "Dangs (Ahwa)": 40,
//   "Devbhoomi Dwarka": 30,
//   "Gandhinagar": 51,
//   "Gir Somnath": 32,
//   "Jamnagar": 67,
//   "Junagadh": 48,
//   "Kachchh": 97,
//   "Kheda (Nadiad)": 56,
//   "Mahisagar": 48,
//   "Mehsana": 60,
//   "Morbi": 32,
//   "Narmada (Rajpipla)": 89,
//   "Navsari": 67,
//   "Panchmahal (Godhra)": 32,
//   "Patan": 77,
//   "Porbandar": 75,
//   "Rajkot": 98,
//   "Sabarkantha (Himmatnagar)": 32,
//   "Surat": 45,
//   "Surendranagar": 52,
//   "Tapi (Vyara)": 80,
//   "Vadodara": 41,
//   "Valsad": 68
// };

// const sortObject = cityObj => {
//   const sorter = (a, b) => {
//     return cityObj[a] - cityObj[b];
//   };
//   const keys = Object.keys(cityObj);
//   keys.sort(sorter);
//   const res = {};
//   keys.forEach(key => {
//     res[key] = cityObj[key];
//   });
//   return res;
// };

function decOrder() {
  numbers = numbers.sort()
  numbers = numbers.reverse()
  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();
}
function incOrder() {
  numbers = numbers.sort()
  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();
}

// document.getElementById('decOrder').addEventListener('click', () => {
//   numbers = numbers.sort()
//   numbers = numbers.reverse()
// })
// document.getElementById('incOrder').addEventListener('click', () => {
//   numbers = numbers.sort()
// })

// random number array 
// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
  series: [{
    data: numbers,
    name: "Feedbacks",
  }],
  chart: {
    type: "bar",
    background: "transparent",
    // height: 450,
    // width: 1100,
    height: 'auto',
    width: '100%',
    toolbar: {
      show: false,
    },
  },
  colors: [
    "#29623f",
    "#d50000",
    "#2e7d32",
    "#ff6d00",
    "#225b03",
    "#3d01a8",
    "#e8c500",
    "#2dfbdc",
    "#731109",
    "#e32ac3",
    "#203ca3",
    "#0de31d",
    "#b40de2",
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    }
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  xaxis: {
    categories: cityArr,
    title: {
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      show: true,
      color: "#55596e",
    },
    axisTicks: {
      show: true,
      color: "#55596e",
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: {
    title: {
      text: "Count",
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

// AREA CHART
var areaChartOptions = {
  series: [{
    name: "Total Feedback",
    data: [41, 65, 90, 31, 37, 53, 49, 87, 43, 83, 40, 30],
  }],
  chart: {
    type: "area",
    background: "transparent",
    // height: 450,
    // width: 1100,
    height: 'auto',
    width: '100%',
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ["#00ab57", "#d50000"],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: "vertical",
    },
    type: "gradient",
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },
  markers: {
    size: 6,
    strokeColors: "#1b2635",
    strokeWidth: 3,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis:
    [
      {
        title: {
          text: "Purchase Orders",
          style: {
            color: "#f5f7ff",
          },
        },
        labels: {
          style: {
            colors: ["#f5f7ff"],
          },
        },
      },
      {
        opposite: true,
        title: {
          text: "Sales Orders",
          style: {
            color: "#f5f7ff",
          },
        },
        labels: {
          style: {
            colors: ["#f5f7ff"],
          },
        },
      },
    ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();

//PIE CHART
var options = {
  series: numbers,
  chart: {
    // height: 450,
    // width: 1100,
    height: 'auto',
    width: '100%',
    type: 'pie',
  },
  labels: cityArr,
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


