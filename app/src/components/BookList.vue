<template>
    <div class="item-list">
        <div v-for="item in items" :key="item.id" class="list-item">
            <div class="item-content">
                <div class="item-avatar">A</div>
                <span class="item-title">{{ item.title }}</span>
                <button class="favorite-btn">♡</button>
            </div>
            <input type="checkbox" class="select-checkbox" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemList",
        props: {
            items: {
                type: Array,
                required: true,
            },
        },
    };
</script>

<style scoped>
    .item-list {
        padding: 20px;
        background-color: #f7edf9;
    }

    .list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    .item-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .item-avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #e1cce5;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #4e2a57;
    }

    .item-title {
        font-size: 14px;
    }

    .favorite-btn {
        font-size: 16px;
        background: none;
        border: none;
        cursor: pointer;
        color: #000;
    }

    .select-checkbox {
        margin-right: 10px;
    }
</style>
