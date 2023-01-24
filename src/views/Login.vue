<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
        crossorigin="anonymous">
</script>
<template>

    <body class="inicio">
        <main>
            <section>
                <header>
                </header>
                <div class="row login-content text-white">
                    <h2 class="py-2 col-12">
                        Fazer login
                    </h2>
                    <form action="http://www.google.com.br/" class="col-12">
                        <label for="login-user" class="fw-bold">
                            E-mail ou número de telefone celular
                        </label>
                        <input type="text" class="w-100 form-control my-2" id="login-user">
                        <label for="login-senha" class="fw-bold">
                            Senha:
                        </label>
                        <input type="text" class="w-100 form-control my-2" id="login-senha">
                        <button class="btn btn-warning text-center w-100 my-1">
                            Continuar
                        </button>
                    </form>

                    <div class="mt-5">
                        <button class="btn btn-secondary w-100 my-4">
                            Criar sua conta
                        </button>
                    </div>
                </div>
            </section>
        </main>
    </body>
</template>
<style scoped>
section {
    /* width: 100%; */
    max-width: 350px;
    margin: auto;
}

.login-content {

    background-color: #150E01;
    padding: 20px;
    border: solid 1px var(--bs-gray-400);
    border-radius: 5px;
}


.login-content-novo {
    padding: 0x;
    text-align: center;
}

.login-content-novo div {
    background-color: var(--white) !important;
    z-index: 1000;
    width: 120px;
    margin: auto;
    position: relative;
    top: 25px;
}

.inicio {
    background: #252421;
}
</style>