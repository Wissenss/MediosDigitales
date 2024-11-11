<template>
    <div class="action-buttons">
        <button class="submit-btn" @click="submitForm">Submit</button>
        <button class="cancel-btn" @click="cancelForm">Cancel</button>
    </div>
</template>
  
<script>
    export default {
        name: "ActionButtons",
        methods: {
            submitForm() {
                // Acción de submit
            },
            cancelForm() {
                // Acción de cancelar
            },
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
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .cancel-btn {
        padding: 10px 20px;
        background-color: #ddd;
        color: #333;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
  