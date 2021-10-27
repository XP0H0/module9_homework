btn = document.querySelector('button');
const j_result = document.querySelector('.result_pic');
function useRequest (callback) {
let xhr = new XMLHttpRequest();
const value = document.querySelector('input').value;
  if (value > 0) {
    if (value < 11) {
    const url2 = `https://picsum.photos/v2/list/?limit=${value}`;
xhr.open ('GET', `${url2}`);
xhr.onload = function() {
  if (xhr.status != 200) {
    console.log('Статус ответа: ', xhr.status)
  } else {
    const result = JSON.parse(xhr.response);
    if (callback) {
      callback(result)
    }
  }
};
xhr.onerror = function() {
  console.log('Ошибка! Статус ответа: ', xhr.status);
};
xhr.send();
}
else{
  alert('число вне диапазона от 1 до 10')
}}}
function displayResult(apiData) {
  let cards = '';
  apiData.forEach (item => {
    const cardBlock = `
    <div class=card>
      <img src="${item.download_url}" class=card_img height=200 width=200/>
      <p>${item.author}</p>
    </div>`
    cards = cards + cardBlock;
  })
  j_result.innerHTML = cards
}

btn.addEventListener('click', () => {
  useRequest(displayResult)
  console.log(apiData)
})