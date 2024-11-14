<template>
    <header class="header">
        <div class="header-title">
            <i class="icon-book"></i>
            <span>New Book</span>
        </div>
    </header>
</template>
  
<script>
    export default {
        name: "BookHeader",
    };
</script>

<style scoped>
    .header {
        display: flex;
        align-items: center;
        padding: 20px;
        background-color: #a09c9c;
        font-size: 20px;
        font-weight: bold;
    }

    .icon-book::before {
        content: '📚';
        font-size: 24px;
        margin-right: 10px;
    }
</style>
  