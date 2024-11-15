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
        <div>
            <button class="nav-item white-button" @click="openPopup">
                ⚙️
            </button>
            <SettingsPopup v-if="isPopupOpen" @close="closePopup" />
        </div>
    </div>
</template>

<script>
import SettingsPopup from './Settings_tab.vue';

    export default {
        name: "VerticalNav",
        name: "white-button",

    components: {
    SettingsPopup
    },
        data() {
        return {
        isPopupOpen: false
        }
        },

  methods: {
    openPopup() {
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
    }
  }
};

</script>

<style scoped>
    .vertical-nav {
        width: 300px;
        background-color: var(--background-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        height: 97.5vh;
    }

    .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 0;
        cursor: pointer;
        color: var(--text-color);
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
        color: var(--text-color);
    }

    .icon-user::before {
        content: '👤';
        font-size: 24px;
        color: var(--text-color);
    }

    .icon-settings::before {
        content: '⚙️';
        font-size: 24px;
        color: var(--text-color);
        background-color: var(--background-color);
    }

    .user-icon, .settings-icon {
        margin-top: auto;
        margin-bottom: 20px;
    }

    .white-button {
    background-color: var(--background-color); /* Color de fondo blanco */
    color: var(--text-color); /* Color del texto */
    border: none; /* Borde gris claro */
    padding: 10px 20px; /* Espaciado interno */
    font-size: 16px; /* Tamaño de la fuente */
    cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
    transition: background-color 0.3s, color 0.3s; /* Animación para el hover */
}

.white-button:hover {
  background-color: #f0f0f0; /* Color de fondo al hacer hover */
  color: #000; /* Color del texto al hacer hover */
}

</style>
