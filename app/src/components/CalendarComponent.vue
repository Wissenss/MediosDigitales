<template>
    <div class="calendar">
        <!-- Implementación del calendario -->
        <p @click="selectDate('2023-01-01')">Seleccionar 1 de enero de 2023</p>
        <!-- Agrega la lógica de calendario que prefieras -->
    </div>
</template>
  
<script>
    export default {
        methods: {
                selectDate(date) {
                this.$emit('select', date);
            },
        },
    };
</script>
  
<style scoped>
    .calendar {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 10px;
        z-index: 10;
    }
</style>
  