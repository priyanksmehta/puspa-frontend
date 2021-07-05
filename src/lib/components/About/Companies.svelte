<script>
    const companyData = [
        {
            company: "Blue Lotus",
            image: "bl_companies.png",
            tagline: "French Absolutes and Specialities",
            bio: `The Blue Lotus range of Naturals, Reconstitued Essential Oils,
                    and Tobacco specialities was launched in 2015 in partnership with a 
                    leading French perfumery contract manufacturing company.`,
        },
        {
            company: "PT Karimun Kencana Aromatics",
            image: "ptk_companies.png",
            tagline: "Indonesian Essential Oils",
            bio: `PT Karimun Kencana Aromatics was established in 1965 in the city of
            Medan, the chief city on the island of Sumatra, Indonesia. For the
            past 60 years, it has been one of the world's leading producers of
            Indonesian Essential Oils, led by Patchouli Oil and followed by
            Vetiver Oil, Clove Oil, Citronella, and Nutmeg Oil. The company is
            owned and led by the dynamic and enterprising Mr. Petrus Arifin,
            whose passion for quality assurance is legendary.`,
        },
        {
            company: "KL Koh Enterprises",
            image: "klk_companies.png",
            tagline: "Indonesian Essential Oils",
            bio: `M/s KL Koh Enterprises, founded in 1971 by the visionary Mr. KL
                Koh, is one of the pioneers of Patchouli Oil, and their premium
                Patchouli Oil SPX is widely respected and used across India.
                Today, Mr. KL Koh is ably and competently aided by his dynamic
                son Mr. Edwin Koh, who has formed a large network for the export
                of Indonesian Essential Oils across the world.`,
        },
        {
            company: "Aromatica LF",
            image: "lf_companies.png",
            tagline: "French Premium Essential Oils",
            bio: `Established in the year 2000, Aromatica LF is ably led by a leading
            French Flavorist, Ms. Corrine Barrault, and assisted by the famous
            Mr. Guy Petit, who thoroughly understands the Indian Perfumery and
            Tobacco markets. The company manufactures the most widely used
            ingredient in the tobacco industry, Geranium DBLF, and is the market
            leader in India for this product. The taste and flavor of this
            orifinal is incomparable and is favored across India, despite many
            cheaper versions floating around in the market. The company also
            manufactures the well known and widely accepted LF range of
            products.`,
        },
        {
            company: "Fine Organics",
            image: "fine_companies.png",
            tagline: "Oleochemical Derivatives for Diverse Applications",
            bio: `Founded in 1970, Fine Organics introduced the Indian market to
                high-quality additives for specialty applications with raw
                materials from locally grown plant sources and quality levels on
                par with international standards. Today, Fine's range of innovative additives has expanded their
                reach into several specialty applications in food, plastics,
                cosmetics, textiles, paints, inks, rubbers, and manymore. A
                technology and customer driven company, Fine Organics enjoys a
                privileged positoin in the specialty additives industry
                globally. Fine Organics owes its growth and success to its
                expertise in oleochemistry, in-house manufacturing technology,
                customer-centric research, and development and techno-commerical
                mindset.`,
        },
        {
            company: "Daiwik Pharmasphere Pvt. Ltd.",
            image: "daiwik_companies.jpg",
            tagline: "Pharma Technology",
            bio: `Daiwik Pharmasphere Private Limited was established in 2010, with a
            goal to create a WHO, and EU GMP compliant manufacturing facility
            for pharmaceuticals, gels, and ointments. The company manufactures a
            wide range of formulations primarily for contract manufacturing and
            worldwide exports.`,
        },
    ];
</script>

<div class="lg:grid lg:grid-cols-[50%,50%] items-center hidden">
    {#each companyData as company, idx}
        {#if idx % 2 == 0}
            <div class="relative inline-block overflow-hidden">
                <img
                    class="block duration-500 ease-in-out transform hover:scale-125"
                    src={company.image}
                    alt="alt companies" />
            </div>
            <div class="px-20 lg:m-0 items-center lg:block">
                <div class="text-4xl">{company.company}</div>
                <div class="text-xl text-gray-600">
                    {company.tagline}
                </div>
                <div class="mt-4">
                    <p>
                        {company.bio}
                    </p>
                </div>
            </div>
        {:else}
            <div class="px-20 lg:m-0 items-center lg:block">
                <div class="text-4xl">{company.company}</div>
                <div class="text-xl text-gray-600">
                    {company.tagline}
                </div>
                <div class="mt-4">
                    <p>
                        {company.bio}
                    </p>
                </div>
            </div>
            <div class="relative inline-block overflow-hidden">
                <img
                    class="block duration-500 ease-in-out transform hover:scale-125"
                    src={company.image}
                    alt="alt companies" />
            </div>
        {/if}
    {/each}
</div>

<div class="grid grid-cols-1 items-center lg:hidden mb-5">
    {#each companyData as company}
        <div class="md:m-10">
            <img src={company.image} alt="alt companies" />
        </div>
        <div class="md:ml-10 ml-4 my-4">
            <div class="md:text-4xl text-2xl">
                {company.company}
            </div>
            <div class="md:text-2xl text-lg">
                {company.tagline}
            </div>
            <div class="md:mr-10 mr-4 md:text-base text-sm">{company.bio}</div>
        </div>
    {/each}
</div>
