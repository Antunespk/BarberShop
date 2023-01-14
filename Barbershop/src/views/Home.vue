<script setup>
import Navbar from '../components/Navbar.vue';
import Cards from '../components/Cards.vue';
</script>
<template>
    <main>
        <header>
            <Navbar></Navbar>
        </header>

        <body>
            <Cards></Cards>
        </body>

    </main>
    <footer class="flex-wrap justify-content-between btn btn-dark w-100 mt-4">
        <section class=" icon contatos d-flex justify-content-around pt-3">
            <a href=""><i class="text-white fa-brands fa-whatsapp fa-2x py-2"></i> </a>
            <a href=""><i class="text-white fa-brands fa-instagram fa-2x py-2"></i></a>
            <a href=""><i class="text-white fa-brands fa-twitter fa-2x py-2"></i></a>
            <a href=""><i class="text-white fa-brands fa-github fa-2x py-2"></i></a>
            <a href=""><i class="text-white fa-solid fa-envelope fa-2x"></i></a>
        </section>
        <div class="flex-wrap pt-2">
            <a href="">info</a>
            <a href="">suporte</a>
            <a href="">marketing</a>
        </div>

        <a href="">
            Termos de Uso
        </a>
        <a href="">
            Politica de Privacidade
        </a>
        <p>
            Develop By @DevsOptions
        </p>


    </footer>
</template>
<style>

</style>