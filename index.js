

const email = document.getElementById('email')
const form = document.getElementById('form')
const formControl = document.getElementById('form-control')
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    
    return (false)
}
form.addEventListener('submit' , (e) =>{
    let flag = true
    if(ValidateEmail(email.value) === false){
        formControl.classList.add('error')
        flag = false
    }
    if(!flag){
        e.preventDefault()
    }

})