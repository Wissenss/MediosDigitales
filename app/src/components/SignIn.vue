<template>
    <div class="signin-modal">
        <h2>Sign In</h2>
        <form @submit.prevent="handleSignIn">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Value" required />

            <p></p>

            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" placeholder="Value" required />

            <p></p>
            
            <button type="submit" class="signin-button">Sign In</button>
        </form>
        <button @click="toggleSignUp" class="signup-link">Sign Up</button>
        <a href="#" class="forgot-password">Forgot password?</a>
    </div>
</template>
  
<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
            };
        },
        methods: {
            handleSignIn() {
                // Lógica de autenticación
                console.log('Sign In:', this.email, this.password);
            },
            toggleSignUp() {
                // Abrir ventana de Sign Up
                this.$emit('toggle-signup');
            },
        },
    };
</script>
  
<style scoped>
    .signin-modal {
        width: 300px;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        text-align: center;
    }
    .signin-button {
        width: 100%;
        padding: 10px;
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 4px;
    }
    .signup-link {
        margin-top: 10px;
        color: #000;
        background: none;
        border: none;
        cursor: pointer;
    }
    .forgot-password {
        display: block;
        margin-top: 10px;
        color: #000;
        text-decoration: underline;
    }
</style>