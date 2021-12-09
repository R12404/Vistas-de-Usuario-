<template>
<div class="main">
  <header class="hero" v-if="!is_auth">
      <nav class="nav_hero">
        <div class="container nav_container">
                <div class="logo">
                    <h2 class="logo_name">ClinicaTuEsperanza<span class="point">.</span></h2>
                </div>
                <div class="links">
                    <button v-if="!is_auth" v-on:click="loadHome" class="link">Inicio</button>
                    <button v-if="!is_auth" v-on:click="loadLogIn" class="link">Iniciar Sesión</button>
                    <button v-if="!is_auth" v-on:click="loadSingUp" class="link">Registrarse</button>
                    <button v-if="!is_auth" v-on:click="loadContact" class="link link--active">Contactanos</button>
                    <button v-if="!is_auth" v-on:click="loadMain" class="link link--active">raradsad</button>
                </div>
            </div>
      </nav>
      <section class="container hero_main">
            <div class="hero_textos">
                <h1 class="title">Siempre a <span class="title_active">TU LADO</span></h1>
                <p class="copy">Con más de 50 años prestando el mejor servicio de salud en Colombia<span class="copy_active">.</span></p>
                <p class="copy">El mejor personal medico a tu <span class="copy_active">DISPOSICIÓN</span></p>
                <button class="cta">Contactanos</button>
            </div>
            <img src="./assets/Recomendaciones.png" class="mockup" alt="Mr-hen">
        </section>
  </header>
<main>
        <router-view 
        v-on:completedHome="completeHome"
        v-on:completedLogIn="completedLogIn"
        v-on:completedSingUp="completedSingUp"
        v-on:completedContact="completedContact"
        v-on:completedMain="completedMain"
          >
        </router-view>
</main>
<footer class="footer">
    <div class="contact">
                  <div class="item-contact">
                <i class='bx bx-copyright contact-icon' ></i>
                <h3 class="contact-title">Grupo1</h3>
            </div>

            <div class="item-contact">
                <i class='bx bx-mail-send contact-icon' ></i>
                <h3 class="contact-title">clinicatuesperanza@group1.com</h3>
            </div>

            <div class="item-contact">
                <i class='bx bxs-edit-location contact-icon' ></i>
                <h3 class="contact-title">Barranquilla / Atlántico</h3>
            </div>

            <div class="item-contact item-contact--gold">
                <i class='bx bxs-chat contact-icon contact-icon--modifier' ></i>
                <h3 class="contact-title">Contactanos</h3>
            </div>
    </div>
  </footer>
