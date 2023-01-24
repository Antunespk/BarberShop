<script setup>
import Cards from '../components/Cards.vue';
</script>
<template>
    <main>
        <header>
            <div class="h300 text-white">
                <h3>
                    Seu Barbeiro
                </h3>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="input">
                        <div class="">
                            <label for="">Descubra e reserve profissionais de beleza próximo a você</label>
                        </div>
                        <input id="profissionais-form" type="text" name="localizacao_servicos">
                        <input id="localizacao-form" type="text" name="localizacao_servicos">
                    </div>
                </div>
            </div>
        </header>

        <body>

            <div class="text-center py-3">
                <h3>BARBEARIAS</h3>
            </div>

            <Cards></Cards>

            <section class="p-4">
                <div class="text text-center">
                    <div class="p-5">
                        <h3>
                            Pesquisar por profissionais próximos
                        </h3>
                    </div>

                    <div class="p-3 formBusca d-inline">
                        <input type="text" placeholder="barbeiros proximos a mim...">
                        <button class="btn btn-secondary">buscar</button>
                    </div>
                </div>
            </section>
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