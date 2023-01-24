<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <RouterLink class="navbar-brand" to="/">BarberShop</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#textoNavbar"
            aria-controls="textoNavbar" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="textoNavbar">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <RouterLink class="nav-link" to="/">Inicio </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/">Destaques</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/login">Faça o Login</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/user-add">Crie sua conta</RouterLink>
                </li>
            </ul>
            <span class="navbar-text">
                Texto navbar com um elemento inline
            </span>
        </div>
    </nav>
</template>


<style scoped>

</style>