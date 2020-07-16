<template>
  <div>
    <v-app-bar class="app-bar mb-4" height="60">
    </v-app-bar>
    <v-header>
      <Cart />
    </v-header>


    <v-main>
      <v-container>
        <v-row>
          <ProductImage />
          <ProductInfo />
        </v-row>
      </v-container>
    </v-main>
  </div>

</template>

<script>
  import ProductInfo from './ProductInfo'
  import ProductImage from './ProductImage'
  import Cart from './Cart'

  export default {
    components: {
      ProductInfo,
      ProductImage,
      Cart,
  }
  }
</script>

<style>
  .app-bar {
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
  }  
  .img {
    box-shadow: 0px .5px 1px #d8d8d8;
    border: 1px solid red;
  }
</style>