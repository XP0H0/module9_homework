const jsString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;
const data = JSON.parse(jsString);
const lists = data.list;
let list3 = [];
lists.forEach (function(list){
  const name = list.name;
  const age = list.age;
  const prof = list.prof;
  list3.push ({
    Name: name,
    Age: Number(age),
    Profession: prof,
  });
});
const result = {
  list: list3
}
console.log(result)