<template>
    <header class="header">
        <div class="header-title">
            <i class="icon-library"></i>
            <span>Library</span>
        </div>
        <div class="header-actions">
            <button class="icon-button add-btn">+</button>
            <button class="icon-button delete-btn">🗑️</button>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        width: 1050px;
        height: 100px; /* Ajusta la altura según lo necesario */
        background-color: #fae6fa;
    }

    /* Parte superior izquierda */
    .header-title {
        display: flex;
        align-items: center;
    }

    .icon-library::before {
        content: '📖';
        font-size: 24px;
        color: #4e2a57;
        margin-right: 8px;
    }

    /* Parte inferior derecha */
    .header-actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: auto;
    }

    .icon-button {
        font-size: 16px;
        background: none;
        border: none;
        cursor: pointer;
    }
</style>
