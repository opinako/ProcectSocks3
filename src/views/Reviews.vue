<template>
  <v-card>
    <v-card-text class="cyan--text">
      <ul>
        <li v-for="review in this.$store.state.reviews" :key="review.index">
          <p>{{ review.name }}</p>
          <p>{{ review.review }}</p>
          <p>{{ review.rating }}</p>

        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
</script>

<style>

</style>