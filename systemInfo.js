
const osModule = require('./osModule');  
const networkModule = require('./networkModule');  
const os = require('os');


function displaySystemInfo() {

  console.log("=== Información del Sistema ===");
  
  console.log(`Sistema Operativo: ${os.type()} ${os.release()}`);
  console.log(`Plataforma: ${os.platform()}`);
  console.log(`Arquitectura: ${os.arch()}`);
  console.log(`Versión de Node.js: ${process.version}`);
  console.log(`Memoria Total: ${os.totalmem() / (1024 ** 3)} GB`);
  console.log(`Memoria Libre: ${os.freemem() / (1024 ** 3)} GB`);
  
  
  console.log("=== Información de los CPUs ===");
  os.cpus().forEach((cpu, index) => {
    console.log(`CPU ${index + 1}: ${cpu.model}`);
  });

  console.log("=== Información de la Red ===");
  networkModule.getNetworkInfo();

  
  console.log("=== Información Adicional ===");
  console.log(`Tipo de máquina: ${os.type()}`);
  console.log(`Nombre de la máquina: ${os.hostname()}`);
  console.log(`Tiempo de actividad: ${os.uptime()} segundos`);
}


displaySystemInfo();
