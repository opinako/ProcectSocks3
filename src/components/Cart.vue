<template>
  <div class="cart">
        <p @change="phone">
            <v-icon>mdi-cart</v-icon>
            Cart( {{ $store.state.cart.length}} )</p>
      </div>
</template>

<script>
export default {
    methods:{
        phone(){
            
        }
    }

}
</script>

<style>
    .cart {
    margin-right: 25px;
    float: right;
    border: 1px solid #d8d8d8;
    padding: 20px 20px 5px;
  }
</style>