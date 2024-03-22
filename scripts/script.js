function searchProducts() {
    // Получаем значение из поля ввода
    const userSearch = document.getElementById('searchInput').value.toLowerCase();

    // Получаем все элементы с классом "goods-card"
    const goodsCards = document.querySelectorAll('.goods-card');

    // Перебираем каждый элемент и проверяем текст внутри <p>
    goodsCards.forEach(function (card) {
        const productText = card.textContent.toLowerCase();
        const displayStyle = productText.includes(userSearch) ? 'block' : 'none';
        card.style.display = displayStyle;
    });
}

document.getElementById('searchInput').addEventListener('input', searchProducts);

const themeButton = document.getElementById('theme-btn');
const mainFooter = document.getElementById('main-footer');


themeButton.addEventListener('click', function(){
    if(themeButton.textContent === 'light'){
        themeButton.textContent = 'dark';
        themeButton.style.backgroundColor = '#0f3675';
        document.body.style.backgroundColor = '#33373d';
        mainFooter.style.backgroundColor = '#14366e';
    }
    else{
        themeButton.textContent = 'light';
        themeButton.style.backgroundColor = 'rgb(84, 210, 171)';
        document.body.style.backgroundColor = 'white';
        mainFooter.style.backgroundColor = "rgb(84, 210, 171)";
    }
})
