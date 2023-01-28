<script >
import Navbar from '@/components/navbar.vue';
import constates from '@/models/constates.js';

export default {
    components: { Navbar },
    data() {
        return {
            tipos: constates.tipoServicos
        }
    },
}
</script>
<template>
    <Navbar></Navbar>
    <div>Selected: {{ selected }}</div>

    <select v-model="selected">
        <option v-for="tipo in tipos" :value="tipo.id">
            {{ tipo.nome }}
        </option>
    </select>

    <div v-for="tipo in tipos">
        <input type="checkbox" v-model="selected" :value="tipo.id"> {{ tipo.nome }}
    </div>

</template>
<style>

</style>