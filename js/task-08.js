// 
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit',formSubmit);


function formSubmit(event){
    event.preventDefault();
    const {email,password} = event.currentTarget;

    if (email.value === "" || password.value === "") {
         alert("Усі поля повинні бути заповнені");
    }else{
    function User(value1,value2) {
        this.email = value1.value;
        this.password = value2.value;
    }

    let user = new User(email,password);
    console.log(user)
    event.currentTarget.reset()
    }
}