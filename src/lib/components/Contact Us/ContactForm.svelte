<script>
    import { text } from "svelte/internal";
</script>

<div class="grid grid-cols-1 lg:grid-cols-[20%,40%,20%,20%]">
    <div />
    <div>
        <div class="mt-40 text-3xl ml-2 lg:ml-0">Contact</div>
        <div class="grid grid-rows-[auto,auto,1fr, auto]">
            <div class="grid grid-cols-1 lg:flex w-full">
                <span
                    class="border-[1px] lg:mr-8 lg:ml-0 mt-4 lg:mt-8 lg:w-6/12 mx-2">
                    <input
                        class="p-2 w-full"
                        type="text"
                        placeholder="Full Name" />
                </span>
                <span class="border-[1px] mt-2 lg:mt-8 lg:w-6/12 mx-2 lg:mx-0">
                    <input
                        class="p-2 w-full"
                        type="text"
                        placeholder="Contact No." />
                </span>
            </div>
            <div
                class="grid grid-cols-1 lg:flex lg:mt-4 gap-y-2 mt-2 lg:mx-0 mx-2">
                <div class="border-[1px] lg:mr-8 lg:w-1/2">
                    <input
                        class="p-2 w-full"
                        type="text"
                        placeholder="Email Address" />
                </div>
                <div class="border-[1px] lg:w-1/2">
                    <input
                        class="p-2 w-full"
                        type="text"
                        placeholder="Subject" />
                </div>
            </div>
            <div class="flex mt-2 lg:mt-4 border-[1px] h-32 lg:mx-0 mx-2">
                <textarea
                    class="resize-none w-full px-2"
                    placeholder="Message" />
            </div>
            <div class="mt-4 float-right text-right lg:mr-0 mr-2">
                <button class="bg-cart-button text-white px-10 py-2"
                    >Submit</button>
            </div>
        </div>
    </div>
    <div>
        <div class="lg:mt-56 mt-20 lg:ml-14 ml-4 text-2xl">Locate Us</div>
        <div class="mt-8 lg:ml-14 ml-4 text-gray-500">
            <p class="text-gray-700 text-xl">Corporate Office:</p>
            <p class="mt-2">
                91/13, SSI Area, 4th Cross<br />
                5th Block, Rajajinagar<br />
                Bangalore - 560010
            </p>
            <p>+91 80 23300245</p>
            <p>+91 80 23155031</p>
            <p>puspa@puspagroup.in</p>
        </div>
        <div class="mt-8 mb-10 ml-4 lg:ml-14 text-gray-500">
            <p class="text-gray-700 text-xl">Global Specialities:</p>
            <p class="mt-2">
                25, SSI Area, 5th Cross<br />
                5th Block, Rajajinagar<br />
                Bangalore - 560010
            </p>
            <p>+91 80 23408558</p>
            <p>gs@puspagroup.in</p>
        </div>
    </div>
    <div />
</div>
