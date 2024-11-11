<template>
    <div class="signup-modal">
        <h2>Sign Up</h2>
        <form @submit.prevent="handleSignUp">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" placeholder="Value" required />
            <p></p>

            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" v-model="lastName" placeholder="Value" required />
            <p></p>

            <label for="birthday">Birthday</label>
            <input
                type="text"
                id="birthday"
                v-model="birthday"
                placeholder="Value"
                @focus="showDatePicker = true"
                readonly
            />
            <calendar-component v-if="showDatePicker" @select="setBirthday" />
            <p></p>

            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Value" required /><p>
            </p>

            <button type="submit" class="signup-button">Sign Up</button>
        </form>
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
                // Lógica de registro de usuario
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
    .signup-modal {
        width: 300px;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        text-align: center;
    }
    .signup-button {
        width: 100%;
        padding: 10px;
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 4px;
    }
</style>