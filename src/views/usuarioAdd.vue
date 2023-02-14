<script>
import { Usuario } from '@/models/Usuario.js';
import usuarioService from '../service/UsuarioService';
import { RouterLink } from 'vue-router';

let usuario = new Usuario();

export default {
    data() {
        return {
            usuario
        }
    },
    methods: {
        usuarioAdd() {
            // starLoading -> modal
            usuarioService.add(this.usuario)
                .then(res => {
                    console.log(res.data);
                    alert("Cadastrado!");
                    //endLoading -> modal
                    this.router.push("/");
                })
                .catch(error => {
                    alert(error.data);
                    console.log(this.usuario)
                });
        }
    }
}
// function confereSenha() {
//     const senha = document.querySelector('input [name=senha]');
//     const confirm = document.querySelector('input[name=confirmSenha]');

//     if (confirm.value === senha.value) {
//         confirm.setCustomValidity('');
//     } else {
//         confirm.setCustomValidity('As senhas não conferem');
//     }
// }

</script>
<template>
    <Navbar></Navbar>
    <main>
        <div class="container">
            <div class="form-image">
                <img src="../assets/img/cort4.png" alt="" width="1000">
            </div>
            <div class="form">
                <div class="form-header">
                    <div class="title">
                        <h1>Cadastre-se</h1>
                    </div>
                    <div class="login-button">
                        <button>
                            <RouterLink to="/login"><a>Entrar</a></RouterLink>
                        </button>
                    </div>
                </div>

                <div class="input-group">
                    <div class="input-box">
                        <label for="firstname">Nome completo</label>
                        <input id="firstname" type="text" name="firstname" placeholder="Digite seu nome Completo"
                            v-model="usuario.nome" required>
                    </div>

                    <div class="input-box">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail"
                            v-model="usuario.email" required>
                    </div>

                    <div class="input-box">
                        <label for="number">Celular</label>
                        <input id="number" type="tel" name="number" placeholder="(xx) xxxxx-xxxx"
                            v-model="usuario.telefone" required>
                    </div>

                    <div class="input-box">
                        <label for="senha">Senha</label>
                        <input id="senha" type="password" name="senha" placeholder="Digite sua senha"
                            v-model="usuario.senha" required>
                    </div>
                    <!-- <div class="input-box">
                            <label for="confirmSenha">Confirme sua Senha</label>
                            <input id="confirmSenha" type="password" name="confirmSenha"
                                placeholder="Digite sua senha novamente" required onchange='confereSenha()'>
                        </div> -->
                </div>

                <div class="continue-button">
                    <button @click="usuarioAdd()">Continuar</button>
                </div>
            </div>
        </div>
    </main>

</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&family=Open+Sans:wght@300;400;500;600&display=swap');

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
    background: #0a0a14e1;
}

.container {
    width: 80%;
    height: 80vh;
    display: flex;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
}

.form-image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(189, 189, 189);
    padding: 1rem;
}

.form-image img {
    width: 31rem;
}

.form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 3rem;
}

.form-header {
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
}

.login-button {
    display: flex;
    align-items: center;
}

.login-button button {
    border: none;
    background-color: #39393f;
    padding: 0.4rem 1rem;
    border-radius: 5px;
    cursor: pointer;
}

.login-button button:hover {
    background-color: rgb(103, 49, 10)
}

.login-button button a {
    text-decoration: none;
    font-weight: 500;
    color: #fff;
}

.form-header h1::after {
    content: '';
    display: block;
    width: 12rem;
    height: 0.3rem;
    background-color: #39393f;
    margin: 0 auto;
    position: absolute;
    border-radius: 10px;
}

.input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;
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
    font-size: 0.8rem;
}

.input-box input:hover {
    background-color: rgb(189, 189, 189);
}

.input-box input:focus-visible {
    outline: 1px solid rgb(103, 49, 10);
}

.input-box label,
.gender-title h6 {
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0;
}

.input-box input::placeholder {
    color: #000000be;
}

.gender-group {
    display: flex;
    justify-content: space-between;
    margin-top: 0.62rem;
    padding: 0 .5rem;
}

.gender-input {
    display: flex;
    align-items: center;
}

.gender-input input {
    margin-right: 0.35rem;
}

.gender-input label {
    font-size: 0.81rem;
    font-weight: 600;
    color: #000000c0;
}

.continue-button button {
    width: 100%;
    margin-top: 2.5rem;
    border: none;
    background-color: #39393f;
    padding: 0.62rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
}

.continue-button button:hover {
    background-color: rgb(103, 49, 10);
}

.continue-button button {
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
        z-index: 5;
        padding-right: 5rem;
        max-height: 10rem;
        overflow-y: scroll;
        flex-wrap: nowrap;
    }

    .gender-inputs {
        margin-top: 2rem;
    }

    .gender-group {
        flex-direction: column;
    }

    .gender-title h6 {
        margin: 0;
    }

    .gender-input {
        margin-top: 0.5rem;
    }
}

.container-left {
    display: flex;
}
</style>