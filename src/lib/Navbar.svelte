<script lang="ts">
    import { link } from "svelte-spa-router";

</script>

<template>
    <nav class="fixed w-full left-0 top-0 bg-white">
        <div class="flex">
            <div class="items-center m-6 mr-auto">
                <a href={"/home"} use:link>
                    <img class="" src="/logo.png" alt="brand logo" />
                </a>
            </div>
            <div class="m-7 text-xl pt-4">
                <a href={"/home"} use:link>Home</a>
            </div>
            <div class="m-7 text-xl pt-4">
                <a href={"/about"} use:link>About</a>
            </div>
            <div class="m-7 text-xl pt-4">
                <a href={"/products"} use:link>Products</a>
            </div>
            <div class="m-7 text-xl pt-4">
                <a href={"/faqs"} use:link>FAQs</a>
            </div>
            <div class="m-7 text-xl pt-4">
                <a href={"#"}>Contact Us</a>
            </div>
            <!-- Update route to show number of notifications -->
            <div class="m-7 pt-5">
                <a href={"/home"} use:link>
                    <img class="" src="/notification.svg" alt="notif icon" />
                </a>
            </div>
            <!-- Update route to user account if logged in, login page if not -->
            <div class="m-7 pt-5">
                <a href={"/home"} use:link>
                    <img class="" src="/user.svg" alt="user icon" />
                </a>
            </div>
        </div>
    </nav>
</template>

<style>
</style>
