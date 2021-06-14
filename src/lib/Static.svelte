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

<!-- <template>
    <div class="pt-32">
        <div class="flex pl-40">
            <div>
                <div class="my-auto mr-40">Companies</div>
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
                    <div class="ml-8 mr-60 w-72 text-3xl font-sans">
                        <b>Product List</b>
                    </div>
                    <div class="my-auto border border-gray-900">
                        <input class="w-72" type="text" placeholder="Search" />
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
    </div></template> -->

<div class="pt-40 grid grid-cols-[0.7fr,2fr]">
    <div class="ml-40">Companies</div>
    <div class="flex">
        <div class=" my-auto w-5/12 text-3xl"><b>Product List</b></div>
        <div class="my-auto">
            <input
                class="border-black border"
                type="text"
                placeholder="Search" />
        </div>
        <div class="my-auto mx-2.5">Sort by:</div>
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
    <div class="ml-40">Tags</div>
    <div>
        {#each products as product}
            <div class="flex mt-8">
                <div
                    class="align-middle my-auto p-4 border-r-[1px] border-gray-300">
                    <img src={product.logo} alt="product logo" />
                </div>
                <div class="pl-6 my-auto w-7/12 bg-flower-pattern">
                    <div>
                        <span class="text-xl">{product.product}</span>
                        <span class="text-sm text-gray-600"
                            >{product.origin}</span>
                    </div>
                    <div>
                        {product.source}
                    </div>
                    <div>
                        {product.tag}
                    </div>
                </div>
                <div class="my-auto">
                    <span class="px-1"><u>COA</u></span>
                    <span class="px-1"><u>MSDS</u></span>
                </div>
                <div
                    class="my-auto bg-cart-button border-1 border-gray-100 mx-auto px-4 py-2 text-white">
                    <button>Add to Cart</button>
                </div>
            </div>
        {/each}
    </div>
</div>
