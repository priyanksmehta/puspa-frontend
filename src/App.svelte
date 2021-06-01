<script lang="ts">
    import Navbar from "./Navbar.svelte";
    import Products from "./Products.svelte";
    import DataEntry from "./DataEntry.svelte";
    import Router from "svelte-spa-router";

    const routes = {
        "/home": Products,
        "/dataentry": DataEntry,
    };

</script>

<body>
    <Navbar />
    <Router {routes} />
</body>
