<template>
    <div class="app">
        <!--<RouterLink to="/">Go to Home</RouterLink>-->
        <router-view/>
    </div>
</template>

<script>
import VerticalNav from "./components/VerticalNav.vue";
import Header from "./components/Header.vue";
import ItemList from "./components/BookList.vue";
import NewBookButton from "./components/NewBookButton.vue";
import AddBookPage from "./components/AddBookPage.vue";
import MainPage from "./components/MainPage.vue"

export default {
    name: "App",
    components: {
        MainPage,
        VerticalNav,
        Header,
        ItemList,
        NewBookButton,
        AddBookPage,
    },
};
</script>

