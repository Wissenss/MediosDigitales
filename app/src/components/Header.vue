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
  display: outside;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #a5a0a6;
}

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

.header-actions {
  display: flex;
  gap: 10px;
}

.icon-button {
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>