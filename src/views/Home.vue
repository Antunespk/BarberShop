<script setup>
import Navbar from '../components/Navbar.vue';
import Cards from '../components/Cards.vue';
import Footer from '../components/Footer.vue'
</script>
<template>
    <main>
        <section>
            <Navbar></Navbar>
        </section>
        <header class="header container-xxl">
            <h2>Zero 21</h2>
        </header>

        <body>
            <Cards></Cards>
        </body>
    </main>
    <Footer></Footer>
</template>
<style scoped>
.header {
    background-image: url(../assets/img/imagem_inicio.jpeg);
    background-position: center;
    width: 100%;
    height: 300px;
}
</style>