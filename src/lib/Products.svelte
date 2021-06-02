<script>
    let products = getProducts();

    async function getProducts() {
        const data = await fetch("http://192.168.1.19:5000/shop/products");
        const products = await data.json();
        return products.data;
    }

</script>

<template>
    <div class="container mx-auto">
        {#await products then product}
            {#each product as product_name}
                <div class="table-row-group">
                    <span class="table-cell pl-1 pr-4"
                        >{product_name.product}</span>
                    <span class="table-cell pr-4">{product_name.source}</span>
                    <span class="table-cell pr-4">{product_name.tag}</span>
                    <span class="table-cell pr-4">{product_name.origin}</span>
                </div>
            {/each}
        {/await}
    </div>
</template>
