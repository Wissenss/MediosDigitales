<template>
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
</template>

<script>
import { ref, provide } from 'vue';

import VerticalNav from "./VerticalNav.vue";
import Header from "./Header.vue";
import ItemList from "./BookList.vue";
import NewBookButton from "./NewBookButton.vue";
import AddBookPage from "./AddBookPage.vue";

export default {
    name: "MainPage",
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
    components: {
      VerticalNav,
      Header,
      ItemList,
      NewBookButton,
      AddBookPage
    },
    // mounted() {
    //     this.loadBooks();
    // },
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
</style>
