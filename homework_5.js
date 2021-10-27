btn = document.querySelector('.submit');
const j_result = document.querySelector('.result_pic');
function useRequest (callback) {
let xhr = new XMLHttpRequest();
let flag1 = false;
let flag2 = false;
const value1 = document.querySelector('.num_str').value;
const value2 = document.querySelector('.num_pic').value;
if (value1 >=1 && value1 <=10) {
  flag1 = true
} else {
  alert('Номер страницы вне диапазона от 1 до 10');
}
if (value2 >=1 && value2 <=10) {
  flag2 = true
} else {
  alert('Лимит вне диапазона от 1 до 10');
}
 if ((flag1 === true) && (flag2 === true)) {
    const url2 = `https://picsum.photos/v2/list?page=${value1}&limit=${value2}`;
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
}}
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
  localStorage.setItem('divSafe', cards);
}

btn.addEventListener('click', () => {
  useRequest(displayResult);
  localStorage.removeItem('divSafe')
})
  let divSafe = localStorage.getItem('divSafe');
  j_result.innerHTML = divSafe