<script lang="ts">
    import Navbar from "./Navbar.svelte";
    import Home from "./Home.svelte";
    import DataEntry from "./DataEntry.svelte";
    import Router from "svelte-spa-router";

    const routes = {
        "/home": Home,
        "/dataentry": DataEntry,
    };

</script>

<body>
    <Navbar />
    <Router {routes} />
</body>
