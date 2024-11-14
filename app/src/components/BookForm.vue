<template>
    <div class="book-form">
        <div class="form-group">
            <label>Title</label>
            <input type="text" v-model="book.title" placeholder="Enter title" />
        </div>
        <div class="form-group">
            <label>Author</label>
            <input type="text" v-model="book.author" placeholder="Enter author" />
        </div>
        <div class="form-group">
            <label>Genre</label>
            <div class="genre-carousel">
                <button @click="prevGenre">←</button>
                <span class="genre" v-for="(genre, index) in genres" :key="index" :class="{ active: index === currentGenre }">
                    {{ genre }}
                </span>
                <button @click="nextGenre">→</button>
            </div>
        </div>
        <div class="form-group">
            <label>PDF File</label>
            <input type="file" @change="handleFileUpload" placeholder="Drag your file here..." />
        </div>
    </div>
</template>
  
<script>
export default {
    name: "BookForm",
    data() {
        return {
            book: {
                title: "",
                author: "",
                genre: "",
                file: null,
            },
            genres: ["Action", "Suspense", "Romance", "Mistery", "Fantasy", "Comedy"],
            currentGenre: 0,
        };
    },
    methods: {
        prevGenre() {
            this.currentGenre = (this.currentGenre - 1 + this.genres.length) % this.genres.length;
            this.book.genre = this.genres[this.currentGenre];
        },
        nextGenre() {
            this.currentGenre = (this.currentGenre + 1) % this.genres.length;
            this.book.genre = this.genres[this.currentGenre];
        },
        handleFileUpload(event) {
            this.book.file = event.target.files[0];
        },
        submitForm() {
            // Emitimos el objeto book al componente padre
            this.$emit("submit-book", this.book);
        }
    }
};
</script>

  
<style scoped>
    .book-form {
        padding: 20px;
    }

    .form-group {
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
    }

    input[type="text"], input[type="file"] {
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .genre-carousel {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .genre-carousel button {
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
    }

    .genre {
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    .genre.active {
        background-color: #333;
        color: #fff;
    }
</style>
  