<template>
    <div class="app">
        <VerticalNav />
        <div class="main-content">
            <Header />
            <ItemList :items="items" />
            <NewBookButton @button-click="togglePopup(true)" />
        </div>

        <!-- Popup para añadir un nuevo libro -->
        <teleport to="body">
            <div v-if="showPopup" class="modal-overlay" @click.self="togglePopup(false)">
                <AddBookPage />
            </div>
        </teleport>
    </div>
</template>

<script>
import { ref, provide } from 'vue';
import VerticalNav from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import ItemList from "./components/BookList.vue";
import NewBookButton from "./components/NewBookButton.vue";
import AddBookPage from "./components/AddBookPage.vue";

export default {
    name: "App",
    components: {
        VerticalNav,
        Header,
        ItemList,
        NewBookButton,
        AddBookPage,
    },
    setup() {
        const showPopup = ref(false);

        // Método para abrir o cerrar el popup
        const togglePopup = (value) => {
            showPopup.value = value;
        };

        // Proveer el estado y el método a los componentes hijos
        provide('togglePopup', togglePopup);
        provide('showPopup', showPopup);

        return { showPopup, togglePopup };
    },
    data() {
        return {
            items: [
                { id: 1, title: "List item" },
                { id: 2, title: "List item" },
                { id: 3, title: "List item" },
                { id: 4, title: "List item" },
                { id: 5, title: "List item" },
                { id: 6, title: "List item" },
                { id: 7, title: "List item" },
            ],
        };
    },
    mounted() {
        this.loadBooks();
    },
    methods: {
        loadBooks() {
            const url = "http://localhost:3000/books";

            fetch(url).then((response) => {
                response.json().then((json) => {
                    this.items = json["books"]
                })
            })
        },
        addNewBook() {
            const url = "http://localhost:3000/books"

            const payload = {
                title: "new book!",
                id : 0,
                year : 2024
            }

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            }

            fetch(url, options).then(() => {
                this.loadBooks();
            })
        }
    }
};
</script>

<style scoped>
.app {
    display: flex;
    height: 100vh;
}

.main-content {
    flex: 1;
    background-color: #f7edf9;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
