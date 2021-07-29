const router = new VueRouter({
    base: "rutas",
    routes: [{
            path: '/List_person',
            component: ListPerson
        },
        {
            path: '/List_programing',
            component: ListPrograming
        }
    ]
})

var app = new Vue({
    router,
    el: '#app',
});