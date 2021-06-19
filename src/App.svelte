<script lang="ts">
    import Navbar from "./lib/components/Navbar.svelte";
    import Products from "./lib/Products.svelte";
    import About from "./lib/About.svelte";
    import Home from "./lib/components/Home/Home.svelte";
    import Router from "svelte-spa-router";
    import FAQ from "./lib/FAQ.svelte";
    import Static from "./lib/Static.svelte";
    import Footer from "./lib/components/Footer.svelte";

    const routes = {
        "/products": Products,
        "/about": About,
        "/home": Home,
        "/": Home,
        "/faqs": FAQ,
        "/css": Static,
    };

</script>

<svelte:head>
    <title>Puspa Group</title>
    <link rel="icon" href="/logo.png" />
</svelte:head>

<div class="grid grid-rows-[auto, 1fr, auto] min-h-screen">
    <Navbar />
    <Router {routes} />
    <Footer />
</div>
