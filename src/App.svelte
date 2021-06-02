<script lang="ts">
    import Navbar from "./lib/Navbar.svelte";
    import Products from "./lib/Products.svelte";
    import About from "./lib/About.svelte";
    import Home from "./lib/Home.svelte";
    import Router from "svelte-spa-router";

    const routes = {
        "/products": Products,
        "/about": About,
        "/home": Home,
    };

</script>

<svelte:head>
    <title>Puspa Group</title>
    <link rel="icon" href="/logo.png" />
</svelte:head>

<body>
    <Navbar />
    <Home />
    <Router {routes} />
</body>
