# # CS:GO STATS – Captura y visualización de datos en tiempo real y post-partida

> 🚫 **IMPORTANTE:**  
 ⚠️ **Este proyecto ya no es funcional**. Fue desarrollado para CS:GO (descontinuado) y no es compatible con CS2. Se conserva como referencia de aprendizaje.

## Introducción
🚀 Aplicación web diseñada para capturar, visualizar y almacenar datos en tiempo real de partidas del videojuego **Counter-Strike: Global Offensive** (CS:GO), con el objetivo de apoyar la mejora continua del jugador a través de la interpretación de métricas clave y reportes post-partida.

El sistema no realiza análisis automatizados, pero organiza los datos de forma estructurada y comprensible para facilitar la evaluación del rendimiento tanto en tiempo real como una vez finalizada la partida.

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
  <img src="assets/front-end/ejs_icon.png" alt="EJS" width="70" /></a>
  </p>
  
## 📦 NPM
 <p align="left">
  <img src="assets/NPM/passport.png" alt="mongo" width="70"/>
     <sub>Passport</sub>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/steam">
  <img src="assets/NPM/steam.png" alt="steam" width="110" /></a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/steam-web">
  <img src="assets/NPM/steam-web.png" alt="steam-web" width="110" /></a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/csgo">
  <img src="assets/NPM/csgo.png" alt="csgo" width="120" /></a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/demofile">
  <img src="assets/NPM/demo_file.png" alt="demo_file" width="120" /></a> 
  
</p>
&nbsp;&nbsp;&nbsp;&nbsp;

## 🛠️ Funcionalidades
- 📡 Visualización de gráficos en tiempo real al conectarse a una partida
- 📈 Visualización de estadísticas base del jugador extraídas desde su perfil de Steam
- 🗃️ Historial de últimas 10 partidas jugadas
- 🔍 **Acceso detallado a los datos de la última partida:**
  - K/D/A del jugador
  - Registro por ronda de asesinatos, muertes y arma utilizada
  - Historial de eventos de todos los jugadores en cada ronda
  - *(No implementado)* Visualización de eventos en un mapa de calor mediante coordenadas extraídas desde la replay oficial (`.dem`)

## 🚀 Instalación



>⚠️**Este sistema ya no es funcional ni tiene aplicación práctica actual.**  Sin embargo, por motivos de documentación y estándares, se incluyen a continuación los pasos que fueron necesarios para su funcionamiento en el contexto original.

  
   

### 🔧 Requisitos previos
- Cuenta de Steam con el videojuego en la biblioteca sin VAC
- Tener el archivo de configuración GSI dentro del directorio del juego
- Steam API Key valida 
- Base de datos MongoDB mediante cuenta de  MongoDB Atlas (Base de datos en la nube)

### 📦 Instalación paso a paso
1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tuusuario/csgo-stats.git
   cd csgo-stats 
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Verificar que el archivo de configuración GSI este dentro del directorio del juego**
   ```bash
   D:\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo\cfg\gamestate_integration_consolesample.cfg
   ```
En caso de no tener el archivo en el directorio copiar lo siguiente y renombrarlo de forma opcional a:  **gamestate_integration_consolesample.cfg**
      
     
     
 ```bash
   "Console Sample v.1"
   {
   "uri" "http://127.0.0.1:3000"
   "timeout" "5.0"
   "buffer"  "0.1"
   "throttle" "0.5"
   "heartbeat" "60.0"
   "auth"
   {
      "token" "CCWJu64ZV3JHDT8hZc"
   }
   "output"
   {
      "precision_time" "3"
      "precision_position" "1"
      "precision_vector" "3"
   }
   "data"
   {
      "provider"            "1"      // general info about client being listened to: game name, appid, client steamid, etc.
      "map"                 "1"      // map, gamemode, and current match phase ('warmup', 'intermission', 'gameover', 'live') and current score
      "round"               "1"      // round phase ('freezetime', 'over', 'live'), bomb state ('planted', 'exploded', 'defused'), and round winner (if any)
      "player_id"           "1"      // player name, clan tag, observer slot (ie key to press to observe this player) and team
      "player_state"        "1"      // player state for this current round such as health, armor, kills this round, etc.
      "player_weapons"      "1"      // output equipped weapons.
      "player_match_stats"  "1"      // player stats this match such as kill, assists, score, deaths and MVPs
   }
   ```
4. **Variables de entorno**

   (PENDIENTE)
5. **Inicia el servidor**
   
   Opción 1: Ejecutar el archivo `.bat` **Run App** ubicada en la carpeta del proyecto

   Opción 2: Ejecutar el siguiente comando en la terminal
   ```bash
   npm run
   ```


   