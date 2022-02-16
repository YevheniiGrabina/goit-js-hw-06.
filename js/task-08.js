const loginForm = document.querySelector(".login-form");
const loginButton = loginForm.querySelector("button");

loginForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
event.preventDefault();
if (event.currentTarget.email.value === "" || event.currentTarget.password.value === "") 
    {
    alert("Все поля должны быть заполнены!!!");
    return;
    }
const data = {};
[...event.currentTarget.elements].forEach((elem) => {
if (elem.nodeName === "INPUT") 
    {
    data[elem.attributes.name.value] = elem.value;
    }
});

console.log(data);
event.currentTarget.reset();
}
