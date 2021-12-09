<template>
  <main>
      <div class="singup-container">
        <h2>Bienvenido a Clinica TuEsperanza</h2>
        <form class="form-container" v-on:submit.prevent="processSignUp">
            <div class="parts">
                <label for="nombre">Nombres</label>
                <input type="text" name="nommbre" id="nombre" required="true">
            </div>
            <div class="parts">
                <label for="Apellidos">Apellidos</label>
                <input type="text" name="apellidos" id="apellidos" required="true">
            </div>
            <div class="parts">
                <label for="telefono">Telefono</label>
                <input type="text" name="telefono" id="telefono" required="true">
            </div>
            <div class="parts">
                <label for="correo">Correo </label>
                <input type="text" name="correo" id="correo" required="true">
            </div>
            <div class="parts">
                <label for="password">Contraseña</label>
                <input type="password" name="password" id="password" required="true">
            </div>
            <div class="parts">
                <input type="submit" id="validar" value="Registrarse">
            </div>
        </form>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>
    html{
    height: 100%;
}

body{
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
}

.singup-container {
    max-width: 500px;
    margin: 10px auto;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: linear-gradient(180deg, #78c6a3 0%, #036666 100% );
}

.singup-container h2 {
    text-align: center;
    margin: 0 0px 30px;
    padding: 0;
    font-size: 30px;
    color: rgba(245, 245, 245, 0.8);
    text-shadow: 2px 2px 2px #073b4c;
}

.singup-container .parts label {
    color: whitesmoke;
}

.singup-container .parts input {
    width: 100%;
    padding: 10px 10px;
    color: whitesmoke;
    background: transparent;
    border: none;
    border-bottom: 2px solid white;
    margin-bottom: 5px;
}

.singup-container .parts input[type="submit"] {
    border: none;
    background-color: #073b4c;
    letter-spacing: 3px;
    font-weight: 700;
    margin-top: 50px;
    height: 40px;
    text-transform: uppercase;
    cursor: pointer;
}
</style>