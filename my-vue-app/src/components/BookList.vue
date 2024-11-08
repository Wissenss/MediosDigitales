<template>
    <ul class="book-list">
      <BookItem v-for="book in books" :key="book.id" :book="book" />
    </ul>
  </template>
  
  <script>
  import BookItem from './BookItem.vue';
  
  export default {
    name: 'BookList',
    components: {
      BookItem
    },
    props: {
      books: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .book-list {
    flex: 1;
    padding: 20px;
  }
  </style>