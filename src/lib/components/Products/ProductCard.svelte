<script lang="ts">
    import type { Product } from "../../Datatypes.svelte";
    export let displayProducts: Product[];
</script>

<div>
    {#each displayProducts as product}
        <div class="grid grid-rows-[1fr,1fr,auto,1fr] lg:flex lg:mt-8 mt-4">
            <div
                class="align-middle my-auto p-4 pl-6 lg:border-r-[1px] border-gray-300">
                <img class="" src="ptkarimun.png" alt="product logo" />
            </div>
            <div class="pl-6 my-auto w-full lg:w-5/12 lg:ml-2">
                <div>
                    <span class="text-xl">{product.product}</span>
                    <span class="text-sm text-gray-600">{product.origin}</span>
                </div>
                <div>
                    {product.source}
                </div>
                <div>
                    {product.tag}
                </div>
            </div>
            <div class="lg:my-auto pl-6">
                <span class="lg:px-1"><u>COA</u></span>
                <span class="lg:px-1"><u>MSDS</u></span>
            </div>
            <div
                class="my-auto bg-cart-button border-1 border-gray-100 lg:ml-10 ml-6 w-32 lg:mr-0 px-4 py-2 text-white text-center">
                <button>Add to Cart</button>
            </div>
        </div>
    {/each}
</div>
