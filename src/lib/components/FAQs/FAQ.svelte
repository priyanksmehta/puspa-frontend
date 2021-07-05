<script>
    let selected;

    function toggleSelect() {
        selected !== 1 ? (selected = 1) : (selected = 0);
    }
</script>

<template>
    <div
        class="bg-white max-w-xl mx-auto border border-gray-200"
        x-data={selected}>
        <ul class="shadow-box">
            <li class="relative border-b border-gray-200">
                <button
                    type="button"
                    class="w-full px-8 py-6 text-left"
                    on:click={toggleSelect}>
                    <div class="flex items-center justify-between">
                        <span> Should I use reCAPTCHA v2 or v3? </span>
                        <span class="ico-plus" />
                    </div>
                </button>
                <div
                    class="relative overflow-hidden transition-all max-h-0 duration-700"
                    style=""
                    x-ref="container1"
                    x-bind:style="selected == 1 ? 'max-height: ' + $refs.container1.scrollHeight + 'px' : ''">
                    <div class="p-6">
                        <p>
                            reCAPTCHA v2 is not going away! We will continue to
                            fully support and improve security and usability for
                            v2.
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
