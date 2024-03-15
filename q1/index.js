import myJson from './q1data.json' assert {type: 'json'};

const sorterObj = (sortBy) => (a, b) => a[sortBy] > b[sortBy] ? 1 : -1;
const sortedJson = myJson.sort(sorterObj('isExpired'));

console.log(sortedJson)
document.getElementById('main').innerHTML = JSON.stringify(sortedJson)