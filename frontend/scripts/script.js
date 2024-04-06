jQuery.fx.speeds.turtle = 700;

$(".main-tab").fadeOut('turtle')

$('.main-tab').slideDown('turtle')




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

// const themeButton = document.getElementById('theme-btn');
// const mainFooter = document.getElementById('main-footer');


$("#theme-btn").click(function(event){
    const themeText = $(this).text()
    if (themeText === 'light'){
        $(this).text('dark')
        $(this).css({'backgroundColor': '#0f3675'})
        $('body').css({'backgroundColor': '#33373d'})
        $('#main-footer').css({'backgroundColor': '#14366e'})
    }
    else{
        $(this).text('light')
        $(this).css({'backgroundColor': 'rgb(84, 210, 171)'})
        $('body').css({'backgroundColor': 'white'})
        $('#main-footer').css({'backgroundColor': 'rgb(84, 210, 171)'})
    }
})




// themeButton.addEventListener('click', function(){
//     if(themeButton.textContent === 'light'){
//         themeButton.textContent = 'dark';
//         themeButton.style.backgroundColor = '#0f3675';
//         document.body.style.backgroundColor = '#33373d';
//         mainFooter.style.backgroundColor = '#14366e';
//     }
//     else{
//         themeButton.textContent = 'light';
//         themeButton.style.backgroundColor = 'rgb(84, 210, 171)';
//         document.body.style.backgroundColor = 'white';
//         mainFooter.style.backgroundColor = "rgb(84, 210, 171)";
//     }
// })

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("toolsBar").style.bottom = `0px`; // показать панель инструментов при прокрутке вверх
    } 
    else {
        document.getElementById("toolsBar").style.bottom = "-150px"; // скрыть панель инструментов при прокрутке вниз
    
    }
    prevScrollpos = currentScrollPos;
}

const new_div = document.createElement('div')
