<script>
    import { each } from "svelte/internal";

    const products = [
        {
            product: "Patchouli Oil",
            source: "PT Karimun",
            tag: "Natural Essential Oil",
            origin: "Indonesia",
            logo: "ptkarimun.png",
        },
        {
            product: "Patchouli Oil",
            source: "KL Koh",
            tag: "Natural Essential Oil",
            origin: "Indonesia",
            logo: "klkoh.png",
        },
        {
            product: "Lemon Oil",
            source: "Citrus Italiana",
            tag: "Natural Essential Oil",
            origin: "Italy",
            logo: "ci.png",
        },
    ];

    const sources = ["PT Karimun", "KL Koh", "Citrus Italiana"];

</script>

<template>
    <div class="pt-32">
        <div class="flex pl-60">
            <div>
                <div class="my-auto">Companies</div>
                <div>
                    {#each sources as source}
                        <div>
                            <label><input type="checkbox" />{source}</label>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="">
                <div class=" flex mr-96">
                    <div class="ml-8 w-6/12 text-3xl font-sans">
                        <b>Product List</b>
                    </div>
                    <div class="my-auto border border-gray-900">
                        <input type="text" placeholder="Search" />
                    </div>
                    <div class="my-auto ml-4 text-md text-gray-500">
                        Sort by:
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
                {#each products as product}
                    <div class="container flex mt-8 bg-white">
                        <div
                            class="align-middle my-auto mx-6 p-4 border-r-[1px] border-gray-300">
                            <img class="" src={product.logo} alt="logo" />
                        </div>
                        <div class="py-6 w-6/12">
                            <div>
                                <span class="text-xl">
                                    {product.product}
                                </span>
                                <span class="text-sm">
                                    {product.origin}
                                </span>
                            </div>
                            <div>
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
        </div>
    </div></template>
