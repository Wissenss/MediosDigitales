<template>
  <div class="app">
    <div class="header-container">
      <Navbar />
      <Header />
    </div>
    <BookList :books="books" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import BookList from './components/BookList.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    BookList
  },
  data() {
    return {
      books: [
        { id: 1, title: 'Libro 1' },
        { id: 2, title: 'Libro 2' },
        // ... más libros
      ]
    }
  }
}
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header-container {
  display: flex;
  justify-content: space-between;
}
</style>