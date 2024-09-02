const app = Vue.createApp({
    data() {
        return {}
    },
    template: 
    /* html */
    `
    <nav class="main nav-bar">
        <div class="nav-bar-item">Productos</div>
        <div class="nav-bar-item"><span class="bi-cart"></span></div>
    </nav>

    <main>
        <div></div> 

        <catalog></catalog>
    </main>

    <footer>
    </footer>
    `
})