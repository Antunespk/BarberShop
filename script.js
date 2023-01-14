const btnEnviar = document.querySelector("#button")

btnEnviar.addEventListener('click', (event) => {
event.preventDefault()

const email = document.querySelector("#email")
const password = document.querySelector("#password")

if (email.value == "" || NaN) {
    alert("Digite o E-mail corretamente")
    email.classList.add("erro")
} else{
    email.classList.remove("erro")
}

if (password.value == "" || NaN) {
    alert("Digite a senha corretamente")
    password.classList.add("erro")
} else{
     password.classList.remove("erro")
}


})