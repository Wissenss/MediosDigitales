<template>
    <div class="overlay">
    <div class="signin-modal">
        <h2>Sign In </h2>
        <form @submit.prevent="handleSignIn" class="form-container">
            <div class="form-group">
            <label for="email">Email </label>
            <input type="email" id="email" v-model="email" placeholder="Value" required />
            </div>

            <div class="form-group">
            <label for="password">Password </label>
            <input type="password" id="password" v-model="password" placeholder="Value" required />
            </div>
            
            <button type="submit" class="signin-button">Sign In </button>
        </form>
        <button @click="toggleSignUp" class="signup-link">Sign Up </button>
        <a href="#" class="forgot-password">Forgot password?</a>
    </div>
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
        z-index: 1000; /* Asegura que el modal esté sobre otros elementos */
    }

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
        font-size: 16px; /* Tamaño del texto del botón */
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: none;
        cursor: pointer;
        }

    .signup-link {
        margin-top: 10px;
        width: 100%;
        color: #000;
        background-color: #939393;
        border: none;
        cursor: pointer;
    }
    .forgot-password {
        display: block;
        margin-top: 10px;
        color: #000;
        text-decoration: underline;
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

    input[type="email"],
    input[type="password"] {
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

    .signin-button:hover {
        background-color: #333;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

</style>