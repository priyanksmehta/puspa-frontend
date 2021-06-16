<script lang="ts">
    import type { Product } from "../Datatypes.svelte";
    export let products: Product[];

</script>

<div>
    {#each products as product}
        <div class="flex mt-8">
            <div
                class="align-middle my-auto p-4 border-r-[1px] border-gray-300">
                <img src="ptkarimun.png" alt="product logo" />
            </div>
            <div class="pl-6 my-auto w-7/12">
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
