const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})


var app = new Vue({
    el: '#app',
    router,
    data: {
        message: 'Hello Vue!',
        sum: 3 + 6,
        img_pixa: 'https://wallpaperaccess.com/full/1078159.jpg',
        isVisible: true,
        filtro_edad: 18,
        people: ["Andres", "Juan", "Pepe", "Alejandro"],
        CopyArrayObjects: [],
        ArrayObjets: [
            { name: "Andres", surname: "cruz", age: 28 },
            { name: "Fernando", surname: "VArgas", age: 33 },
            { name: "Samuel", surname: "Veracruz", age: 13 },
            { name: "Andrea", surname: "Flores", age: 21 },
            { name: "Sara", surname: "Hernandez", age: 42 }
        ],
        content_html: "<h1>Hola Mundo<h1>",
        src: "https://www.google.es/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        text: "descricpcion",
        numero: 13,
        v_model: "Hola Omar",
        p_error: false

    },
    created: function() {
        this.CopyArrayObjects = this.ArrayObjets;
    },
    computed: {
        // a computed getter
        reversedMessage: function() {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
    methods: {

        filterPeopleObjets: function() {

            this.ArrayObjets = this.CopyArrayObjects;
            this.ArrayObjets = this.ArrayObjets.filter(
                person => {
                    return person.age > this.filtro_edad
                }
            )
        },
        filterPeople: function() {

            this.people = this.people.filter(
                person => person.length > 5);
            return this.people;
        },

        calculateSum(value1, value2) {
            return value1 + value2;
        },
        incrementar() {
            this.numero++
        },
        decrementar() {
            this.numero--
        }
    },
    watch: {
        numero: function(val) {
            console.log("watch:" + val)
        }
    }
});