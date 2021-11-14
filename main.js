//this is a Vue instance which powers our app. It must always
// be passed an Options Object, even if empty.
const app = Vue.createApp({
    data: function(){
        return{
            product: 'Socks',
            description: 'Available in Blue and Green'
        }
    }
})