<script lang="ts">
    import { link } from "svelte-spa-router";

</script>

<template>
    <nav class="container bg-gray-300">
        <div class="flex">
            <div class="m-7 text-xl">
                <a href={"/home"} use:link>Home</a>
            </div>
            <div class="m-7 text-xl">
                <a href={"/dataentry"} use:link>Data Entry</a>
            </div>
            <div class="m-7 text-xl">
                <a href={"#"}>Daily Transactions</a>
            </div>
            <div class="m-7 text-xl">
                <a href={"#"}>Portfolio</a>
            </div>
            <div class="m-7 text-xl">
                <a href={"#"}>Detailed breakdown</a>
            </div>
        </div>
    </nav>
</template>

<style>
</style>
