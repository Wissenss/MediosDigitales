<template>
    <div class="settings-popup">
      <button class="close-button" @click="$emit('close')">✖</button>
      <div class="header">
        <div class="profile-icon">👤</div>
        <div class="profile-info">
          <h3>Title</h3>
          <p>Description</p>
        </div>
      </div>
      <div class="menu">
      <button
        v-for="item in menuItems"
        :key="item.text"
        :class="['menu-item', item.class]"
        @click="handleMenuClick(item.text)"
      >
        <div class="icon" v-html="item.icon"></div>
        <span class="text">{{ item.text }}</span>
      </button>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { icon: '❤️', text: 'Favorites' },
          { icon: '🔔', text: 'Notifications' },
          { icon: '🌙', text: 'Dark Mode', class: 'dark-mode-button' },
          { icon: '💾', text: 'Storage And Data' },
          { icon: '❓', text: 'Help' }
        ],
        isDarkMode: false
      };
    },
    methods:{
        handleMenuClick(text){
            if (text == 'Dark Mode') {
                this.toggleDarkMode();
            } else{
                console.log(`Clicked on ${text}`);
            }
        },
        toggleDarkMode(){
            this.isDarkMode = !this.isDarkMode;
            document.body.classList.toggle('dark-mode', this.isDarkMode);
        }
    }
  };
  </script>
  
  <style scoped>
  .settings-popup {
    width: 300px;
    padding: 20px;
    background-color: var(--background-color);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    font-family: Arial, sans-serif;
  }
  
  .close-button {
  position: absolute;
  color: var(--text-color);
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.close-button:hover{
  background-color: #f0f0f0; /* Color de fondo al hacer hover */
  color: #000; /* Color del texto al hacer hover */
}
  
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .profile-icon {
    font-size: 36px;
    margin-right: 10px;
  }
  
  .profile-info h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
  
  .profile-info p {
    margin: 0;
    color: #888;
    font-size: 14px;
  }
  
  .menu {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .menu-item {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  width: 100%;
  padding: 0;
  cursor: pointer;
  font-size: inherit;
  text-align: left;
  transition: background-color 0.3s;
}

.menu-item:hover {
  background-color: #f0f0f0;
}

.icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
  border-radius: 50%;
  font-size: 18px;
  margin-right: 10px;
}

.text {
  font-size: 16px;
  color: var(--text-color);
  border-bottom: 1px solid #ddd;
  padding-bottom: 4px;
  flex-grow: 1;
}
  </style>
  