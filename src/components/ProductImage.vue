<template>
    <v-col cols="6" class="mt-10 mr-n4">
        <v-tooltip bottom  :color="variants[selectedVariant].variantColor">
            <template v-slot:activator="{ on, attrs }">                <!-- <Product-img /> -->
                <v-img alt="靴下の写真" :src="image" class="img" height="333" width="333" v-bind="attrs" v-on="on" />
            </template>
            <span>{{variants[selectedVariant].variantColor}} 残り {{ variants[selectedVariant].variantQuantity}} 個</span>
        </v-tooltip>

    </v-col>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    export default {
        computed: {
            ...mapState( [
                'selectedVariant',
                'variants',
            ] ),
            image() {
                return this.variants[ this.selectedVariant ].variantImage
            }
        },


    }
</script>

<style>

</style>