<template>
    <div class="app">
        <VerticalNav />
        <div class="main-content">
            <Header />
            <ItemList :items="items" />
            <NewBookButton @button-click="addNewBook()"/>
        </div>
    </div>
</template>

<script>
    import VerticalNav from "./components/Navbar.vue";
    import Header from "./components/Header.vue";
    import ItemList from "./components/BookList.vue";
    import NewBookButton from "./components/NewBookButton.vue";

    export default {
        name: "App",
        components: {
            VerticalNav,
            Header,
            ItemList,
            NewBookButton,
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
</style>
