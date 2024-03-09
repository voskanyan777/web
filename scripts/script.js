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
