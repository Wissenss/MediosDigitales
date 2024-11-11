<template>
    <div class="add-book-page">
        <Header></Header>
        <div class="content">
            <ImagePreview />
            <BookForm />
        </div>
        <ActionButtons />
    </div>
</template>
  
<script>
    import Header from "./components/BookHeader.vue";
    import ImagePreview from "./components/ImagePreview.vue";
    import BookForm from "./components/BookForm.vue";
    import ActionButtons from "./components/ActionButtons.vue";
  
    export default {
        name: "AddBookPage",
        components: {
            Header,
            ImagePreview,
            BookForm,
            ActionButtons,
        },
    };
</script>
  
<style scoped>
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
  