list = [
  { name: 'Avinash', age: 30, salary: 20000, dob: '13/1/2011'},
  { name: 'Vipin', age: 27, salary: 4000, dob: '22/11/2011'},
  { name: 'Vikas', age: 30, salary: 15000, dob: '16/10/2011'},
  { name: 'Samwell', age: 35, salary: 18000, dob: '12/8/2011'},
  { name: 'Niti', age: 25, salary: 15000, dob: '1/7/2011'},
  { name: 'Manjeet', age: 19, salary: 22000, dob: '30/6/2011'},
  { name: 'Shobhit', age: 20, salary: 18000, dob: '7/5/2011'},
  { name: 'Vinod', age: 21, salary: 180, dob: '2/4/2011'},
  { name: 'Mansi', age: 18, salary: 200, dob: '1/3/2011'},
  { name: 'Shivani', age: 22, salary: 500, dob: '20/2/2011'},
  { name: 'Khwaza', age: 23, salary: 20000, dob: '21/12/2011'},
];

function filterSalaryGreaterThan5000() {
  outputList = list.filter(elem => elem.salary > 5000);
  display(outputList);
}

function filterSalaryLessThan1000AndAgeGreaterThan20() {
  // outputList = list.filter(elem => elem.salary < 1000 && elem.age > 20);
  var counter = 0;
  outputList = [];
  for (elem in list){
    if(list[counter].salary < 1000 && list[counter].age > 20) {
      list[counter].salary *= 5;
      outputList.push(list[counter]);
    }
    counter++;
  }
  display(outputList);
}

function groupByAge() {
  document.getElementById("empDetails").innerHTML = '';
  for(i=10; i<100; i+=10) {
    groupDisplay(list.filter(elem => elem.age > i && elem.age <= (i+10)), i, i+10);
  }
}

function groupDisplay(outputList, start, end) {
  if(outputList == undefined) {
    outputList = list;
  }
  if(outputList.length == 0) {
    return;
  }
  output = "<table><thead><u><b>Age Range "+start+"-"+end+"</b></u></thead><tr><th>Name</th><th>Age</th><th>Salary</th><th>DOB</th></tr>"
  var i = -1;
  for(elem in outputList) {
    i++;
    output += "<tr>";
    for(prop in outputList[i]) {
      output += "<td>"+outputList[i][prop]+"</td>";
    }
    output += "</tr>";
  }
  output += "</table>";
  document.getElementById("empDetails").innerHTML += output;
}

function display(outputList) {
  if(outputList == undefined) {
    outputList = list;
  }
  output = "<table><tr><th>Name</th><th>Age</th><th>Salary</th><th>DOB</th></tr>"
  var i = -1;
  for(elem in outputList) {
    i++;
    output += "<tr>";
    for(prop in outputList[i]) {
      output += "<td>"+outputList[i][prop]+"</td>";
    }
    output += "</tr>";
  }
  output += "</table>";
  document.getElementById("empDetails").innerHTML = output;
}