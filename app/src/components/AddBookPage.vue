<template>
    <teleport to="body">
        <div v-if="showPopup" class="modal-overlay" @click.self="closePopup">
            <div class="modal-content">
                <div class="add-book-page">
                    <BookHeader />
                    <div class="content">
                        <ImagePreview />
                        <BookForm />
                    </div>
                    <ActionButtons />
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import { inject } from 'vue';
import BookHeader from "./BookHeader.vue";
import ImagePreview from "./ImagePreview.vue";
import BookForm from "./BookForm.vue";
import ActionButtons from "./ActionButtons.vue";

export default {
    name: "AddBookPopup",
    components: {
        BookHeader,
        ImagePreview,
        BookForm,
        ActionButtons,
    },
    setup() {
        // Inyectamos el estado y el método desde App.vue
        const showPopup = inject('showPopup');
        const togglePopup = inject('togglePopup');

        // Función para cerrar el popup
        const closePopup = () => {
            togglePopup(false);
        };
        const handleBookSubmission = (book) => {
            console.log("Book submitted: ", book);
            closePopup(); //Cierra popup después del envío
        };
        const handleSubmit = () => {
            document.querySelector(".book-form").submitForm(); //Llama 'submitForm' en 'BookForm'
        }

        return { showPopup, closePopup, handleBookSubmission, handleSubmit};
    },
};
</script>
  
<style scoped>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-content {
        background-color: #b5b1b1;
        padding: 20px;
        border-radius: 8px;
        max-width: 700px;
        width: 100%;
    }

    .add-book-page {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    .content {
        display: flex;
        gap: 20px;
    }
</style>
