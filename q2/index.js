import myJson from './q2data.json' assert {type: 'json'};

const transformToTree = (obj) => {
    return obj.reduce((acc, row) => {
       const k = row.slice(0, row.indexOf('.'))
       const v = row.slice(row.indexOf('.') + 1).split('.')
       
       const newObj = {
         [k]: v.length > 1 ? transformToTree(v) : v
       }
 
       return Object.assign(acc, newObj)
    }, { })
 }


console.log(transformToTree(myJson))
document.getElementById('main').innerHTML = JSON.stringify(transformToTree(myJson))