const queryUrl = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const loader = document.getElementById('loader');
const items = document.getElementById('items');

const xhr = new XMLHttpRequest();


xhr.open('GET', queryUrl);
xhr.responseType = 'json';
xhr.onload = () => {
    
    loader.classList.remove('loader_active');
    let objCode = Object.keys(xhr.response.response.Valute)
for (let i = 0; i < objCode.length; i++) {
    let itemKey = objCode[i];

    items.insertAdjacentHTML("afterbegin", `
    <div class="item">
        <div class="item__code">
            ${objCode[i]}
            </div>
        <div class="item__value">
            ${xhr.response.response.Valute[itemKey].Value}
            </div>
        <div class="item__currency">
            ${xhr.response.response.Valute[itemKey].Name}
            </div>
    </div>
`);
}

};

xhr.send();

items.querySelector('.item')