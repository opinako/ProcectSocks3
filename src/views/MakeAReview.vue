<template>
    <v-form ref="form" v-model="valid" lazy-validation  @submit.prevent="sendToReviews">
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

        <v-text-field v-model="review" :rules="emailRules" label="Review" required></v-text-field>

<v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          large
        ></v-rating>

        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>

        <div class="mb-5">
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                Validate
            </v-btn>

            <v-btn color="warning" type="submit">
                Send to Reviews
            </v-btn>
        </div>

    </v-form>
</template>

<script>
    import {
        mapMutations
    } from 'vuex';

    export default {
        data: () => ( {
            reviews: [],
            valid: true,
            // name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => ( v && v.length <= 10 ) || 'Name must be less than 10 characters',
            ],
            // review: '',
            reviewRules: [
                v => !!v || 'Review is required',
            ],
            select: null,
            // rating: [
            // '5',
            // '4',
            // '3',
            // '2',
            // '1'
            // ],
            checkbox: false,
        } ),
        methods: {
            validate() {
                this.$refs.form.validate()
            },
            ...mapMutations( [
                'sendToReviews'
            ] )
        },
        computed: {
            name: {
                get() {
                    return this.$store.state.name
                },
                set( value ) {
                    this.$store.commit( 'updateName', value )
                }
            },
            review: {
                get(){
                    return this.$store.state.review
                },
                set(value){
                    this.$store.commit('updateReview', value)
                }
            },
            rating:{
                get(){
                    return this.$store.state.rating
                },
                set(value){
                    this.$store.commit('updateRating', value)
                }
            }
        }
    }
</script>