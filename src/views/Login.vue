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
            <div class="form-image">
                <img src="../assets/img/undrawBarber.svg">
            </div>
            <div class="form">
                    <div class="zero21">
                        <h1>ZERO<span>21</span> </h1>
                    </div>
                <form action="#">
                    <div class="form-header">
                        <div class="title">
                            <h1>Faça seu login</h1>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-box">
                            <label for="email">E-mail</label>
                            <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required>
                        </div>

                        <div class="input-box">
                            <label for="senha">Senha </label>
                            <input id="senha" type="senha" name="senha" placeholder="Digite sua senha" required>
                        </div>
                    </div>

                    <div class="entrar-button">
                        <button><a href="#">Entrar</a></button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

main {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(189, 189, 189);
}

.container {
    width: 80%;
    height: 80vh;
    display: flex;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .212);
}

.form-image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(212, 212, 212);
    padding: 1rem;
}

.form-image img {
    width: 31rem;
}

.form {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 3rem;
}

.form-header {
    margin-bottom: 0, 5rem;
    display: flex;
    justify-content: space-between;
}

.zero21{
  text-align: start;
    padding-bottom: 5rem;
}

.zero21 span{
    color:rgb(103, 49, 10)
}

.form-header h1::after {
    content: '';
    display: block;
    width: 8rem;
    height: 0.3rem;
    background-color: rgb(189, 189, 189);
    margin: 0 auto;
    position: absolute;
    border-radius: 10px
}

.input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;
    margin-bottom: 1rem;
}

.input-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.1rem;
}

.input-box input {
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
}

.input-box input:hover {
    background-color: #eeeeee75;
}

.input-box input:focus-visible {
    outline: 1px solid rgb(103, 49, 10);
}

.input-box input::placeholder {
    color: #000000be;
}

#email {
    margin-right: 3rem;
}

.entrar-button button {
    width: 100%;
    margin-top: 0.5rem;
    border: none;
    background-color: rgb(103, 49, 10);
    padding: 0.62rem;
    border-radius: 5px;
    cursor: pointer;
}

.entrar-button button:hover {
    background-color: rgb(149, 65, 32);
}

.entrar-button button a {
    text-decoration: none;
    font-size: 0.93rem;
    font-weight: 500;
    color: #fff;
}

@media screen and (max-width: 1330px) {
    .form-image {
        display: none;
    }

    .container {
        width: 50%;
    }

    .form {
        width: 100%;
    }
}

@media screen and (max-width: 1064px) {
    .container {
        width: 90%;
        height: auto;
    }

    .input-group {
        flex-direction: column;
        overflow-y: scroll;
        flex-wrap: nowrap;
        max-height: 10rem;
        padding-right: 5rem;
    }

    .service-inputs {
        margin-top: 2rem;
    }

    .service-group {
        flex-direction: column;
    }

    .service-input {
        margin-top: 0.5rem;
    }
}
</style>