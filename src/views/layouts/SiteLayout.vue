<script setup>

</script>

<template>
    <header>
        <ul>
            <li>
                <router-link to="/">Пицца</router-link>
            </li>
            <li>
                <router-link to="/dashboard/login">Админ панель</router-link>
            </li>
        </ul>
    </header>

    <main>
        <router-view />
    </main>

    <footer>
        <p>Copyright 2022</p>
    </footer>
</template>