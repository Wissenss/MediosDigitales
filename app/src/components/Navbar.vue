<template>
    <div class="vertical-nav">
        <div class="nav-item">
            <i class="icon-folder"></i>
            <span>Libraries</span>
        </div>
        <div class="nav-item">
            <i class="icon-document"></i>
            <span>Readers</span>
        </div>
        <div class="nav-item user-icon">
            <i class="icon-user"></i>
        </div>
        <div class="nav-item settings-icon">
            <i class="icon-settings"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VerticalNav",
    };
</script>

<style scoped>
    .vertical-nav {
        width: 100px;
        background-color: #f7edf9;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        height: 97.4vh;
    }

    .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 0;
        cursor: pointer;
        color: #000;
    }

    .nav-item span {
        font-size: 12px;
        color: #4e2a57;
    }

    .icon-folder::before {
        content: '📂';
        font-size: 24px;
        color: #4e2a57;
    }

    .icon-document::before {
        content: '📄';
        font-size: 24px;
        color: #000;
    }

    .icon-user::before {
        content: '👤';
        font-size: 24px;
        color: #000;
    }

    .icon-settings::before {
        content: '⚙️';
        font-size: 24px;
        color: #000;
    }

    .user-icon, .settings-icon {
        margin-top: auto;
        margin-bottom: 20px;
    }
</style>
