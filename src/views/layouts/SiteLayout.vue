<script setup>
import Header from "../../components/site/header/Header.vue";

</script>

<template>
    <header>
        <Header />
    </header>

    <main class="container">
        <router-view />
    </main>

    <footer>
        <p>Copyright 2022</p>
    </footer>
</template>