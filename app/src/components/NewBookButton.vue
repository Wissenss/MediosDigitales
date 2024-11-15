<template>
    <p></p>
    <button @click="openPopup" class="new-book-button"> New Book</button>
</template>
  
<script>
import { inject } from 'vue';

export default {
    name: "NewBookButton",
    setup() {
        // Inyectamos el método togglePopup proporcionado en App.vue
        const togglePopup = inject('togglePopup');

        const openPopup = () => {
            // Abrimos el popup pasando `true` a togglePopup
            togglePopup(true);
        };

        return { openPopup };
    }
};
</script>

<style scoped>
    .new-book-button {
        display: center;
        justify-content: center;
        padding: 20px;
        font-size: 14px;
        background-color: var(--background-color);
        color: var(--text-color);
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
