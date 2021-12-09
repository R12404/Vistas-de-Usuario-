<template>
  <main>
      <div class="container-login">
        <h2>Bienvenido a Clinica TuEsperanza</h2>
        <form id="form" v-on:submit.prevent="processLogInUser">
        <div class="element">
            <label for="user">Usuario: </label>
            <input type="text" id="user" name="user" required="true" autocomplete="off">
        </div>

        <div class="element">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" required="true">
        </div>

        <div class="element">
            <input type="submit" value="Ingresar">
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
}

.container-login {
    margin: 50px auto;
    width: 500px;
    padding: 30px;
    background: linear-gradient(180deg, #78c6a3 0%, #036666 100% );
    border-radius: 10px;
}

.container-login h2 {
    text-align: center;
    margin: 0 0px 30px;
    padding: 0;
    font-size: 30px;
    color: rgba(245, 245, 245, 0.8);
    text-shadow: 2px 2px 2px #073b4c;
}

.container-login .element label{
    color: whitesmoke;
}

.container-login .element input {
    width: 100%;
    padding: 10px 10px;
    color: whitesmoke;
    background: transparent;
    border: none;
    border-bottom: 2px solid white;
    margin-bottom: 30px;
}

.container-login .element input[type="submit"]{
    background-color: #073b4c;
    border: none;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 15px;
    margin-top: 30px;
}
</style>