<script>
import { RouterLink } from 'vue-router';

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">BarberShop</RouterLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbartext"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="Navbartext">
                <ul class="navbar-nav mr-auto">
                    <!-- <li class="nav-item">
                    <RouterLink class="nav-link" to="/emphasis">Destaques</RouterLink>
                </li> -->
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/login">Faça o Login</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/CadastroPro">Crie sua conta Profissional</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/usuarioAdd">Crie sua conta</RouterLink>
                    </li>
                    <!-- <li class="nav-item">
                    <RouterLink class="nav-link" to="/servico-cad">Cadastro serviço</RouterLink>
                </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>


<style scoped>

</style>