const btn = document.querySelector('button');
const result = document.querySelector('.result_pic')
btn.addEventListener('click', () => {
  const value1 = document.querySelector('.width').value;
  const value2 = document.querySelector('.height').value;
    if ((value1>=100 && value1<=300) && (value2>=100 && value2<=300)) {
  fetch (`https://picsum.photos/${value1}/${value2}`)
    .then((response) => {
    result.innerHTML = `<img src="${response.url}" />`
    })
    .catch(() => {console.log('Error')})
    } else {
      alert("одно из чисел вне диапазона от 100 до 300")
    }
});