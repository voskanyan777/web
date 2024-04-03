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
        console.log(resultJson)
    }
})

// form.addEventListener('submit', function(event){
//     // Предотвратить отправку формы по умолчанию
//     event.preventDefault();
//     if ((login.value == '' || password.value == '' || email.value =='') && (toggleInput.checked)){
//         console.log('Присутствуют пустые поля')
//         signUp.style.backgroundColor = 'red';
//     }
//     if ((login.value == '' || password.value == '' || email.value =='' || age.value == '') && (!toggleInput.checked)){
//         console.log('Присутствуют пустые поля')
//         signUp.style.backgroundColor = 'red';
//     }
//     if ((!toggleInput.checked) && (age.value < 1)){
//         console.log('Возраст не может быть меньше 1')
//         signUp.style.backgroundColor = 'red';
//     }
//     else{
//         signUp.style.backgroundColor = 'green';
//         const resultJson = {
//             login: login.value,
//             password: password.value,
//             email: email.value,
//         }
//         if (age.value){
//             resultJson['age'] = age.value
//         }
//         console.log(resultJson)
//     }
    
// })


// haveAccountBtn.addEventListener('click', function(){
//     email.style.display = 'none';
//     age.style.display = 'none';
//     haveAccountBtn.style.display = 'none';
//     divTest.style.display = 'none';
//     mainSubmit.style.display = 'none';

//     containerDiv.innerHTML += '<input type="submit" value="login" style="width: 100%;" id="loginBtn">'
    
//     const loginBtn = document.getElementById('loginBtn')
//     loginBtn.addEventListener('click', function(){
//         console.log('text')
//     })    
// })


