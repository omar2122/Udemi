const ListPerson = {
    name: "ListPerson",
    template: `
    <div>
        <list-alert></list-alert>
        <ul>
            <li v-for="persona in people">{{ persona }}</li>
        </ul>
    </div>`,
    data: function() {
        return {
            people: ["Andres", "Juan", "Pepe", "Alejandro"]
        }
    }
}