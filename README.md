🚀 Aplicación web diseñada para capturar, visualizar y almacenar datos en tiempo real del videojuego **Counter-Strike: Global Offensive** (CS:GO), con el objetivo de apoyar la mejora continua del jugador mediante el análisis de métricas.

🎮 Utilizando la funcionalidad **Game State Integration** (GSI),un archivo de texto almacenado en la carpeta del juego, el sistema recibe eventos en tiempo real con información básica del estado de la partida, tales como:

- 🧍 estado del jugador (vivo,muerto,desconectado)
- 🕹️ número de rondas 
- 💵 recursos
- 📈 equipo ganador y perdedor 
- 🗡️ armas equipadas 

🧩 Para acceder a estadísticas más profundas, se emplea paquetes de terceros (NPM) que permite recuperar:
- 🧑 Perfil público de steam del jugador
- 📊 Estadísticas globales del jugador (mapas más jugados, armas favoritas, KDA, etc.)
- 📂 Análisis profundo de replays (`.dem`) para obtener:
  - 🔎 Coordenadas de cada jugador
  - 🔫 Seguimiento de asesinatos por ronda
  - 📋 Eventos detallados (quién mató a quién, con qué arma y en qué momento)

# ⚙️ Stack tecnológico
A continuación se detallan las principales tecnologías empleadas en el desarrollo del sistema, tanto para la recolección de datos como para la visualización y almacenamiento:

## 🔧 Back-End

<p align="left">
  <img src="assets/back-end/nodejs.png" alt="Node.js" width="70"/>
     <sub>Node.js</sub>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/back-end/mongoDB.png" alt="mongo" width="70"/>
     <sub>MongoDB</sub>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/back-end/express.png" alt="express" width="70"/>
     <sub>Express.js</sub>
  &nbsp;&nbsp;&nbsp;&nbsp;
   <img src="assets/back-end/socketIO.png" alt="socketIO" width="80"/>
</p>

## 🎨 Front-end

<p align="left">
  <img src="assets/front-end/bootstrap.png" alt="bootstrap" width="70"/>
     <sub>Bootstrap</sub>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/front-end/chartjs.png" alt="chartjs" width="70"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
   <a href="https://www.npmjs.com/package/ejs">
  <img src="assets/front-end/ejs_icon.png" alt="EJS" width="70" />
    
  &nbsp;&nbsp;&nbsp;&nbsp;
  </p>
  
## 📦 NPM
 <p align="left">
  <img src="assets/NPM/passport.png" alt="mongo" width="70"/>
     <sub>Passport</sub>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/steam">
  <img src="assets/NPM/steam.png" alt="steam" width="110" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/steam-web">
  <img src="assets/NPM/steam-web.png" alt="steam-web" width="110" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/csgo">
  <img src="assets/NPM/csgo.png" alt="csgo" width="120" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/demofile">
  <img src="assets/NPM/demo_file.png" alt="demo_file" width="120" />
  
   
  
</a>
 
</p>
