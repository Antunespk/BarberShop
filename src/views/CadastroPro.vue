<script></script>
<template>

    <body>
        <div class="container">
            <div class="form-image">
                <img src="../assets/img/undraw_barber_-3-uel (1).svg">
            </div>
            <div class="form">
                <form action="#">
                    <div class="form-header">
                        <div class="title">
                            <h1>Cadastro de profissionais</h1>
                        </div>
                        <div class="login-button">
                            <button><a href="#">Entrar</a></button>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-box">
                            <label for="firstname">Primeiro nome</label>
                            <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome"
                                required>
                        </div>

                        <div class="input-box">
                            <label for="firstname">Sobrenome</label>
                            <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome"
                                required>
                        </div>

                        <div class="input-box">
                            <label for="email">E-mail</label>
                            <input id="firstname" type="email" name="email" placeholder="Digite seu e-mail" required>
                        </div>

                        <div class="input-box">
                            <label for="celular">Celular</label>
                            <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required>
                        </div>

                        <div class="input-box">
                            <label for="password">Senha </label>
                            <input id="password" type="password" name="password" placeholder="Digite sua senha"
                                required>
                        </div>

                        <div class="input-box">
                            <label for="password">Confirme sua senha </label>
                            <input id="password" type="password" name="Confirmpassword" placeholder="Confirme sua senha"
                                required>
                        </div>
                    </div>

                    <div class="service-inputs">
                        <div class="service-title">
                            <h6>Serviços</h6>
                        </div>

                        <div class="service-group">
                            <div class="service-input">
                                <input type="radio" id="cabelo" name="service">
                                <label for="cabelo">Cabelo</label>
                            </div>

                            <div class="service-input">
                                <input type="radio" id="barba" name="service">
                                <label for="barba">Barba</label>
                            </div>

                            <div class="service-input">
                                <input type="radio" id="estetica" name="service">
                                <label for="esteticas">Estética</label>
                            </div>

                            <div class="service-input">
                                <input type="radio" id="others" name="service">
                                <label for="others">Outros</label>
                            </div>
                        </div>
                    </div>

                    <div class="continue-button">
                        <button><a href="#">Continuar</a></button>
                    </div>
                </form>
            </div>
        </div>
    </body>
</template>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0c0ce94d;
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
    background-color: #fde3a7d7;
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

.login-button {
    display: flex;
    align-items: center;
}

.login-button button {
    border: none;
    background-color: #6c63ff;
    padding: 0.4rem 1rem;
    border-radius: 5px;
    cursor: pointer;
}

.login-button button:hover {
    background-color: #6b63fff1;
}

.login-button button a {
    text-decoration: none;
    font-weight: 500;
    color: #fff;
}

.form-header h1::after {
    content: '';
    display: block;
    width: 8rem;
    height: 0.3rem;
    background-color: #6c63ff;
    margin: 0 auto;
    position: absolute;
    border-radius: 10px
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
}

.input-box input:hover {
    background-color: #eeeeee75;
}

.input-box input:focus-visible {
    outline: 1px solid #6c63ff;
}

.input-box label,
.service-tittle h6 {
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0;
}

.input-box input::placeholder {
    color: #000000be;
}

.service-group {
    display: flex;
    justify-content: space-between;
    margin-top: 0.62rem;
    padding: 0 0.5rem;
}

.service-input {
    display: flex;
    align-items: center;
}

.service-input input {
    margin-right: 0.35rem;
}

.service-input label {
    font-size: 0.81rem;
    font-weight: 600;
    color: #000000c0;
}

.continue-button button {
    width: 100%;
    margin-top: 0.5rem;
    border: none;
    background-color: #6c63ff;
    padding: 0.62rem;
    border-radius: 5px;
    cursor: pointer;
}

.continue-button button:hover {
    background-color: #6b63fff1;
}

.continue-button button a {
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