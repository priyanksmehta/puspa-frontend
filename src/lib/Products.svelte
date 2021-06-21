<script lang="ts">
    import { onMount } from "svelte";
    import ProductCard from "./components/ProductCard.svelte";
    import UpArrow from "./components/icons/up_arrow.svelte";
    import DownArrow from "./components/icons/down_arrow.svelte";

    import type { Product, ProductResponse } from "./Datatypes.svelte";
    import { each } from "svelte/internal";

    let products: Product[] = [],
        sources: string[] = [],
        tags: string[] = [],
        selectedSources: string[] = [],
        selectedTags: string[] = [],
        displayProducts: Product[];

    $: displayProducts = products
        .filter((p) => {
            const isAllSources = selectedSources.length === 0;
            const isAllTags = selectedTags.length === 0;
            const isSelectedSource = selectedSources.includes(p.source);
            const isSelectedTag = selectedTags.includes(p.tag);
            if (isAllSources && isAllTags) return true;
            if (isAllSources && isSelectedTag) return true;
            if (isAllTags && isSelectedSource) return true;
            if (isSelectedTag && isSelectedSource) return true;
            return false;
        })
        .filter(
            (item) => item.product.toLowerCase().indexOf(searchTerm) !== -1
        );

    onMount(async () => {
        products = await getProducts();
        sources = [...new Set(products.map((item: Product) => item.source))];
        tags = [...new Set(products.map((item: Product) => item.tag))];
    });

    async function getProducts() {
        const data = await fetch("http://192.168.1.35:5000/shop/products");
        const products: ProductResponse = await data.json();
        return products.data;
    }

    function sortAscending() {
        products = products.sort((a, b) => {
            if (a.product < b.product) {
                return -1;
            }
            if (a.product > b.product) {
                return 1;
            }
            return a.source < b.source ? -1 : 1;
        });
    }

    function sortDescending() {
        products = products.sort((a, b) => {
            if (a.product > b.product) {
                return -1;
            }
            if (a.product < b.product) {
                return 1;
            }
            return a.source > b.source ? -1 : 1;
        });
    }

    let searchTerm = "";

</script>

<div class="pt-40 grid grid-cols-[40%,60%] bg-website-background">
    <div class="ml-40">
        <div class="">
            <input
                class="border-black border"
                type="text"
                placeholder="Search"
                bind:value={searchTerm} />
        </div>
        <div>Companies</div>
        {#each sources as source}
            <div>
                <input
                    type="checkbox"
                    bind:group={selectedSources}
                    value={source} />
                {source}
            </div>
        {/each}
        <div>Tags</div>
        {#each tags as tag}
            <div>
                <input type="checkbox" bind:group={selectedTags} value={tag} />
                {tag}
            </div>
        {/each}
    </div>
    <div>
        <div class="flex items-center">
            <div class="w-10/12 text-3xl"><b>Product List</b></div>
            <div class="mx-2.5">Sort by:</div>
            <div>
                <button on:click={sortAscending}>
                    <UpArrow />
                </button>
            </div>
            <div>
                <button on:click={sortDescending}>
                    <DownArrow />
                </button>
            </div>
        </div>
        <div>
            <ProductCard {displayProducts} />
        </div>
    </div>
    <div />
</div>
