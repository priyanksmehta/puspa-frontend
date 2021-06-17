<script lang="ts">
    import { onMount } from "svelte";
    import ProductCard from "./components/ProductCard.svelte";
    import UpArrow from "./components/icons/up_arrow.svelte";
    import DownArrow from "./components/icons/down_arrow.svelte";

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
            (item) => item.product.toLowerCase().indexOf(searchTerm) !== -1
        );

    onMount(async () => {
        products = await getProducts();
        sources = [...new Set(products.map((item: Product) => item.source))];
        tags = [...new Set(products.map((item: Product) => item.tag))];
    });

    async function getProducts() {
        const data = await fetch("http://192.168.1.19:5000/shop/products");
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

<!--
    <div class="flex pt-32">
        <div>
            Filter by: Source
            <div>
                {#each sources as source}
                    <div>
                        <label
                            ><input
                                type="checkbox"
                                bind:group={selectedSources}
                                value={source} />
                            {source}</label>
                    </div>
                {/each}
            </div>
        </div>
        <div>
            Filter by: Tag
            <div>
                {#each tags as tag}
                    <div>
                        <label
                            ><input
                                type="checkbox"
                                bind:group={selectedTags}
                                value={tag} />
                            {tag}</label>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div class="container">
        <div class="table-row-group">
            <span>Product</span>
            <span>Source</span>
            <span>Tag</span>
            <span>Country of Origin</span>
        </div>
        {#each displayProducts as product_name}
            <div class="table-row-group">
                <span class="table-cell pl-1 pr-4">{product_name.product}</span>
                <span class="table-cell pr-4">{product_name.source}</span>
                <span class="table-cell pr-4">{product_name.tag}</span>
                <span class="table-cell pr-4">{product_name.origin}</span>
            </div>
        {/each}
    </div> -->

<!-- <template>
    <div class="pt-32 pl-80">
        <div class="flex">
            <div class="ml-8 mr-40 w-6/12 text-3xl font-sans">
                <b>Product List</b>
            </div>
            <div class="my-auto border border-gray-900">
                <input type="text" placeholder="Search" />
            </div>
            <div class="my-auto ml-4 text-md text-gray-500">Sort by:</div>
            <div class="my-auto">
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
            <div class="my-auto">
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </button>
            </div>
        </div>
        {#each displayProducts as product}
            <div class="container flex mt-8 bg-white">
                <div
                    class="align-middle my-auto mx-6 p-4 border-r-[1px] border-gray-300">
                    <img class="" src="ptkarimun.png" alt="logo" />
                </div>
                <div class="py-6 w-7/12">
                    <div>
                        <span class="text-xl">
                            {product.product}
                        </span>
                        <span class="text-sm">
                            {product.origin}
                        </span>
                    </div>
                    <div class="text-lg">
                        {product.source}
                    </div>
                    <div>
                        {product.tag}
                    </div>
                </div>
                <div class="my-auto mx-3">
                    <span class="mx-3"><u>COA</u></span>
                    <span class="mx-3"><u>MSDS</u></span>
                </div>
                <div
                    class="mx-auto my-auto px-4 py-2 border-[1px] border-gray-100 bg-cart-button">
                    <button class="text-white">Add to cart</button>
                </div>
            </div>
        {/each}
    </div>
</template> -->

<div class="pt-40 grid grid-cols-[0.7fr,1.4fr,0.7fr] bg-website-background">
    <div class="ml-40">
        <div>Companies</div>
        {#each sources as source}
            <div>
                <input type="checkbox" />
                {source}
            </div>
        {/each}
        <div>Tags</div>
    </div>
    <div>
        <div class="flex items-center">
            <div class="w-5/12 text-3xl"><b>Product List</b></div>
            <div class="">
                <input
                    class="border-black border"
                    type="text"
                    placeholder="Search"
                    bind:value={searchTerm} />
            </div>
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
