app.component('catalog', {
    data() {
        return {
            "items" : [
                {
                    name: "prod1",
                    price: 100.08
                },
                {
                    name: "prod2",
                    price: 178.50
                },
                {
                    name: "prod3",
                    price: 80.50
                },
                {
                    name: "prod4",
                    price: 1299.00
                },
            ]
        }
    },
    template: 
    /* html */
    `
    <div class="catalog">
        <catalog-item
            v-for="item in items"
        >
        </catalog-item>
    </div>
    `
})