const myApp = Vue.createApp({
    data() {
        return {
            cart:0,
            premium: true
            
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
    }
})