</div>
</template>
<script
>
export default
{
  name: 'App'
  ,
  data: function(){
    return{
      is_auth: false
  }
},
 methods:{
  verifyAuth: function() {
    if(this.is_auth == false)
      this.$router.push({name: "home"})
  },

  loadHome: function(){
    this.$router.push({name: "home"})
  },

  loadLogIn: function(){
    this.$router.push({name: "logIn"})
  },

  loadSingUp: function(){
    this.$router.push({name: "singUp"})
  },

  loadContact: function(){
    this.$router.push({name: "contact"})
  },

  loadMain: function(){
    this.$router.push({name: "main"})
  },

  completedHome: function(data) {},

  completedLogIn: function(data) {

  },

  completedSingUp: function(data) {
    alert("Registro Exitoso");
    this.completedLogIn(data);
  },

  completedContact: function(data) {},

  completedMain: function(data) {},

 },
 created: function(){
    this.verifyAuth()
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    font-family: 'Roboto', sans-serif;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding: 100px 0;
    height: auto;
}

.container--modifier {
    width: 60%;
}

.hero {
    width: 100%;
    min-height: 90vh;
    background: linear-gradient(180deg, #78c6a3 0%, #036666 100% );
}

.nav_hero {
    color: #fff;
    height: 70px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.nav_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: inherit;
    padding: 0;
}

.logo_name {
    font-size: 24px;
    letter-spacing: 2px;
}

.link {
    display: inline-block;
    color: white;
    text-decoration: none;
    font-weight: 300;
    font-size: 15px;
    padding: 10px 20px;
    border: none;
    background: transparent;
    letter-spacing: 2px;
    cursor: pointer;
}

.link:hover {
  background: rgba(194, 213, 170, 0.3);
}

.link--active {
    color: black;
    font-weight: 700;
}

.point {
    color: black;
}

.hero_main {
    height: calc(100vh -70px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin-top: 30px;
}

.hero_textos {
    width: 48%;
}

.mockup {
    width: 48%;
    object-fit: cover;
    max-height: 90vh;
    font-size: 100px;
    margin-top: 20px;
}

.title {
    font-size: 56px;
    font-weight: 300;
    color: #fff;
}

.title_active {
    color: black;
    font-weight: 700;
}

.copy {
    font-size: 24px;
    color: white;
    text-shadow: var(--shadow) var(--color_shadow);
    margin: 15px 0;
}

.copy_active {
    font-weight: 700;
    color: black;
}

.cta {
    padding: 20px 40px;
    display: inline-block;
    background: linear-gradient(180deg, #e3f2fd 0%, #ffb700 100%);
    text-decoration: none;
    color: black;
    font-weight: 700;
    box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.2);
    border-radius: 8px;
    letter-spacing: 2px;
    cursor: pointer;
    margin-top: 20px;
}

.footer {
    background: #fafafa;
}

.footer_caption {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;
}

.title-footer {
    font-size: 24px;
    margin-bottom: 32px;
}

.download {
    width: 50%;
}

.download_app {
    display: flex;
    flex-wrap: wrap;
}

.download_item {
    display: flex;
    padding: 18px 12px;
    border-radius: 6px;
    border: 1px solid var(--black2);
    width: 42%;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 16px;
}

.download-logo {
    font-size: 40px;
    margin-right: 20px;
}

.download_title {
    font-size: 18px;
}

.footer_copy {
    width: 100%;
    color: var(--black2);
    display: flex;
    flex-wrap: wrap;
}

.copyright {
    width: 100%;
}

.politica_privacidad {
    color: inherit;
    text-decoration: none;
    display: inline-block;
    margin-top: 10px;
}

.politica_privacidad:hover {
    text-decoration: underline;
}

.politica_privacidad--margin {
    margin-right: 10px;
}


.socialmedia {
    margin-top: 20px;
    display: flex;
    color: var(--black2);
}

.socialmedia-icon {
    font-size: 18px;
    display: inline-block;
    margin-right: 30px;
}

.socialmedia_legend {
    color: var(--black2);
    margin-right: 16px;
}

.contact {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    color: #fff;
}

.item-contact {
    width: 25%;
    padding: 60px 0;
    text-align: center;
    background: linear-gradient(180deg, #78c6a3 0%, #036666 100% );
    border: 0.1px solid rgba(0, 0, 0, 0.1);
}

.item-contact--gold {
    background: linear-gradient(180deg, #e3f2fd 0%, #ffb700 100% );
    color: var(--black1);
}

.contact-icon {
    font-size: 18px;
    color: var(--gold1);
    line-height: 20px;
    margin-right: 4px;
}

.contact-icon--modifier {
    color: var(--black1);
}

.contact-title {
    font-size: 16px;
    line-height: 20px;
}

@media screen and (max-width: 900px){
    .mockup{
        width: 600px;
        height: auto;
    }

    .title {
        font-size: 50px;
    }

    .copy {
        font-size: 22px;
    }

    .cta{
        padding: 15px 22px;
    }

    .container_cards {
        justify-content: space-evenly;
    }

    .services .card {
        width: 45%;
    }

    .background {
        width: 52%;
    }

    .card {
        width: 42%;
    }

    .testimony_container {
        justify-content: space-evenly;
    }

    .testimony_card {
        width: 45%;
    }

    .check-item {
        width: 45%;
        margin-bottom: 35px;
    }

    .newsletter {
        width: 80%;
    }

    .download {
        width: 100%;
    }

    .download_app {
        justify-content: space-between;
    }

    .download_item {
        width: 45%;
    }

    .get-email {
        width: 100%;
        margin-bottom: 40px;
    }

    .socialmedia-icon {
        font-size: 18px;
    }

    .socialmedia_legend {
        font-size: 18px;
    }
}

@media screen and (max-width: 700px){
    main .container,
    footer .container {
        padding: 60px;
    }

    .nav_container {
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .nav_hero {
        height: auto;
    }

    .logo {
        padding: 15px 0;
        text-align: center;
    }

    .links {
        padding-bottom: 10px;
        text-align: center;
    }

    .link {
        padding: 7px 10px;
    }

    .hero_main {
        flex-direction: column-reverse;
        justify-content: flex-end;
        height: auto;
        padding: 30px 0;
    }

    .hero_textos {
        width: 100%;
        text-align: center;
    }

    .mockup {
        width: 60%;
        margin-bottom: 20px;
    }

    .title {
        font-size: 35px;
    }

    .copy {
        font-size: 20px;
    }

    .sub_title {
        font-size: 35px;
        text-align: center;
    }

    .copy_section {
        text-align: center;
    }

    .services .card {
        width: 80%;
    }

    .container-bg {
        justify-content: space-evenly;
    }

    .card {
        margin-bottom: 40px;
        width: 65%;
    }

    .card_title {
        font-size: 35px;
    }

    .card_button {
        width: 100%;
    }

    .background{ 
        width: 65%;
        margin-bottom: 40px;
    }

    .background_copy {
        display: none;
    }

    .testimony_card {
        width: 65%;
    }

    .testimony_name {
        font-size: 20px;
    }

    .container--modifier {
        width: 85%;
    }

    .item-contact {
        width: 100%;
        padding: 30px 0;
    }
}

@media screen and (max-width: 500px){
    .mockup {
        width: 80%;
        margin-bottom: 15px;
    }

    .services {
        background-color: red;
    }

    .services .container {
        background-color: #728359;
        
    }

    .container_cards {
        background-color: yellow;
        /* width: 500px; */
        margin-left: 0;
        /* margin-right: 500px; */
        position: absolute;
        left: 0;
        margin-bottom: 20px;
    }

    .services .card {
        width: 95%;
    }

    /* .card {
        width: 95%;
    } */

    .background {
        width: 95%;
    }

    .testimony_card {
        width: 95%;
    }

    .container--modifier {
        width: 90%;
    }

    .newsletter {
        width: 100%;
        display: none;
    }

    .newsletter--modifier {
        display: block;
    }

    .check-item{
        width: 100%;
        border: none;
        padding: 0;
        justify-content: center;
    }

    .download_item {
        width: 100%;
    }

    .download_title {
        font-size: 16px;
    }

    .download-logo {
        font-size: 30px;
    }

}
</style>