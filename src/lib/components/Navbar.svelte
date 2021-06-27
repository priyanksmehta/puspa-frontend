<script lang="ts">
    import { link } from "svelte-spa-router";
    import User from "./icons/user.svelte";

    const menuOptions = [
        { text: "Home", url: "/home" },
        { text: "About", url: "/about" },
        { text: "Products", url: "/products" },
        { text: "FAQs", url: "/faqs" },
        { text: "Contact Us", url: "/contact" },
    ];
</script>

<template>
    <nav class="fixed w-full left-0 top-0 bg-white z-50">
        <div class="flex">
            <div class="items-center m-6 mr-auto">
                <a href={"/home"} use:link>
                    <img class="" src="/logo.png" alt="brand logo" />
                </a>
            </div>
            {#each menuOptions as option}
                <div
                    class="m-7 text-xl pt-4 lg:visible sm:invisible md:invisible">
                    <a href={option.url} use:link>{option.text}</a>
                </div>
            {/each}
            <!-- Update route to show number of notifications -->
            <div class="m-7 pt-5">
                <a href={"/home"} use:link>
                    <img class="" src="/notification.svg" alt="notif icon" />
                </a>
            </div>
            <!-- Update route to user account if logged in, login page if not -->
            <div class="m-7 pt-5">
                <a href={"/home"} use:link>
                    <User />
                </a>
            </div>
        </div>
    </nav>
</template>

<style>
</style>
