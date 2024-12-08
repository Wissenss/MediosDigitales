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
            console.log("actonButtons submitform called!")

            console.log("submitBookForm called");

            const url = "http://localhost:3000/book"

            // get the book info from the form
            let payload = {    
                name: document.getElementById("book-name").value,
                path: document.getElementById("book-file").value, 
                category: document.getElementById("book-category").value,
                author: document.getElementById("book-author").value,
            }

            console.log("payload: ", payload)

            // send the request to the server
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            }

            fetch(url, options).then(() => {
                // close the form
                togglePopup(false);
            })

            emit("book-submitted");
        };

        const cancelForm = () => {
            togglePopup(false); // Cierra el popup
        };

        return { submitForm, cancelForm };
    },
    // methods: {
    //     submitForm = () => {
    //         console.log("actonButtons submitform called!")

    //         this.$emit("submit-book");
    //     }
    // }
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
  