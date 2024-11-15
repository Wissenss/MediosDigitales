<template>
    <div class="action-buttons">
        <button class="submit-btn" @click="submitForm">Submit</button>
        <button class="cancel-btn" @click="cancelForm">Cancel</button>
    </div>
</template>
  
<script>
import { inject } from 'vue';

export default {
    name: "ActionButtons",
    setup(_, { emit }) {
        const togglePopup = inject('togglePopup');
        
        const submitForm = () => {
            emit("submit");
        };

        const cancelForm = () => {
            togglePopup(false); // Cierra el popup
        };

        return { submitForm, cancelForm };
    },
};
</script>
  
<style scoped>
    .action-buttons {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }

    .submit-btn {
        padding: 10px 20px;
        background-color: var(--background-color);
        color: var(--text-color);
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .submit-btn:hover {
        background-color: #f0f0f0; /* Color de fondo al hacer hover */
        color: #000; /* Color del texto al hacer hover */
    }

    .cancel-btn {
        padding: 10px 20px;
        background-color: var(--background-color);
        color: var(--text-color);
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .cancel-btn:hover{
        background-color: #f0f0f0; /* Color de fondo al hacer hover */
        color: #000; /* Color del texto al hacer hover */
    }
</style>
  