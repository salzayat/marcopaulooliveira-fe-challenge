import myJson from './q2data.json' assert {type: 'json'};

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


console.log(transformToTree(myJson))
document.getElementById('main').innerHTML = JSON.stringify(transformToTree(myJson))