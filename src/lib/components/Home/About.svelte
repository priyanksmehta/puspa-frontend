<script>
    import { link } from "svelte-spa-router";

</script>

<div class="grid grid-cols-[auto,1fr] items-center my-10">
    <div class="relative inline-block ml-40 m-3 overflow-hidden">
        <img
            class="block duration-500 ease-in-out transform hover:scale-125"
            src="/about_us.png"
            alt="about" />
    </div>
    <div class="px-10  overflow-x-auto mr-40">
        <div class="text-4xl">
            The Puspa Group was established in Kolkata in the year 1956 as an
            agarbatti manufacturing company, and within a short span
        </div>
        <div class="mt-14">
            conquered many markets across India . In 1960, it established its
            manufacturing hub in Bangalore, the capital of the Indian agarbatti
            industry. In the year 1969, it launched its flagship brand, Green
            Champa, which has been a market leader and a household name for the
            past 50 years. In the year 1975, the Puspa Group started sourcing
            perfumer raw materials for in house consumption…
        </div>
        <div class="mt-8">
            <span
                class="top-3 w-14 float-left relative mr-3 border-t-2 border-0 border-main-theme" />
            <a class="text-main-theme" href={"/about"} use:link>Read More</a>
        </div>
    </div>
</div>
