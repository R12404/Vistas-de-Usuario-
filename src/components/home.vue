<template>
<main>
    <section class="services">
            <div class="container">
                <h2 class="sub_title">Nuestro Personal Medico<span class="point">.</span></h2>
                <p class="copy_section"></p>
                <article class="container_cards">
                    <div class="card">
                        <img src="../assets/Publicidad.png" class="card_img" alt="">
                        <div class="cards_text">
                            <p class="card_list">Siempre a TU LADO</p>
                            <h3 class="card_title">El mejor servicio<span class="point">.</span></h3>
                            <p class="card_copy">
                                Contamos con el mejor personal medico a tu disposición, personas educadas y honestas dispuestas a salvar vidas en cualquier momento.
                            </p>
                            <button class="card_button">Contactame</button>
                        </div>
                    </div>

                    <div class="card">
                        <img src="../assets/ClinicaTuEsperanza.png" class="card_img" alt="En construcción">
                        <div class="cards_text">
                            <p class="card_list">Siempre a TU LADO</p>
                            <h3 class="card_title">La mejor atención<span class="point">.</span></h3>
                            <p class="card_copy">
                                Hemos sido participes de grandes programas de atención voluntaria a barrios marginados de todo el país, participando en más de tres ocasiones.
                            </p>
                            <button class="card_button">Contactame</button>
                        </div>
                    </div>

                    <div class="card">
                        <img src="../assets/Recomendaciones.png" class="card_img" alt="">
                        <div class="cards_text">
                            <p class="card_list">Siempre a TU LADO</p>
                            <h3 class="card_title">Tu mejor opción<span class="point">.</span></h3>
                            <p class="card_copy">
                              Nuestra clinica cuenta con un sistema de software para la gestión de las historias clinicas de nuestros pacientes, haciendo los procesos más eficientes.
                            </p>
                            <button class="card_button">Contactame</button>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <section class="projects container">
            <h2 class="sub_title">Proyectos recientes<span class="point">.</span></h2>
            <p class="copy_section">ClinicaTuEsperanza</p>
            <article class="container-bg">
                <div class="card">
                    <img src="../assets/Publicidad.png" class="background-img" alt="">
                    <div class="cards_text">
                        <p class="card_list">Consultas Virtuales</p>
                        <h3 class="card_title">Siempre a TU LADO<span class="point">.</span></h3>
                        <p class="card_copy">
                            Contamos con los mejores desarrolladores de software trabajando para mejorar nuestros servicios en general, logrando así brindar una mejor atención a nuestra comunidad y brindando más herramientas a nuestro personal medico
                        </p>
                        <button href="mailto:moralesbarriosricardo90@gmail.com" class="card_button">Contactame</button>
                    </div>
                </div>
                <div class="background">
                    <img src="../assets/Publicidad.png" class="background-img" alt="">
                </div>

                <div class="card">
                    <img src="../assets/ClinicaTuEsperanza.png" class="background-img" alt="">
                    <div class="cards_text">
                        <p class="card_list">Atención al cliente</p>
                        <h3 class="card_title">Siempre a TU LADO<span class="point">.</span></h3>
                        <p class="card_copy">
                            Hemos venido trabajando en nuestra infraestructura desde hace tiempo, buscando agrandar nuestras oficinas de atención, con miras a brindar tiempos de atención muchos más rapidos para ahorrarte tiempo y dinero.
                        </p>
                        <button href="mailto:moralesbarriosricardo90@gmail.com" class="card_button">Contactame</button>
                    </div>
                </div>
                <div class="background">
                    <img src="../assets/ClinicaTuEsperanza.png" class="background-img" alt="">
                </div>
            </article>
        </section>

        <section class="testimony">
            <div class="container">
            <h2 class="sub_title">Redes Sociales<span class="point">.</span></h2>
            <p class="copy_section">ClinicaTuEsperanza</p>

            <div class="testimony_container">
                <div class="testimony_card">
                    <img src="../assets/Logo.png" class="testimony_img" alt="Lucas">
                <div class="testimony_copy">
                    <i class='testimony_logo bx bxl-instagram'></i>
                    <div class="testimony_info">
                        <h3 class="testimony_name">Instagram</h3>
                        <a class="testimony_position" target="_blank">@ClinicaTuEsperanza</a>
                    </div>
                </div>
                </div>

                <div class="testimony_card">
                    <img src="../assets/Logo.png" class="testimony_img" alt="Bruno">
                <div class="testimony_copy">
                    <i class='testimony_logo bx bxl-facebook'></i>
                    <div class="testimony_info">
                        <h3 class="testimony_name">Facebook</h3>
                        <a class="testimony_position" target="_blank">ClinicaTuEsperanza</a>
                    </div>
                </div>
                </div>

                <div class="testimony_card">
                    <img src="../assets/Logo.png" class="testimony_img" alt="kikin">
                <div class="testimony_copy">
                    <i class='testimony_logo bx bxl-twitter'></i>
                    <div class="testimony_info">
                        <h3 class="testimony_name">Twitter</h3>
                        <a  class="testimony_position" target="_blank">@ClinicaTuEsperanza</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
