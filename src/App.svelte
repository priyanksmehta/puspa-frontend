<script lang="ts">
    import Navbar from "./lib/components/Navbar.svelte";
    import Products from "./lib/Products.svelte";
    import About from "./lib/components/About/About.svelte";
    import Home from "./lib/components/Home/Home.svelte";
    import Router from "svelte-spa-router";
    import FAQ from "./lib/FAQ.svelte";
    import Static from "./lib/Static.svelte";
    import Footer from "./lib/components/Footer.svelte";
    import Contact from "./lib/components/Contact Us/Contact.svelte";

    const routes = {
        "/products": Products,
        "/about": About,
        "/home": Home,
        "/": Home,
        "/faqs": FAQ,
        "/contact": Contact,
    };
</script>

<svelte:head>
    <title>Puspa Group</title>
    <link rel="icon" href="/logo.png" />
    <link
        href="https://fonts.googleapis.com/css2?family=Jomhuria&display=swap"
        rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700"
        rel="stylesheet" />
</svelte:head>

<div class="grid grid-rows-[auto, 1fr, auto] min-h-screen">
    <Navbar />
    <Router {routes} />
    <Footer />
</div>
