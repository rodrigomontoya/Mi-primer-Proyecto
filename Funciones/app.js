/* Renderizado generico */
window.onload = () => {
  document.querySelector("header").innerHTML = `
  <div class="header-escritorio">
    <a title="Educar LAB" href="#top">
      <img class="header-logo" src="./logosEducar/logoEducarLab3.png" alt="Logo de Conectar LAB" />
    </a>
    <nav class="header-nav" >
      <ul>
        <li><a href="#top">Inicio</a></li>
        <li><a href="#images">Imagenes</a></li>
        <li><a href="#info">Información</a></li>
      </ul>
    </nav>
    <button class="menu-hamburguesa" href="" onclick="presionarInterruptor()">
      <i class="menu-hamburguesa-icono fa-solid fa-bars"></i>
    </button>
  </div>
  <nav class="menu-hamburguesa-nav">
    <ul>
      <li><a href="#top">Inicio</a></li>
      <li><a href="#images">Imagenes</a></li>
      <li><a href="#info">Información</a></li>
    </ul>
  </nav>
  `;

  document.querySelector(".contacto").innerHTML =`
  <img src="./logosEducar/logoEducarLab2.png"  >
  <div class="contacto-info">
    <h1>¡Seguinos en nuestras redes sociales!</h1>
    <div>
      <a target="_blank" href="https://www.instagram.com/educarlabmendoza?igsh=MXVueDFpbjl4Mzd6Yw=="><i class="rosado fa-brands fa-square-instagram"></i></a>
      <a target="_blank" href="https://www.facebook.com/conectarlabmendoza/"><i class="celeste fa-brands fa-square-facebook"></i></a>
    </div>
  </div>
  `;

  document.querySelector("footer").innerHTML = `
  <div>
    <img title="Ciencias" class="footer-logo" src="./logosEducar/logoCiencia.png" alt="Logo ciencia">
    <img title="Estudio" class="footer-logo" src="./logosEducar/logoEstudio.png" alt="Logo estudio">
    <img title="Espacio de escuelas" class="footer-logo" src="./logosEducar/logoExplo.png" alt="Logo explo">
    <img title="Fabricación" class="footer-logo" src="./logosEducar/logoFabricacion.png" alt="Logo fabricacion">
    <img title="Mini" class="footer-logo" src="./logosEducar/logoMini.png" alt="Logo mini">
    <img title="Multimedia" class="footer-logo" src="./logosEducar/logoMultimedia.png" alt="Logo logoMultimedia">
    <img title="Sonido" class="footer-logo" src="./logosEducar/logoSonido.png" alt="Logo sonido">
  </div>
  <a title="Educar LAB" href="#top">
    <img class="header-logo" src="./logosEducar/logoEducarLab3.png"  >
  </a>
`;
};

function presionarInterruptor() {
  document.querySelector(".menu-hamburguesa-nav").classList.toggle("visible");
  document.querySelector(".menu-hamburguesa-icono").classList.toggle("fa-bars-staggered");
}
