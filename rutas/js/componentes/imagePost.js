Vue.component('img-post', {
    template: '<img :src="imgPost()" :alt="title" :title="title">',
    props: {
        url: String
    },
    data: function() {
        return {
            title: "Título de la img"
        }
    },
    methods: {
        imgPost() {
            if (this.url != "") {
                return this.url;
            }
            return "https://www.google.es/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        }
    }

});