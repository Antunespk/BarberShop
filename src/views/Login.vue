<script>

export default {
    data() {
        return {
            usuario: {}

        }
    },
    methods: {
        enviar() {
            const btnEnviar = document.querySelector("#button")
            btnEnviar.addEventListener('click', (event) => {
                event.preventDefault()
                const email = document.querySelector("#email")
                const senha = document.querySelector("#senha")

                if (email.value == "" || NaN) {
                    alert("Digite o E-mail corretamente")
                    email.classList.add("erro")
                } else {
                    email.classList.remove("erro")
                }

                if (senha.value == "" || NaN) {
                    alert("Digite a senha corretamente")
                    senha.classList.add("erro")
                } else {
                    senha.classList.remove("erro")
                }
            })
        }
    },
    mounted() {
        this.enviar();
    }
}

</script>

<template>
    <main>
        <div class="container">
            <div class="container-left">
                <div class="image">
                    <h1 class="021"> ZERO <span> 21</span></h1>
                    <img src="../assets/img/background_login.jpg"
                        alt="Fotografia de um barbeiro fazendo a barba de um rapaz">
                </div>
            </div>

            <container class="right">
                <h1>Olá, seja bem vindo ao <br> <span> ZERO 21!</span></h1>
                <div class="box-login">
                    <form action="">
                        <h2>Faça seu login</h2>
                        <input type="email" id="email" v-model="usuario.email" placeholder="Digite seu E-mail">
                        <input type="senha" id="senha" v-model="usuario.senha" placeholder="Digite sua senha">
                        <span><a href="#"> Esqueceu sua senha?</a></span>
                        <button id="button" type="button">Entrar</button>
                        <span class="account"> <a href="#"> Criar uma conta</a></span>
                    </form>
                </div>
            </container>

            {{ usuario.email }} {{ usuario.senha }}
        </div>
    </main>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main {
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    min-width: 90vw;
}

:root {
    font-size: 62.5%;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

h1 {
    text-align: center;
    font-size: 3rem;
    padding-top: 4rem;
    color: rgb(189, 189, 189);

}

h2 {
    font-size: 2rem;
    color: rgb(189, 189, 189);
}

.container-left {
    max-width: 50vw;
}

.right {
    justify-content: center;
    align-items: center;
    max-width: 50vw;

}

.right span {
    color: rgb(103, 49, 10);
}

.image img {
    min-width: 50vw;
    max-height: 100vh;
    object-fit: cover;
    object-position: center;
    position: relative;
}

.image h1 {
    z-index: 9;
    position: absolute;
    font-size: 8rem;
    margin: 4rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.image span {
    color: rgb(103, 49, 10);
}

form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 25vh;
}

form input {
    width: 30rem;
    height: 4rem;
    margin: 1rem;
    border: none;
    border-bottom: 1px solid rgb(186, 186, 186);
    outline: none;
}

form button {
    width: 20rem;
    height: 5rem;
    outline: none;
    border: none;
    background-color: rgb(103, 49, 10);
    ;
    color: #fff;
    margin-top: 3rem;
    font-size: 2rem;
    cursor: pointer;
    transition: all 3ms;
}

button:hover {
    background-color: rgb(149, 65, 32);
}

.account {
    margin-top: 1rem;
    font-size: 1.5rem;
}

/* RESPONSIVIDADE */

@media only screen and (max-width: 850px) {

    .right {
        margin-left: 5rem;
    }

    .right h1,
    h2 {
        font-size: 2rem;
    }

    .right input {
        width: 20rem;
    }

    .right button {
        width: 12rem;
        height: 3.5rem;
        font-size: 1.5rem;
    }
}

@media only screen and (max-width: 730px) {
    .image img {
        width: 20vw;
        height: 100vh;
    }

    .right {
        margin-right: 5rem;
    }

    .image h1 {
        font-size: 4rem;
    }
}

@media only screen and (max-width: 540px) {
    .image img {
        width: 5vw;
        height: 100vh;
    }

    .image h1 {
        font-size: 3rem;
    }

    .right {
        margin-left: 3rem;
    }
}

@media only screen and (max-width: 500px) {
    .image img {
        display: none;
    }

    .image h1 {
        display: none;
    }

    .right h1 {
        font-size: 3rem;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right input {
        width: 30rem;
    }

    .right button {
        width: 20rem;
        height: 3.5rem;
        font-size: 1.5rem;
    }

}

/* FIM DA RESPONSIVIDADE */

/* Validação */

.erro {
    border: 2px solid rgb(201, 30, 30);
}
</style>