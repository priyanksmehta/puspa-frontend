<script lang="ts">
    import Navbar from "./lib/Navbar.svelte";
    import Products from "./lib/Products.svelte";
    import About from "./lib/About.svelte";
    import Home from "./lib/Home.svelte";
    import Router from "svelte-spa-router";
    import FAQ from "./lib/FAQ.svelte";
    import Static from "./lib/Static.svelte";
    import Test from "./lib/Test.svelte";

    const routes = {
        "/products": Products,
        "/about": About,
        "/home": Home,
        "/": Home,
        "/faqs": FAQ,
        "/css": Static,
        "/test": Test,
    };

</script>

<svelte:head>
    <title>Puspa Group</title>
    <link rel="icon" href="/logo.png" />
</svelte:head>

<body>
    <Navbar />
    <Router {routes} />
</body>
