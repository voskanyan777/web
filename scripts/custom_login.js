const haveAccountBtn = document.getElementById('haveAccountBtn');
const email = document.getElementById('email')
const age = document.getElementById('age')

const toggleInput = document.getElementById('toggleInput')
const divTest = document.querySelector('div.tests')
const containerDiv = document.querySelector('div.container-div')

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

    containerDiv.innerHTML += '<input type="button" value="login" style="margin-left: 1px;" id="loginBtn">'
    containerDiv.innerHTML += '<input type="button" value="registration" style="margin-left: 1px;" id="registrationBtn">'


    const registrationBtn = document.getElementById('registrationBtn')
    registrationBtn.addEventListener('click', function(){
        email.style.display = 'block';
        age.style.display = 'block';
        haveAccountBtn.style.display = 'block';
        divTest.style.display = 'block';
        console.log()
        
    
    })
    

})

