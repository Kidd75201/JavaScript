let a1 = Array.from({ length: 5 }, (x, i) => i);
// console.log(a1);

let a2 = [...Array(5).keys()];
// console.log(a2);

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (x, i) => start + i * step);
// 50 - 10 / 10 + 1 = 5;
// 10 + 0, 10 + 10, ...
let a3 = range(10, 50, 10);
// console.log(a3);

// Values of 0 - 4 are multiplied by their selves. ex. 0*0, 1*1, 2*2, 3*3, 4*4
let a4 = Array.from({ length: 5 }, (x, i) => i * i);
// console.log(a4);

// print each item in a4
for (let i in a4) {
  //   console.log(i);
}

// AccountValue = investment + their investment * the interest rate

function getAccountValue(principal, interestRate, afterYear) {
  return (principal * Math.pow(1 + interestRate, afterYear)).toFixed(2);
}

function getTable() {
  let rate1 = document.getElementById("rate1").value * 0.01;
  let rate2 = document.getElementById("rate2").value * 0.01;
  let rate3 = document.getElementById("rate3").value * 0.01;
  let rate4 = document.getElementById("rate4").value * 0.01;

  let return1 = [...Array(5).keys()].map(x => getAccountValue(1, rate1, x));
  let return2 = [...Array(5).keys()].map(x => getAccountValue(1, rate2, x));
  let return3 = [...Array(5).keys()].map(x => getAccountValue(1, rate3, x));
  let return4 = [...Array(5).keys()].map(x => getAccountValue(1, rate4, x));

  //   assign interest-tbl to tableArea variable
  var tableArea = document.getElementById("interest-tbl");

  //   Create an element in the html
  var investTable = document.createElement("table");
  // add an attribute to the new element
  investTable.setAttribute("class", "table table-striped");

  //   Create Table tags <thead>, <tr>, <th>
  var thead = document.createElement("thead");
  var theadTR = document.createElement("tr");
  var th1 = theadTR.appendChild(document.createElement("th"));
  var th2 = theadTR.appendChild(document.createElement("th"));
  var th3 = theadTR.appendChild(document.createElement("th"));
  var th4 = theadTR.appendChild(document.createElement("th"));
  var th5 = theadTR.appendChild(document.createElement("th"));

  //   Add text to new tags
  th1.innerHTML = "Year";
  th2.innerHTML = Math.floor(rate1 * 100) + "%";
  th3.innerHTML = Math.floor(rate2 * 100) + "%";
  th4.innerHTML = Math.floor(rate3 * 100) + "%";
  th5.innerHTML = Math.floor(rate4 * 100) + "%";
  theadTR.prepend(th1, th2, th3, th4, th5);
  thead.appendChild(theadTR);

  var tbody = document.createElement("tbody");
  for (var i = 1; i < 5; i++) {
    var tbodyTR = document.createElement("tr");
    var tbodyth1 = tbodyTR.appendChild(document.createElement("th"));
    var tbodyth2 = tbodyTR.appendChild(document.createElement("th"));
    var tbodyth3 = tbodyTR.appendChild(document.createElement("th"));
    var tbodyth4 = tbodyTR.appendChild(document.createElement("th"));
    var tbodyth5 = tbodyTR.appendChild(document.createElement("th"));

    tbodyth1.innerHTML = i;
    tbodyth2.innerHTML = return1[i];
    tbodyth3.innerHTML = return2[i];
    tbodyth4.innerHTML = return3[i];
    tbodyth5.innerHTML = return4[i];

    tbodyTR.prepend(tbodyth1, tbodyth2, tbodyth3, tbodyth4, tbodyth5);
    tbody.appendChild(tbodyTR);
  }
  investTable.appendChild(thead);
  investTable.appendChild(tbody);
  var tableDiv = document.getElementById("interest-tbl");
  tableDiv.appendChild(investTable);
}
