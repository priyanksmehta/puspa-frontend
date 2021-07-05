<script lang="ts" context="module">
    export interface ProductResponse {
        status: Boolean;
        data: Product[];
    }

    export interface Product {
        product: string;
        source: string;
        tag: string;
        origin: string;
        logo: string;
    }

    export interface SignupResponse {
        status: boolean;
        message?: string;
        token?: string;
        error?: string;
    }
</script>
