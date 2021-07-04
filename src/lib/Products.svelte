<script lang="ts">
    import { onMount } from "svelte";
    import ProductCard from "./components/ProductCard.svelte";
    import UpArrow from "./components/icons/up_arrow.svelte";
    import DownArrow from "./components/icons/down_arrow.svelte";
    import Search from "./components/icons/search.svelte";

    import type { Product, ProductResponse } from "./Datatypes.svelte";

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
            (item) =>
                item.product.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
                -1
        );

    onMount(async () => {
        products = await getProducts();
        sources = [...new Set(products.map((item: Product) => item.source))];
        tags = [...new Set(products.map((item: Product) => item.tag))];
    });

    async function getProducts() {
        const data = await fetch("https://puspagroup.com/api/shop/products");
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

<template>
    <div
        class="pt-40 grid lg:grid-cols-[18%,22%,48%,12%] sm:grid-cols-1 md:grid-cols-1">
        <div />
        <div class="mb-20 lg:block hidden">
            <div class="border-gray-400 border-b w-9/12 flex h-10 mb-2">
                <div class="pt-2.5"><Search /></div>
                <input
                    class="pl-2 w-full"
                    type="text"
                    placeholder="Search"
                    bind:value={searchTerm} />
            </div>
            <div class="text-2xl mt-4 mb-2">Company</div>
            {#each sources as source}
                <div
                    class="flex items-center text-xl font-light text-gray-600 font-heebo">
                    <input
                        type="checkbox"
                        class="form-checkbox border-[1px] border-gray-300 mr-4 text-main-theme"
                        bind:group={selectedSources}
                        value={source} />
                    <span class="">{source}</span>
                </div>
            {/each}
            <div class="text-2xl mt-5 mb-2">Tags</div>
            {#each tags as tag}
                <div
                    class="flex items-center text-xl font-light text-gray-600 font-heebo">
                    <input
                        type="checkbox"
                        class="mr-4 text-main-theme form-checkbox border-[1px] border-gray-300"
                        bind:group={selectedTags}
                        value={tag} />
                    {tag}
                </div>
            {/each}
        </div>
        <!-- Update route to show number of notifications -->
        <div>
            <div class="grid grid-cols-1 lg:grid-cols-3 items-center w-full">
                <div class="lg:w-[68%] text-3xl text-center lg:float-left">
                    <b>Product List</b>
                </div>
                <div class="mx-2.5 hidden lg:block">Sort by:</div>
                <div class="hidden lg:block">
                    <button on:click={sortAscending}>
                        <UpArrow />
                    </button>
                </div>
                <div class="hidden lg:block">
                    <button on:click={sortDescending}>
                        <DownArrow />
                    </button>
                </div>
            </div>
            <div class="mb-10 h-[60vh] overflow-y-scroll">
                <ProductCard {displayProducts} />
            </div>
        </div>
        <div />
    </div>
</template>
