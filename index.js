let people = [
  { salary: 10000, count: 5 },
  { salary: 25000, count: 15 },
  { salary: 50000, count: 40 },
  { salary: 100000, count: 10 }
]
let percent = 0.2;

let funSum = 0;
let funAverage = 0;
let funMin = 0;
let funMax = 0;


function sumTax(pays, percent) {
  let sum = 0;
  for (let i = 0; i < pays.length; i++) {
    sum = sum + pays[i].salary * pays[i].count * percent;
  }
  return sum;
}

function averageTax(pays, percent) {
  let allpeople = 0;
  for (let i = 0; i < pays.length; i++) {
    allpeople = allpeople + pays[i].count;
  }
  return sumTax(pays, percent) / allpeople;
}

function minTax(pays, percent) {
  var temp = [];
  for (let key in pays) {
    temp[key] = pays[key];
  }
  for (let i = 0; i < pays.length; i++) {
    temp[i].tax = pays[i].salary * percent;
    temp[i].percent = percent * 100;
  }
  let min = temp[0].tax;
  var result = {};
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].tax <= min) {
      min = temp[i].tax;
      result = temp[i];
      delete result.count;
    }
  }
  return result;
}

function maxTax(pays, percent) {
  var temp = [];
  for (let key in pays) {
    temp[key] = pays[key];
  }
  for (let i = 0; i < pays.length; i++) {
    temp[i].tax = pays[i].salary * percent;
    temp[i].percent = percent * 100;
  }
  let max = temp[0].tax;
  var result = {};
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].tax > max) {
      max = temp[i].tax;
      result = temp[i];
      delete result.count;
    }
  }
  return result;
}

funSum = sumTax(people, percent);
funAverage = averageTax(people, percent);
funMin = minTax(people, percent);
funMax = maxTax(people, percent);

console.log("суммарные налоговые отчисления: " + funSum);
console.log("средние налоговые отчисления на человека: " + Math.floor(funAverage));
console.log("человек, который заплатил налогов меньше всего: ");
console.log(funMin);
console.log("человек, который заплатил налогов больше всего: ");
console.log(funMax);