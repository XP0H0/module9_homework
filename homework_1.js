const parser = new DOMParser ();
const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>`;
const xmlDOM = parser.parseFromString (xmlString, 'text/xml');
const list = xmlDOM.querySelector('list');
let list3 = [];
const studentNodes = list.querySelectorAll('student');
studentNodes.forEach( function(studentNode) {
  const first2 = studentNode.querySelector('first');
  const second2 = studentNode.querySelector('second');
  const age = studentNode.querySelector('age');
  const name = studentNode.querySelector('name');
  const lang = name.getAttribute('lang');
  const prof = studentNode.querySelector('prof');
  list3.push ({
    Name: first2.textContent + ` ` + second2.textContent,
    Language: lang,
    Age: Number(age.textContent),
    Profession: prof.textContent,
  })
});
const result = {
  list: list3
}
console.log(result)