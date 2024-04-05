jQuery.fx.speeds.turtle = 700;
$('#welcome-text').css({'width': '0px', 'fontSize': '2px'})
$('#welcome-text').fadeOut('turtle')
$('#welcome-text').slideDown('turtle')
$('#welcome-text').animate({
    width: '100%',
    'fontSize': '15px'

}, 1200)
    
const toggleInput = document.getElementById('toggleInput')


toggleInput.addEventListener('change', function(){
    if (this.checked){
        $('#age').prop('disabled', true)
        $('#age').val('')
    }
    else{
        $('#age').prop('disabled', false)
    }
})

$("#haveAccountBtn").click(function(event){
    $('#email').css({'display': 'none'})
    $('#age').css({'display': 'none'})
    $('#haveAccountBtn').css({'display': 'none'})
    $('div.tests').css({'display': 'none'})
    $('#mainSubmit').css({'display': 'none'})
    $('div.container-div').append('<input type="submit" value="login" style="width: 100%;" id="loginBtn">')

})

$('form').submit(function(event){
    event.preventDefault()
    const login = $('#login').val()
    const password = $('#password').val()
    const email = $('#email').val()

    if ((login == '' || password == '' || email =='') && (toggleInput.checked)){
        console.log('Присутствуют пустые поля')
        $('#mainSubmit').css({'backgroundColor': 'red'})
    }
    if ((login == '' || password == '' || email =='' || age == '') && (!toggleInput.checked)){
        console.log('Присутствуют пустые поля')
        $('#mainSubmit').css({'backgroundColor': 'red'})
    }
    if ((!toggleInput.checked) && (age.value < 1)){
        console.log('Возраст не может быть меньше 1')
        $('#mainSubmit').css({'backgroundColor': 'red'})
    }
    if ((login.length < 6) || (password.length < 6)){
        console.log('Логин и пароль не могут быль меньше 6 символов')
        $('#mainSubmit').css({'backgroundColor': 'red'})
    }
    else{
        $('#mainSubmit').css({'backgroundColor': 'green'})
        const resultJson = {
            login: login,
            password: password,
            email: email,
        }
        if (age.value){
            resultJson['age'] = age.value
        }
        // Устанавливаем cookie
        setCookie(login, email)
        // Вывод результата в консоль
        console.log(resultJson)
    }
})

function setCookie(userLogin, userEmail){
    document.cookie = 'version=' + encodeURIComponent(userLogin + '/' + userEmail) + '; maxage=35'
}

