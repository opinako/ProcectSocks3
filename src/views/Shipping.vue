<template>
  <div>
      <p>{{ shipping }}</p>
  </div>
</template>

<script>
export default {
    computed:{
        shipping(){
            if(this.$store.state.premium){
                return 'free'
            } else {
                return '2.99'
            }
        }
    }

}
</script>

<style>

</style>