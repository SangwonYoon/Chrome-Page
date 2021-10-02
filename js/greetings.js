const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const h1 = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout-btn")

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";

function showGreeting(username){
    h1.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
    h1.innerText = `Welcome ${username}!`;
}

function onLoginSubmit(e){
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USER_NAME, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    showGreeting(username)
}

const savedUserName = localStorage.getItem(USER_NAME);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} 
else{
    showGreeting(savedUserName);
}

function logoutBtnClicked(){
    localStorage.removeItem("username");
    location.reload();
}

logoutBtn.addEventListener("click", logoutBtnClicked);