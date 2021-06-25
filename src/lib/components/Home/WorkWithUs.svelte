<script lang="ts">
    const workWithUs: string[] = [
        "Why work with us",
        "Diverse Product Range",
        "Dedicated Customer Service",
        "International Quality Control Standards",
        "Competitive Pricing",
        "Quality Packaging",
        "Premium Quality Products",
        "Best Global Shipping Rates",
        "World Class Infrastructure",
        "100% Customer Satisfaction Guarantee",
        "ISO 9001-2008 Standard Practices",
        "Authenticity and Purity",
    ];
</script>

<div class="grid lg:grid-cols-[10%,80%,10%] pt-20">
    <div />
    <div class="grid lg:grid-cols-4 md:grid-cols-3 text-lg">
        {#each workWithUs as item, i}
            <div
                class="cell-lg md:cell-md border-r-[1px] border-b-[1px] border-work-with-us border-opacity-20">
                <div class="p-5 m-5">
                    {#if i > 0}
                        <span class="dot mb-[2px]" />
                        <span class="ml-2">{item}</span>
                    {:else}
                        <span class="text-2xl font-medium">{item}</span>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
    <div />
</div>

<style>
    .dot {
        height: 7px;
        width: 7px;
        background-color: #67c529;
        border-radius: 50%;
        display: inline-block;
    }

    .cell-lg:nth-child(4n) {
        border-right-width: 0;
    }

    .cell-md:nth-child(3n) {
        border-right-width: 0;
    }
</style>