</main>
</template>

<script>
export default {

}
</script>

<style>
    .services {
    background: #fafafa;
}

.sub_title {
    font-size: 42px;
}

.sub_title--modifier {
    text-align: center;
    margin-bottom: 16px;
}

.copy_section {
    color: var(--black1);
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 60px;
}

.copy_section--modifier {
    text-align: center;
    margin-bottom: 32px;
}

.container_cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.card {
    width: 30%;
    padding: 30px 0;
    overflow: hidden;
    background: linear-gradient(180deg, #78c6a3 0%, #036666 100% );
    border-radius: 10px;
    position: relative;
    text-align: left;
    margin-bottom: 60px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}

.card_img {
    width: 95%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 0 10px;
}

.cards_text {
    width: 90%;
    margin: 0 auto;
}

.card_list {
    color: var(--gold2);
    font-weight: 700;
    margin: 25px 0 12px;
    font-size: 18px;
}

.card_title {
    font-size: 20px;
    color: #fff;
    margin-bottom: 8px;
}

.card_copy {
    line-height: 28px;
    color: var(--gray2);
    margin-bottom: 16px;
}

.card_button {
    display: block;
    background: linear-gradient(180deg, #e3f2fd 0%, #ffb700 100% );
    text-decoration: none;
    border-radius: 6px;
    color: var(--black1);
    font-weight: 700;
    text-align: center;
    padding: 12px;
    width: 100%;
}

.container-bg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
}

.background {
    width: 68%;
    height: 570px;
    border-radius: 10px;
    position: relative;
    margin-bottom: 60px;
    
}

.background-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    background-size: 100% 100%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.background_text {
    position: absolute;
    width: 100%;
    bottom: 30px;
    left: 20px;
    color: #fff;
}

.background-title {
    font-size: 24px;
    margin-bottom: 4px;
}

.testimony {
    background: #fafafa;
}

.testimony_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.testimony_card {
    width: 30%;
    height: 500px;
    background: linear-gradient(180deg, #78c6a3 0%, #036666 100% );
    border-radius: 10px;
    position: relative;
    margin-bottom: 30px;
}

.testimony_img {
    width: 100%;
    height: 400px;
    border-radius: inherit;
    object-fit: cover;
    object-position: center top;
}

.testimony_copy {
    position: absolute;
    bottom: 20px;
    left: 5%;
    width: 90%;
    background: linear-gradient(180deg, #e3f2fd 0%, #ffb700 100% );
    color: #fff;
    border-radius: 10px;
    margin: auto;
    box-shadow: var(--shadow) var(--color_shadow);
    padding: 15px 8px;
    display: flex;
    align-items: center;
}

.testimony_logo {
    font-size: 40px;
    margin-right: 15px;
    display: inline-block;
}

.testimony_name {
    font-size: 24px;
    line-height: 28px;
}

.testimony_position {
    color: var(--gray);
}

.check {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 auto;
}


.check-item {
    width: 30%;
    padding-right: 10px;
    display: flex;
    border-right: 2px solid var(--black2);
}

.bx-check {
    background: linear-gradient(180deg, #78c6a3 0%, #036666 100% );
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    margin-right: 20px;
    color: #fff;
    border-radius: 50%;
    font-size: 40px;
}


.check_number {
    font-weight: 700;
}

.check_copy {
    font-weight: 300;
}

.newsletter {
    margin: 0 auto;
    width: 60%;
    margin-top: 40px;
    height: auto;
    font-family: inherit;
    position: relative;
    border-radius: 6px;
}

.newsletter--modifier {
    margin: 0;
    width: 80%;
}

.newsletter_input {
    width: 100%;
    height: 100%;
    padding: 22px 10px;
    outline: none;
    font-family: inherit;
    border-radius: 6px;
    border: 1px solid var(--black1);
}

.newsletter_submit {
    position: absolute;
    right: 8px;
    top: 10%;
    height: 80%;
    background: linear-gradient(180deg, #78c6a3 0%, #036666 100% );
    color: #fff;
    padding: 0 15px;
    border: none;
    border-radius: 6px;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}
</style>