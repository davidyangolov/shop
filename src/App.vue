<template>
    <div class="wrapper">
        <main_page></main_page>
    </div>
</template>
<script>
import main_page from '@/components/HomePage.vue'
export default {
    name: "App",
    components: {
        main_page
    }
}
</script>
<style>
*, *::after, *::before {
    margin: 0;
    padding: 0;
    margin: 0px 0px 0px 2px;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 22px;
    color: #000;
    list-style: none;
    font-weight: 100;
}
</style>