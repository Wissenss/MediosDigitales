<template>
    <div class="app">
        <VerticalNav />
        <div class="main-content">
            <Header />
            <ItemList :items="items" />
            <NewBookButton />
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
