<template>
    <div class="overlay">
        <div class="signup-modal">
            <h2>Sign Up</h2>
            <form @submit.prevent="handleSignUp" class="form-container">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" v-model="name" placeholder="Enter your name" required />
                </div>

                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" v-model="lastName" placeholder="Enter your last name" required />
                </div>

                <div class="form-group">
                    <label for="birthday">Birthday</label>
                    <input
                        type="text"
                        id="birthday"
                        v-model="birthday"
                        placeholder="Select your birthday"
                        @focus="showDatePicker = true"
                        readonly
                    />
                    <calendar-component v-if="showDatePicker" @select="setBirthday" />
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
                </div>

                <button type="submit" class="signup-button">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<script>
import CalendarComponent from './CalendarComponent.vue';

export default {
    components: {
        CalendarComponent,
    },
    data() {
        return {
            name: '',
            lastName: '',
            birthday: '',
            email: '',
            showDatePicker: false,
        };
    },
    methods: {
        handleSignUp() {
            console.log('Sign Up:', this.name, this.lastName, this.birthday, this.email);
        },
        setBirthday(date) {
            this.birthday = date;
            this.showDatePicker = false;
        },
    },
};
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.signup-modal {
    width: 350px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 20px;
    font-size: 24px;
}

.form-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

label {
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    width: 100%;
}

input[type="text"],
input[type="email"] {
    width: 100%;
    padding: 10px;
    font-size: 16px; /* Igual al texto del botón */
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}

.signup-button {
    width: 100%;
    padding: 10px;
    font-size: 16px; /* Tamaño del texto del botón */
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.signup-button:hover {
    background-color: #333;
}
</style>
