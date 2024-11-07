<template>
  <div class="app">
    <Navbar />
    <Header />
    <BookList :books="books" />
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Header from './Header.vue';
import BookList from './BookList.vue';

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