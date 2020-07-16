<template>
  <v-app>    
      <Product />
  </v-app>
</template>

<script>
import Product from './components/Product';

export default {
  name: 'App',

  components: {
    Product,
  },

  data: () => ({
    //
  }),
};
</script>


