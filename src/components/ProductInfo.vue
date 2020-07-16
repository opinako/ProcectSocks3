<template>

    <v-col cols="5" class="mt-6">
        <!-- <Product-info /> -->
        <h1>{{ product}}</h1>
        <p v-if="inStock">in Stock</p>
        <p v-else>Out of Stock</p>

        <ProductTabs />

        <div v-for="(variant,index) in variants" :key="variant.variantId" class="color-box" :style="{backgroundColor:variant.variantColor}" @mouseover="updateProduct(index)" ></div>
        <v-row class="mt-8">

            <v-btn small color="yellow" class="mr-2" :disabled="!inStock" @click="addToCart">
                <v-icon>mdi-cart-plus</v-icon>
                Add to Cart
            </v-btn>

            <v-btn small color="error" @click="handleClick(); removeToCart()" :disabled="!isLoaded">
                <v-icon>mdi-cart-remove</v-icon>
                Remove to Cart
            </v-btn>

        </v-row>
    </v-col>
</template>

<script>
    import {
        Sampler
    } from "tone";
    import A1 from "../assets/sound/DQnoroi.mp3";
    import ProductTabs from './ProductTabs'
    import {
        mapState,
        mapMutations
    } from 'vuex';

    export default {
        data() {
            return {
                product: 'Socks',
                isLoaded: false
            }
        },
        computed: {
            ...mapState( [
                'selectedVariant',
                'variants',
            ] ),
            inStock() {
                return this.variants[ this.selectedVariant ].variantQuantity
            }
        },
        methods: {
            ...mapMutations( [
                'updateProduct',
                'addToCart',
                'removeToCart',
            ] ),
            handleClick() {
                this.sampler.triggerAttack( 'A1' );
            }
        },
        components: {
            ProductTabs
        },
        created() {
            this.sampler = new Sampler( {
                A1
            }, {
                onload: () => {
                    this.isLoaded = true
                }
            } ).toMaster();
        }
    }
</script>

<style scoped>
    h1 {
        margin-bottom: 18px;
    }

    .product-info {
        color: red;
        margin-right: 25px;
    }

    .color-box {
        height: 40px;
        width: 40px;
        margin-bottom: 5px;
        cursor: pointer;
    }
</style>

<comment>
    クリックイベントを２つもたせる
    -> @click="handleClick(); removeToCart()"
</comment>