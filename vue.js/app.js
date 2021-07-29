var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        sum: 3 + 6,
        value: 4,
        isVisible: false,
        people: ["Andres", "Juan", "Pepe", "Alejandro"],
        content_html: "<h1>Hola<h1>"
    },
    computed: {
        // a computed getter
        reversedMessage: function() {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        calculateSum(val1, val2) {
            return val1 + val2;
        }
    }

});