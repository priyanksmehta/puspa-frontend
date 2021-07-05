<script lang="ts">
    import type { SignupResponse } from "../../Datatypes.svelte";

    let company: string = "",
        email: string = "",
        password: string = "",
        confirm: string = "",
        gst: string = "";

    let userRegistration: SignupResponse = { status: false };

    const registerUser = async (): Promise<SignupResponse> => {
        let response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({
                company: company,
                email: email,
                password: password,
                gst: gst,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const signupResponse: SignupResponse = await response.json();
        if (response.status) {
            return signupResponse;
        } else {
            throw new Error(signupResponse.error);
        }
    };

    const handleSubmit = async () => {
        userRegistration = await registerUser();
        if (userRegistration.status) {
            alert(userRegistration.message);
        } else {
            alert(userRegistration.error);
        }
    };
</script>

<div class="mt-60 align-middle mx-auto">
    <div class="text-2xl font-heebo font-medium">Create Account</div>
    <div class="my-2 text-sm text-gray-600">Get Access to your Orders</div>
    <div class="mt-2">
        <input
            class="border-[1px] h-10 pl-2 w-60"
            type="text"
            placeholder="Company Name"
            bind:value={company} />
    </div>
    <div class="mt-2">
        <input
            class="border-[1px] h-10 pl-2 w-60"
            type="text"
            placeholder="Email"
            bind:value={email} />
    </div>
    <div class="mt-2">
        <input
            class="border-[1px] h-10 pl-2 w-60"
            type="password"
            placeholder="Password"
            bind:value={password} />
    </div>
    <div class="mt-2">
        <input
            class="border-[1px] h-10 pl-2 w-60"
            type="password"
            placeholder="Confirm Password"
            bind:value={confirm} />
    </div>
    <div class="mt-2">
        <input
            class="border-[1px] h-10 pl-2 w-60"
            type="text"
            placeholder="GST Number"
            bind:value={gst} />
    </div>
    <div class="mt-4">
        <button
            class="bg-cart-button text-white w-60 h-10"
            on:click={handleSubmit}>Create an Account</button>
    </div>
    <div class="mt-8 mb-32">
        Already Have an Account? <a href={"#"}>Login</a>
    </div>
</div>
