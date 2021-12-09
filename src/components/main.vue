<template>
    <div v-if="is_auth">
    <header class="hero" v-if="!is_auth">
        <nav class="nav_hero">
            <div class="container nav_container">
                <div class="logo">
                    <h2 class="logo_name">ClinicaTuEsperanza<span class="point">.</span></h2>
                </div>
                <div class="links">
                    <button v-if="is_auth" v-on:click="logOut" class="link">Cerrar Sesión</button>
                </div>
            </div>
        </nav>
        
    <div class="buscador">
        <input list="heroes">
        <datalist id="heroes" aria-placeholder="Buscar paciente">
        <option value="pepe">Pepe</option>
        <option value="Pato">Pato</option>
        <option value="Pájaro">Pájaro</option>
        <option value="Gato">Gato</option>
        <option value="Perro">Perro</option>
        <option value="Tortuga">Tortuga</option>
        </datalist>

        <input type="submit" value="Buscar">
    </div>
    </header>
    </div>

    <main>

    <div class="main-container">
        <h2>Historia Clinica del Paciente</h2>
        <section class="history">
        <form class="data-form"> 
            <div class="form-element">
                <label for="username">Nombre Completo: </label>
                <input type="text" id="username" name="username" required="true" autocomplete="off">
            </div>

            <div class="form-element">
                <label for="old"> Edad: </label>
                <input type="number" min="0" max="110" id="old" name="old" required="true">
            </div>

            <div class="form-element">
                <label for="genero"> Género: </label>
                <input type="text" id="genero" name="genero" required="true">
            </div>
        </form>
        </section>

        <section class="history">
        <form class="data-form"> 
            <div class="form-element">
                <label for="phone-number">Teléfono de Contacto: </label>
                <input type="number" id="phone-number" min="0" name="phone-number" required="true">
            </div>

            <div class="form-element">
                <label for="city"> Ciudad: </label>
                <input type="text" id="city" name="city" required="true">
            </div>

            <div class="form-element">
                <label for="marital-status"> Estado Civil: </label>
                <input type="text" id="marital-status" name="marital-status" required="true">
            </div>

        </form>
        </section>

        <section class="patient-description">
        <form class="comments-form">
            <div class="comment-element">
                <label for="comment"> Descripción Medica: </label>
                <textarea name="comment" id="comment" cols="122" rows="12" required="true"></textarea>
            </div>
        </form>
        </section>
    </div>

    <!-- <div class="calendar">
        <h2>Diciembre 2021</h2>
        <ol class="days">
            <li class="day-name">Lun</li>
            <li class="day-name">Mar</li>
            <li class="day-name">Mié</li>
            <li class="day-name">Jue</li>
            <li class="day-name">Vie</li>
            <li class="day-name">Sáb</li>
            <li class="day-name">Dom</li>


            <li class="first-day" id="days-number">1</li>
            <li id="days-number">2</li>
            <li id="days-number">3</li>
            <li id="days-number">4</li>
            <li id="days-number">5</li>
            <li id="days-number">6</li>
            <li id="days-number">7</li>
            <li id="days-number">8</li>
            <li id="days-number">9</li>
            <li id="days-number">10</li>
            <li id="days-number">11</li>
            <li id="days-number">12</li>
            <li id="days-number">13</li>
            <li id="days-number">14</li>
            <li id="days-number">15</li>
            <li id="days-number">16</li>
            <li id="days-number">17</li>
            <li id="days-number">18</li>
            <li id="days-number">19</li>
            <li id="days-number">20</li>
            <li id="days-number">21</li>
            <li id="days-number">22</li>
            <li id="days-number">23</li>
            <li id="days-number">24</li>
            <li id="days-number">25</li>
            <li id="days-number">26</li>
            <li id="days-number">27</li>
            <li id="days-number">28</li>
            <li id="days-number">29</li>
            <li id="days-number">30</li>
            <li id="days-number">31</li>
        </ol>
    </div> -->
    </main>

</template>

<script>
export default {};
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
}

.icon-logout {
  position: absolute;
  top: 0px;
  left: 5px;
  width: 30px;
  height: 30px;
}

.icon-logout i {
  font-size: 40px;
  color: whitesmoke;
}
.buscador{
    color:#52b69a;
}
.main-container {
  background: radial-gradient(white, lightgray);
  text-align: center;
  width: 99%;
  height: 610px;
  border-radius: 15px 0px 15px 0px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  margin: 20px 10px;
}

.main-container h2 {
  text-shadow: 2px 2px 2px white;
  color: black;
  text-transform: uppercase;
}

.history {
  float: left;
  border-radius: 10px 0px 10px 0px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  margin: 10px 5px 10px 25px;
  width: 45%;
}

.patient-description {
  width: 100%;
  float: left;
}

.data-form {
  margin: 1px;
  text-align: left;
  width: 50%;
}

.comments-form {
  margin: 20px;
  text-align: left;
  width: 100%;
  height: 20%;
}

.comments-form .comment-element {
  font-style: italic;
  margin-left: 10px;
  margin-right: 10px;
}

.main-container .data-form label {
  margin: 0px 10px;
  color: black;
  font-size: 17px;
  font-style: italic;
}

.main-container .data-form input {
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.1);
  width: 190%;
  margin: 10px 10px;
  padding: 10px 10px;
  border: none;
  color: black;
}

/* nav {
    float: right;
    width: 20%;
    margin: 15px 20px 0 15px;
    border-radius: 10px 0 10px 0;
}

nav a {
    display: block;
    padding: 10px;
    margin: 20px 2px;
    background: linear-gradient(#78c6a3, #14746f);
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    border-radius: 10px 0 10px 0;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    text-transform: uppercase;
    color: whitesmoke;
}

nav a:hover {
    box-shadow: 0 2px 0px 0px black;
} */

/* .calendar {
    border-radius: 10px 0px 10px 0px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: 22%;
    height: 330px;
    position: absolute;
    top: 400px;
    right: 15px;
    text-align: center;
    background: linear-gradient(180deg, #78c6a3 0%, #036666 100% );
    box-shadow: 1px 0px 4px 0px rgba(27, 5, 5, 0.7);
} */

/* .calendar h2 {
  text-transform: uppercase;
  text-shadow: 2px 2px 2px gainsboro;
} */

/* .days {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0;
} */

.first-day {
  grid-column-start: 3;
}

.day-name {
  background: #eee;
  font-weight: bold;
}

#days-number {
  text-align: right;
  margin: 12px;
}

#days-number:hover {
  background: radial-gradient(#52b69a, #34a0a4);
  padding: 5px;
  border-radius: 100%;
}
</style>