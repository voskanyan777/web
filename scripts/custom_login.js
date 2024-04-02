const login = document.getElementById('login')
const password = document.getElementById('password')
const haveAccountBtn = document.getElementById('haveAccountBtn');
const email = document.getElementById('email')
const age = document.getElementById('age')
const toggleInput = document.getElementById('toggleInput')
const divTest = document.querySelector('div.tests')
const containerDiv = document.querySelector('div.container-div')
const form = document.getElementById('mainForm');
const signUp = document.getElementById('mainSubmit')
toggleInput.addEventListener('change', function(){
    if (this.checked){
        age.disabled = true;
        age.value = ''
    }
    else{
        age.disabled = false;
    }
})


haveAccountBtn.addEventListener('click', function(){
    email.style.display = 'none';
    age.style.display = 'none';
    haveAccountBtn.style.display = 'none';
    divTest.style.display = 'none';
    mainSubmit.style.display = 'none';

    containerDiv.innerHTML += '<input type="submit" value="login" style="width: 100%;" id="loginBtn">'
    
    const loginBtn = document.getElementById('loginBtn')
    loginBtn.addEventListener('click', function(){
        console.log('text')
    })    
})


form.addEventListener('submit', function(event){
    // Предотвратить отправку формы по умолчанию
    event.preventDefault();
    if ((login.value == '' || password.value == '' || email.value =='') && (toggleInput.checked)){
        console.log('Присутствуют пустые поля')
        signUp.style.backgroundColor = 'red';
    }
    if ((login.value == '' || password.value == '' || email.value =='' || age.value == '') && (!toggleInput.checked)){
        console.log('Присутствуют пустые поля')
        signUp.style.backgroundColor = 'red';
    }
    if ((!toggleInput.checked) && (age.value < 1)){
        console.log('Возраст не может быть меньше 1')
        signUp.style.backgroundColor = 'red';
    }
    else{
        signUp.style.backgroundColor = 'green';
        const resultJson = {
            login: login.value,
            password: password.value,
            email: email.value,
        }
        if (age.value){
            resultJson['age'] = age.value
        }
        console.log(resultJson)
    }
    
})
