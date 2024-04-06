// let allCookies = document.cookie;
// console.log(allCookies)
// let position = allCookies.indexOf('version=')
// let end
// let start
// if (position != 1){
//     start = position + 8
//     end = allCookies.indexOf(';', start)
// }
// if (end == 1 ){
//     end = allCookies.length
// }
// let value = allCookies.substring(start, end)
// value = decodeURIComponent(value)
// console.log(value)


function getCookie(){
    const allCookies = document.cookie;
    let start = allCookies.indexOf('version=')
    start += 8;
    value = allCookies.substring(start)
    value = decodeURIComponent(value).split('/')
    return {
        login: value[0],
        email: value[1]
    }
}

const userInfo = getCookie()


const userLogin = document.getElementById('user-login')
const userEmail = document.getElementById('user-email')

userLogin.textContent += userInfo.login
userEmail.textContent += userInfo.email