<script>
    let visible = false;

    function show() {
        visible = !visible;
    }
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 my-10">
    <div
        class="lg:mx-auto md:mx-10 mx-4 relative inline-block overflow-hidden lg:w-full md:my-auto">
        <img
            class="block duration-500 ease-in-out transform hover:scale-125 md:mx-auto"
            src="about_us_summary.png"
            alt="summary" />
    </div>
    <div class="md:px-10 lg:mx-auto md:my-auto mx-4">
        <div class="lg:text-4xl text-2xl mt-10">
            The Puspa Group was established in Kolkata in the year 1956 as an
            Agarbatti manufacturing company and within a short span, conquered
            many markets across India.
        </div>
        <div class="mt-10 lg:text-lg text-base">
            In 1960, it established its manufacturing hub in Bangalore, the
            capital of the Indian Agarbatti Industry. In the year 1969, it
            launched its flagship brand, Green Champa, which has been a market
            leader and a household name for the past 50 years.In the year 1975
            the Puspa Group started sourcing perfumery raw materials for
            in-house consumption, and sensing a growing demand for raw materials
            in the ever-growing perfumery industry in India, the company
            established its trading operations in Aromatic Chemicals and
            Essential Oils.
        </div>
        {#if visible}
            <div>
                <p class="mt-10">
                    The 1990s saw a growth explosion in the Paan Masala, Chewing
                    Tobacco, and allied industries, which required quality
                    ingredients from the world over. From the year 1992, the
                    Puspa Group identified quality manufacturers of various oils
                    (Patchouli being the prime example) across the globe, and
                    ventured into the import of global essential oils in order
                    to cater to the Indian tobacco industry. In doing so, it
                    also started catering to the wider Fragrances and Flavor
                    industry.
                </p>
                <p class="mt-10">
                    Today, after 50+ years in the perfumery trading indsutry,
                    the Puspa Group is a leading importer and trader of
                    fragrance raw materials in India, and is a reliable source
                    for top quality ingredients from across the globe. It is a
                    major vendor to the Paan Masala, Chewing Tobacco, Agarbatti,
                    Soaps, Detergents, and Fragrances and Flavor industries.
                </p>
            </div>
            <div class="mt-4">
                <span
                    class="top-3 w-14 float-left relative mr-3 border-t-[1px] border-0 border-main-theme" />
                <button class="text-main-theme font-medium" on:click={show}
                    >COLLAPSE</button>
            </div>
        {:else}
            <div class="mt-4">
                <span
                    class="top-3 w-14 float-left relative mr-3 border-t-[1px] border-0 border-main-theme" />
                <button class="text-main-theme font-medium" on:click={show}
                    >EXPAND</button>
            </div>
        {/if}
    </div>
</div>
