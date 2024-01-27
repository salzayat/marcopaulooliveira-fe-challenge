
import myJson from './q3data.json' assert {type: 'json'};

const transformToTree = (obj) => {
   return obj.reduce((r, s) => {
      ('root.' + s).split('.').reduce((a, item) => {
          var array = a.find(([v]) => v === item);
          if (!array) {
              a.push(array = [item, []]);
          }
          return array[1];
      }, r);
      return r;
  }, []).pop();
}

const search = ([key, values], subString, temp = []) => {
   var result;
   temp = temp.concat(key);
   if (key.includes(subString)) {
       return temp.slice(1).join('.');
   }
   values.some(a => result = search(a, subString, temp));
   return result;
}

const searchTwo = (obj, subString) => {
   return obj.filter(s => s.includes(subString))
}

console.log(search(transformToTree(myJson), 'cat'));
document.getElementById('main').innerHTML = JSON.stringify(search(transformToTree(myJson), 'cat'));
console.log(searchTwo(myJson, 'cat'));
document.getElementById('main-two').innerHTML = JSON.stringify(searchTwo(myJson, 'cat'));