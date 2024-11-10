<template>
    <div class="new-book-button">
      <button class="new-book-btn">New Book</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "NewBookButton",
  };
  </script>
  
  <style scoped>
  .new-book-button {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  
  .new-book-btn {
    padding: 10px 20px;
    font-size: 14px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  