import router from '../router/index'
// import state from './state';
export default {
    updateProduct( state, index ) {
        state.selectedVariant = index
    },
    addToCart( state ) {
        state.cart.push( state.variants[ state.selectedVariant ].variantId )
    },
    removeToCart( state ) {
        state.cart = []
    },
    updateName( state, name ) {
        state.name = name
    },
    updateReview( state, review ) {
        state.review = review
    },
    updateRating( state, rating ) {
        state.rating = rating
    },
    sendToReviews( state ) {
        if ( state.name && state.review && state.rating ) {
            let productReview = {
                name: state.name,
                review: state.review,
                rating: state.rating
            }
            state.reviews.push( productReview )
            state.name = null,
                state.review = null,
                state.rating = null,
                router.push( '/reviews' )
        }
    },
}