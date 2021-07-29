Vue.component('list-alert-defaul', {
    props: {
        message:{
            type:String,
            default:"Cuerpo"
        }
    },
    template: `
    <div class="alert alert-warning" role="alert">
        {{message}}
    </div>
    `
});