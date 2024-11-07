<template>
  <li class="book-item">
    <span>{{ book.title }}</span>
    <button>❤️</button>
    <input type="checkbox" />
  </li>
</template>

<script>
export default {
  name: 'BookItem',
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>